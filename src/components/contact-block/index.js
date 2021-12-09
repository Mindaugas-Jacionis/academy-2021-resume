import Link from "../link";
import "./index.css";

function ContactBlock({ title, content }) {
  return (
    <div className="contact-box">
      <h3 className="contact-box__headline">{title}</h3>
      {content.map((entry, i) =>
        entry.href ? (
          <Link key={i} className="contact-box__link" href={entry.href}>
            {entry.text}
          </Link>
        ) : (
          <p key={i}>{entry}</p>
        )
      )}
    </div>
  );
}

export default ContactBlock;
