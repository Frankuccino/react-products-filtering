import { useId } from "react";
import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  const priceRanges = [
    "All",
    "$0 - $50",
    "$50 - $100",
    "$100 - $150",
    "Over $150",
  ];
  const uId = useId();

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {priceRanges.map((range, index) => (
        <Input
          key={`${uId}-${index}`}
          handleChange={handleChange}
          value={name}
          group="prices"
          name={range}
        />
      ))}
    </div>
  );
};

export default Price;
