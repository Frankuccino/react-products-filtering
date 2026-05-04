import { useId, useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";
import Card from "./components/Card";

// Database
import products from "./db/data";

const App = () => {
  const uId = useId();

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Search Input Query Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Search Input Filter
  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase() !== -1),
  );

  // Radio Filters
  const handleChange = (event) => setSelectedCategory(event.target.value);

  // Buttons Filter
  const handleClick = (event) => setSelectedCategory(event.target.value);

  // ------ Main function --------> Card Component
  function filteredData(products, selectedSource, query) {
    // Copying the source value here, so no direct mutation of the source.
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Filtering Selected Radio Input
    if (selectedSource) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => {
          category === selectedSource ||
            color === selectedSource ||
            company === selectedSource ||
            newPrice === selectedSource ||
            title === selectedSource;
        },
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card
          key={`${uId}-${index}`}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ),
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
