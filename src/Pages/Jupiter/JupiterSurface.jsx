import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Jupiter/jupiterSurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import jupiterImg from "../../Assets/planet-jupiter.svg";
import surfaceJupiterImg from "../../Assets/geology-jupiter.png"

const JupiterSurface = () => {
  return (
    <div className="jupiter_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface_jupiter">
              <Link className="surface_link_to_overview" to='/jupiterOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface_jupiter">
              <Link className="surface_link_to_structure" to='/jupiterStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="surface_btn_mobile_surface_jupiter">surface</button>
        </li>
      </ul>

      <div className="jupiter_structure">
        <div className="planet_img_container">
          <img src={jupiterImg} alt="" className="planet_img" />
          <img src={surfaceJupiterImg} alt="Geology Image From Mars"className="surface_jupiter_img"/>
        </div>
        
        <div className="jupiter_structure_text_container">
          <div className="jupiter_structure_text_wrapper">
            <h1 className="jupiter_title">jupiter</h1>
            <p className="jupiter_structure_description">
              The best known feature of Jupiter is the Great Red Spot, 
              a persistent anticyclonic storm located 22° south of the equator. 
              It is known to have existed since at least 1831, and possibly since 1665.
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button className="overview_btn_surface_jupiter"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/jupiterOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface_jupiter"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/jupiterStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface_jupiter"><p className="pagination_num_surface">03</p>surface geology</button>
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

export default JupiterSurface