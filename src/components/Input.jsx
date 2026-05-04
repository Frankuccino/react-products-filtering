const Input = ({ handleChange, value, group, name, key }) => {
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
    <label className="sidebar-label-container" key={key}>
      <input onChange={handleChange} type="radio" value={value} name={group} />
      <span
        className={`${name === "All" && group === "colors" ? "all" : ""} checkmark`}
        style={{
          backgroundColor:
            isColorFilter && name !== "All" ? styleColors[colorKey] : "",
        }}
      ></span>
      {name}
    </label>
  );
};

export default Input;
