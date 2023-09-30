import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { clearSearch, fetchSearched } from "../actions/gameActions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setSearch(event.target.value.toLowerCase().trim())
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchSearched(search))
        setSearch("");
    }

    const handleLogoClick = () => {
      dispatch(clearSearch())
    }


    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={handleLogoClick}>
                <img src={logo} alt="logo" />
                <h1>GamingZone</h1>
            </Logo>
            <form className="search">
                <input value={search} onChange={handleChange} type="text" />
                <button type="submit" onClick={handleSubmit}>
                    Search
                </button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;