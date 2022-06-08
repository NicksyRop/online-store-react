import React from "react";
import { useGetAllProductsQuery } from "../features/productApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return <div>Home</div>;
};

export default Home;
