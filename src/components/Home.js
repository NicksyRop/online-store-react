import React from "react";
import { useGetAllProductsQuery } from "../features/productApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="product">
            {data?.map((item) => (
              <div key={item.id} className="product">
                <h3>{item.name}</h3>
                <img alt="product pictures" src={item.image} />
                <div className="details">
                  <span className="desc">{item.desc}</span>
                  <span className="price">${item.price}</span>
                </div>
                <button>Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
