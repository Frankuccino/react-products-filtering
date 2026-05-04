import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <figure className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoe"
        className="card-img"
      />
      <figcaption className="card-details">
        <h3 className="card-title">Shoe</h3>
        <section className="card-reviews">
          <div className="stars">
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
            <AiFillStar className="ratings-start" />
          </div>
          <span className="total-reviews">4 Stars</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>#300</del> 200
          </div>
          <div className="bag">
            <BsBagHeartFill />
          </div>
        </section>
      </figcaption>
    </figure>
  );
};

export default Card;
