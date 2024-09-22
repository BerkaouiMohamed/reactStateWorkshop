function Button(props) {

  return (
    <button className="button" style={{ backgroundColor: props.background }}>
      {props.children}
    </button>
  );
}

export default Button;
