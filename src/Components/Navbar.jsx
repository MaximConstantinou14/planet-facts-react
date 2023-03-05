import React from 'react';
import "../Css/navbar.css";
import "../Css/variables.css";

import burgerImg from "../Assets/icon-hamburger.svg";
import chevronIcon from "../Assets/icon-chevron.svg";

import { useState } from 'react';

const Navbar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toogleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    };

  return (
    <nav className='nav'>
        <div className="logo">the planets</div>

        <ul className={hamburgerOpen ? "nav_list_active" : "nav_list_inactive"}>
            <li className="nav_item">
                <div className="mobile_color_circle_mercury"></div>
                <a href="#" className="nav_link">Mercury</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_venus"></div>
                <a href="#" className="nav_link">Venus</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_earth"></div>
                <a href="#" className="nav_link">Earth</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_mars"></div>
                <a href="#" className="nav_link">Mars</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_jupiter"></div>
                <a href="#" className="nav_link">Jupiter</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_saturn"></div>
                <a href="#" className="nav_link">Saturn</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_uranus"></div>
                <a href="#" className="nav_link">Uranus</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_neptune"></div>
                <a href="#" className="nav_link">Neptune</a>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
        </ul>
        <button onClick={toogleHamburger} className="burger_btn">
            <img src={burgerImg} alt="Mobile menu icon" className="burger_img" />
        </button>
    </nav>
  )
}

export default Navbar