import { useEffect, useState } from 'react'

function HeroSection({ intro, name, role, label, words }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const delay = isDeleting
      ? 55
      : charIndex === currentWord.length
        ? 1100
        : charIndex === 0
          ? 260
          : 90

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextCharIndex = charIndex + 1
        setCharIndex(nextCharIndex)

        if (nextCharIndex === currentWord.length) {
          setIsDeleting(true)
        }

        return
      }

      const nextCharIndex = charIndex - 1
      setCharIndex(nextCharIndex)

      if (nextCharIndex === 0) {
        setIsDeleting(false)
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length)
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words])

  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="hero-intro">{intro}</p>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-role">{role}</p>
        <p className="hero-label">{label}</p>
        <div className="typing-line">
          <span>{words[wordIndex].slice(0, charIndex)}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
