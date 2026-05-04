import { useId } from "react";
import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  const colors = ["all", "black", "blue", "red", "green", "white"];
  const uId = useId();

  return (
    <div>
      <h2 className="color-title">Colors</h2>
      {colors.map((color, index) => (
        <Input
          key={`${uId}-${index}`}
          handleChange={handleChange}
          value={color}
          group="colors"
          name={color}
        />
      ))}
    </div>
  );
};

export default Colors;
