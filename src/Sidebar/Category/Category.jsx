import Input from "../../components/Input";
import "./Category.css";

const Category = () => {
  const category = ["All", "Sneakers", "Flats", "Sandals", "Heels"];

  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>

      <div>
        {category.map((name) => (
          <Input group="category" name={name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
