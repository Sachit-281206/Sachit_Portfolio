function ProfilesSection({ profiles }) {
  return (
    <section className="section" id="coding-profiles">
      <div className="achievements-wrap profiles-section">
        <h2 className="section-title">Coding Profiles</h2>
        {profiles.map((profile) => (
          <article className="profile-card" key={profile.name}>
            <h3 className="profile-name">{profile.name}</h3>
            {profile.topLabel ? (
              <p className="profile-label">{profile.topLabel}</p>
            ) : null}
            <p className="profile-number">{profile.metric}</p>
            <p className="profile-label">{profile.bottomLabel}</p>
            <a
              className="profile-link"
              href={profile.url}
              target="_blank"
              rel="noreferrer"
            >
              Profile -&gt;
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProfilesSection
