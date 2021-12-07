import "./index.css";

function Separator({ isFancy, isShort }) {
  const className = "separator".concat(
    isFancy ? " separator--fancy" : "",
    isShort ? " separator--short" : ""
  );

  return <hr className={className} />;
}

export default Separator;
