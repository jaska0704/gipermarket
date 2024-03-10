function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        background: "green",
        borderRadius: "50%",
        right: "15px",
        zIndex: "9",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
        position: "absolute",
        left: "15px",
        zIndex: "9",
      }}
      onClick={onClick}
    />
  );
}

export { SampleNextArrow, SamplePrevArrow };
