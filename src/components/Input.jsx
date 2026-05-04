const Input = ({ handleChange, value, group, name }) => {
  const styleColors = {
    black: "#000000",
    blue: "#1e90ff",
    red: "#ff4d4d",
    green: "#2ecc71",
    white: "#ffffff",
  };
  const colorKey = name ? name.toLowerCase() : "";
  const isColorFilter = group === "colors";

  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={group} />
      <span
        className={`${name === "All" && group === "colors" ? "all" : ""} checkmark`}
        style={{
          backgroundColor:
            isColorFilter && name !== "All" ? styleColors[colorKey] : "",
          border:
            isColorFilter && name === "white" ? "2px solid #969696" : "none",
        }}
      ></span>
      {name}
    </label>
  );
};

export default Input;
