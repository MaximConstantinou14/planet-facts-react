import React from 'react';
import "../Css/navbar.css";
import "../Css/variables.css";

import burgerImg from "../Assets/icon-hamburger.svg";
import chevronIcon from "../Assets/icon-chevron.svg";

import {Link} from "react-router-dom";

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
                <Link to='/' className="nav_link">Mercury</Link>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_venus"></div>
                <Link to='/venusOverview' className="nav_link">Venus</Link>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_earth"></div>
                <Link to='/earthOverview' className="nav_link">Earth</Link>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_mars"></div>
                <Link to='/marsOverview' className="nav_link">Mars</Link>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_jupiter"></div>
                <Link to='/jupiterOverview' className="nav_link">Jupiter</Link>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_saturn"></div>
                <Link to='/saturnOverview' className="nav_link">Saturn</Link>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_uranus"></div>
                <Link to='/uranusOverview' className="nav_link">Uranus</Link>
                <img src={chevronIcon} alt="" className="chevron" />
            </li>
            <hr className="mobile_nav_menu_line" />
            <li className="nav_item">
                <div className="mobile_color_circle_neptune"></div>
                <Link to='/neptuneOverview' className="nav_link">Neptune</Link>
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