import React from "react";
import { useGetAllProductsQuery } from "../features/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const history = useHistory();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

    //redirect to cart after successfull addition to cart
    history.push("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((item) => (
              <div key={item.id} className="product">
                <h3>{item.name}</h3>
                <img alt="product pictures" src={item.image} />
                <div className="details">
                  <span className="desc">{item.desc}</span>
                  <span className="price">${item.price}</span>
                </div>
                <button onClick={() => handleAddToCart(item)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
