import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Jupiter/jupiterOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import jupiterImg from "../../Assets/planet-jupiter.svg";

const JupiterOverview = () => {
  return (
    <div className="jupiter_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview">
            <button autofocus className="overview_btn_mobile_overview_jupiter">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview_jupiter">
              <Link className="overview_link_to_strucure" to='/jupiterStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview_jupiter">
              <Link className="overview_link_to_surface" to='/jupiterSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="jupiter_overview">
        <div className="planet_img_container">
          <img src={jupiterImg} alt="" className="planet_img" />
        </div>
        
        <div className="jupiter_overview_text_container">
          <div className="jupiter_overview_text_wrapper">
            <h1 className="jupiter_title">jupiter</h1>
            <p className="jupiter_overview_description">
              Jupiter is the fifth planet from the Sun and the 
              largest in the Solar System. It is a gas giant with a 
              mass two and a half times that of all the other planets 
              in the Solar System combined, but less than one-thousandth 
              the mass of the Sun.
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview_jupiter"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview_jupiter"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_structure" to='/jupiterStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview_jupiter"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_surface" to='/jupiterSurface'>surface goelogy</Link>
                </button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="jupiter_rotation">
            <p className="jupiter_rotation_title">rotation time</p>
            <h3 className="jupiter_rotation_time">9.93 hours</h3>
          </div>
          <div className="jupiter_revolution">
            <p className="jupiter_revolution_title">revolution time</p>
            <h3 className="jupiter_revolution_time">11.86 years</h3>
          </div>
          <div className="jupiter_radius">
            <p className="jupiter_radius_title">radius</p>
            <h3 className="jupiter_radius_num">69,911 km</h3>
          </div>
          <div className="jupiter_temp">
            <p className="jupiter_temp_title">average temp.</p>
            <h3 className="jupiter_temp_num">-108°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="jupiter_rotation">
            <p className="jupiter_rotation_title">rotation time</p>
            <h3 className="jupiter_rotation_time">9.93 hours</h3>
          </div>
          <div className="jupiter_revolution">
            <p className="jupiter_revolution_title">revolution time</p>
            <h3 className="jupiter_revolution_time">11.86 years</h3>
          </div>
          <div className="jupiter_radius">
            <p className="jupiter_radius_title">radius</p>
            <h3 className="jupiter_radius_num">69,911 km</h3>
          </div>
          <div className="jupiter_temp">
            <p className="jupiter_temp_title">average temp.</p>
            <h3 className="jupiter_temp_num">-108°C</h3>
          </div>
        </div>
    </div>
  )
}

export default JupiterOverview