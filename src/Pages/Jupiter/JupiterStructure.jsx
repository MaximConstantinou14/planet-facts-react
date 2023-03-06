import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Jupiter/jupiterStructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import jupiterStructureImg from "../../Assets/planet-jupiter-internal.svg"

const JupiterStructure = () => {
  return (
    <div className="jupiter_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure_jupiter">
              <Link className="structure_link_to_overview" to='/jupiterOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure_jupiter">structure</button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="surface_btn_mobile_structure_jupiter">
              <Link className="structure_link_to_surface" to='/jupiterSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="jupiter_structure">
        <div className="planet_img_container">
          <img src={jupiterStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="jupiter_structure_text_container">
          <div className="jupiter_structure_text_wrapper">
            <h1 className="jupiter_title">jupiter</h1>
            <p className="jupiter_structure_description">
              When the Juno arrived in 2016, it found that 
              Jupiter has a very diffuse core that mixes into 
              its mantle. A possible cause is an impact from a planet 
              of about ten Earth masses a few million years after Jupiter's 
              formation, which would have disrupted an originally solid Jovian core.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure_jupiter"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to='/jupiterOverview'>overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure_jupiter"><p className="pagination_num_structure">02</p>
                <Link className="structure_link_to_structure" to='/jupiterStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure_jupiter"><p className="pagination_num_structure">03</p>
                <Link className="structure_link_to_surface" to='/jupiterSurface'>surface geology</Link>
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

export default JupiterStructure