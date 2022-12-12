import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import "./cuisine.css";

const Cuisine = () => {
  const [cusine, setCusine] = useState([]);
  let params = useParams();

  const getCusine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCusine(recipes.results);
  };

  useEffect(() => {
    getCusine(params.type);
  }, [params.type]);
  console.log(params);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid"
    >
      {cusine.map((item) => {
        return (
          <Link to={"/recipe/" + item.id}>
            <div className="card" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Cuisine;
