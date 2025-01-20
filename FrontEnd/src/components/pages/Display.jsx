import React, { useContext, useState } from "react";
import ExploreMenuItem from "../pages/ExploreMenuItem";
import Product from "./product";
import { StoreContext } from "./StoreContext";
import "./Display.css";

const Display = () => {
  const { List = [] } = useContext(StoreContext);
  const [category, setCategory] = useState("All");
  return (
    <section>
      <div className="ExploreMenu">
        <ExploreMenuItem category={category} setCategory={setCategory} />
      </div>

      <div className="display-container">
        {List.filter(
          (item) => category === "All" || item.category === category
        ).map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Display;
