import { AiFillStar } from "react-icons/ai";
import "./Products.css";
import { BsBagHeartFill } from "react-icons/bs";
import Card from "../components/Card";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <figure className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
            className="card-img"
          />
          <figcaption className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-start" />
              <AiFillStar className="ratings-start" />
              <AiFillStar className="ratings-start" />
              <AiFillStar className="ratings-start" />
              <AiFillStar className="ratings-start" />
              <span className="total-reviews">4</span>
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};

export default Products;
