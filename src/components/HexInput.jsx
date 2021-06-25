function HexInput (props) {
  function onChange(e) {
    props.onChange(e.currentTarget.value);
  }

  return (
    <input
      value={props.value}
      onChange={onChange}
      maxLength={7}
      type="text"
      className="hex-input"
      placeholder="#000000"
    />
  );
};

export default HexInput;