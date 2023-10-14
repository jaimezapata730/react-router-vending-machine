import React from "react";
import { NavLink } from "react-router-dom";


const Candy = () => {
    return (
        <div className="Snack">
            <h2>Candy</h2>
            <img 
                src="https://www.2foodtrippers.com/wp-content/uploads/2021/05/American-Candy-Social-IMG.jpg"
                alt="Candy"
                className="snack-image"
            />
            <p>Yum Yum !!</p>
            <NavLink to='/'>Return To Vending Machine !</NavLink>
        </div>
    )
}

export default Candy;