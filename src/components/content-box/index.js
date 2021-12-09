import cx from "classnames";
import Separator from "../separator";
import "./index.css";

function ContentBox({ title, children, className }) {
  return (
    <div className={cx("content-box", className)}>
      <h3 className="content-box__title">{title}</h3>
      <Separator isFancy />
      <div className="content-box__content d-inline-flex flex-column">{children}</div>
    </div>
  );
}

export default ContentBox;
