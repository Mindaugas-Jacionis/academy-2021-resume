import "./index.css";

function Experience({ company, period, title, children, achievements }) {
  return (
    <div className="experience">
      <div className="experience__meta">
        <p>{title}</p>
        <p>{company}</p>
        <p>{period}</p>
      </div>
      <p className="experience__description">{children}</p>
      {Array.isArray(achievements) && (
        <ul className="experience__achievements">
          {achievements.map((entry, i) => (
            <li key={i}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Experience;
