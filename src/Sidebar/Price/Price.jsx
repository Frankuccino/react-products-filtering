import { useId } from "react";
import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  const prices = [
    { label: "All", value: "all" },
    { label: "$0 - 50", value: 50 },
    { label: "$50 - 100", value: 100 },
    { label: "$100 - 150", value: 150 },
    { label: "Over $150", value: 200 },
  ];

  const uId = useId();

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {prices.map(({ label, value }, index) => (
        <Input
          key={`${uId}-${index}`}
          handleChange={handleChange}
          value={value}
          group="prices"
          name={label}
        />
      ))}
    </div>
  );
};

export default Price;
