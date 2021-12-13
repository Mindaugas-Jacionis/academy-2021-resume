import data from "./data";
import "./index.css";

function Header({ language, setLanguage }) {
  return (
    <header className="header">
      <div className="header__info">
        <h1 className="header__info-name">{data[language].name}</h1>
        <h2 className="header__info-title">{data[language].title}</h2>
      </div>
      <select
        className="header__lang-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="lt">Lietuviškai</option>
      </select>
    </header>
  );
}

export default Header;
