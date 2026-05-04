import Input from "../../components/Input";
import "./Price.css";

const Price = () => {
  const priceRanges = [
    "All",
    "$0 - $50",
    "$50 - $100",
    "$100 - $150",
    "Over $150",
  ];

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {priceRanges.map((range) => (
        <Input group="prices" name={range} />
      ))}
    </div>
  );
};

export default Price;
