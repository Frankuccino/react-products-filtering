import { BsBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <figure className="card">
      <img src={img} alt={title} className="card-img" />
      <figcaption className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <div className="stars">
            {star}
            {star}
            {star}
            {star}
            {star} 5 Stars
          </div>
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>
            <br />
            <span>${newPrice}</span>
          </div>
          <div className="bag-icon">
            <BsBagHeartFill />
          </div>
        </section>
      </figcaption>
    </figure>
  );
};

export default Card;
