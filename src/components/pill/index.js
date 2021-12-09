import cx from "classnames";
import "./index.css";

function Pill({ children, color }) {
  const className = cx("pill", ["green", "yellow", "red"].includes(color) && `pill--${color}`);

  return <span className={className}>{children}</span>;
}

export default Pill;
