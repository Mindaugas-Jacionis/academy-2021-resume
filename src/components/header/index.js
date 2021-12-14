import React from "react";
import data from "./data";
import "./index.css";

class Header extends React.Component {
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps", { curent: this.props, next: nextProps });
  // }

  state = {
    random: 13,
    another: 55,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", { state, props });

    if (props.language === "lt") {
      return { random: 7 }; // { ...{ random: 13, another: 55 }, ...{ random: 7 } } ---> { another: 55, random: 7 }
    }

    return {}; // { ...{ random: 13, another: 55 }, ...{} } ---> { random: 13, another: 55 }
  }

  render() {
    console.log("render Header");
    const { language, setLanguage } = this.props;

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
          <option value="es">Española</option>
        </select>
      </header>
    );
  }
}

export default Header;
