import Input from "../../components/Input";
import "./Colors.css";

const Colors = () => {
  const colors = ["All", "Black", "Blue", "Red", "Green", "White"];

  return (
    <div>
      <h2 className="color-title">Colors</h2>
      {colors.map((color) => (
        <Input group="colors" name={color} />
      ))}
    </div>
  );
};

export default Colors;
