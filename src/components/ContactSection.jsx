function ContactIcon({ type }) {
  if (type === 'linkedin') {
    return (
      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM2.75 9.75h4.47v11.5H2.75ZM9.87 9.75h4.28v1.57h.06c.6-1.13 2.05-2.32 4.22-2.32 4.52 0 5.36 2.98 5.36 6.85v5.4h-4.45v-4.79c0-1.14-.02-2.61-1.59-2.61-1.6 0-1.85 1.25-1.85 2.53v4.87H9.87Z" />
      </svg>
    )
  }

  if (type === 'email') {
    return (
      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.25 5.5A2.25 2.25 0 0 1 4.5 3.25h15A2.25 2.25 0 0 1 21.75 5.5v13A2.25 2.25 0 0 1 19.5 20.75h-15A2.25 2.25 0 0 1 2.25 18.5Zm2.12-.75 7.63 6.02 7.63-6.02Zm15.88 1.92-7.79 6.15a.75.75 0 0 1-.92 0L3.75 6.67v11.83c0 .41.34.75.75.75h15c.41 0 .75-.34.75-.75Z" />
      </svg>
    )
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.69-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.73-1.54-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.81 0c2.22-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function ContactSection({ contacts }) {
  return (
    <section className="section" id="contact">
      <div className="section-card contact-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-links">
          {contacts.map((contact) => (
            <a
              className="contact-item"
              href={contact.url}
              key={contact.name}
              target={contact.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={contact.url.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-handle">{contact.handle}</p>
              <span className="contact-icon" aria-hidden="true">
                <ContactIcon type={contact.type} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
