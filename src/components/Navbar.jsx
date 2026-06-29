function Navbar({ brand, links }) {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        {brand}
      </a>
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
