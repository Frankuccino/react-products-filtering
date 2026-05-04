import { useId } from "react";
import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  const colors = ["All", "Black", "Blue", "Red", "Green", "White"];
  const uId = useId();

  return (
    <div>
      <h2 className="color-title">Colors</h2>
      {colors.map((color, index) => (
        <Input
          key={`${uId}-${index}`}
          handleChange={handleChange}
          value={name}
          group="colors"
          name={color}
        />
      ))}
    </div>
  );
};

export default Colors;
