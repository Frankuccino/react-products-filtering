import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const buttons = ["All", "Nike", "Adiddas", "Puma", "Vans"];

  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {buttons.map((name) => (
            <Button onClickHandler={handleClick} title={name} value={name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommended;
