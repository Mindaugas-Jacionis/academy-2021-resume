import "./index.css";

function SocialsList({ items }) {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <ul className="social-list">
      {items.map(({ text, url, img, alt }, i) => (
        <li key={i} className="social-list__item">
          <a href={url} target="_blank" rel="noreferrer">
            <img src={img} alt={alt} />
            <p>{text}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialsList;
