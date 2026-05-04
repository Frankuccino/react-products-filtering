const Input = ({ group, name }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={group} />
      <span className="checkmark"></span>
      {name}
    </label>
  );
};

export default Input;
