import "./Products.css";
import Card from "../components/Card";
// import { AiFillStar } from "react-icons/ai";
import data from "../db/data.jsx";

const Products = () => {
  // const exampleData = {
  //   img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
  //   title: "Nike Air Monarch IV",
  //   star: <AiFillStar className="rating-star" />,
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Nike",
  //   color: "white",
  //   category: "sneakers",
  // };

  // const { img, title, star, reviews, prevPrice, newPrice } = exampleData;

  // TODO: Add the color and category properties for filtering later.

  return (
    <>
      <section className="card-container">
        {data.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
          <Card
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        ))}
      </section>
    </>
  );
};

export default Products;
