import React from "react";
import { NavLink } from "react-router-dom";
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
            <img 
                src="https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/original/products/7309/12556/ams-39-outdoor-snack-drink-vending-machine__28519.1658495606.jpg?c=1"
                alt="Vending Machine"
                className="vending-machine-image"
            />
            <ul>
                <li>
                    <NavLink exact to='/chips'>Chips</NavLink>
                </li>
                <li>
                    <NavLink exact to='/candy'>Candy</NavLink>
                </li>
                <li>
                    <NavLink exact to='/soda'>Soda</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default VendingMachine;