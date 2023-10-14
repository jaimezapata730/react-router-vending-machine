import React from "react";
import { NavLink } from "react-router-dom";
import './SnackStyles.css';

const Soda = () => {
    return (
        <div className="Soda">
            <h2>Soda</h2>
            <img 
                src="https://www.thedailymeal.com/img/gallery/16-oldest-soda-brands-that-are-still-on-the-market/intro-1674496494.jpg"
                alt="Soda"
                className="snack-image"
            />
            <p>Yum Yum !!</p>
            <NavLink to='/'>Return To Vending Machine !</NavLink>
        </div>
    )
}

export default Soda;