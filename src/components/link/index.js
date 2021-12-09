import cx from "classnames";
import "./index.css";

function Link({ href, children, className }) {
  return (
    <a className={cx("link", className)} href={href}>
      {children}
    </a>
  );
}

export default Link;
