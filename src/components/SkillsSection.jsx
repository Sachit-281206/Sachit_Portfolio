function SkillsSection({ groups }) {
  return (
    <section className="section" id="skills">
      <div className="section-card skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-groups">
          {groups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
