
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./popular.css";
import { Link } from "react-router-dom";

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);
    
    useEffect(() => {
      getVeggie();
    }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our vegetarian picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="card">
                <Link to={'/recipe/' +item.id}>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                <Gradient />
                </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
      
    </div>
  )
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
  
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Veggie