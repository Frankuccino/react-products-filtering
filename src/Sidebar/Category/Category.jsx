import { useId } from "react";
import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange }) => {
  const category = ["all", "sneakers", "flats", "sandals", "heels"];
  const uId = useId();

  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>

      <div>
        {category.map((name, index) => (
          <Input
            key={`${uId}-${index}`}
            handleChange={handleChange}
            value={name}
            group="category"
            name={name}
            color="black"
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
