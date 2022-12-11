import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import './category.css'
const Category = () => {
  return (
    <List>
      
      <NavLink className="SLink" to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink  className="SLink" to={'/cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
    </List>
    


  );
};
const List = styled.div`
display:flex;
justify-content: center;
margin: 2rem 0rem;
`


export default Category;
