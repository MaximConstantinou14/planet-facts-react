import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Venus/venusStructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import venusStructureImg from "../../Assets/planet-venus-internal.svg"

const VenusStructure = () => {
  return (
    <div className="venus_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure_venus">
              <Link className="structure_link_to_overview" to='/venusOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure_venus">structure</button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="surface_btn_mobile_structure_venus">
              <Link className="structure_link_to_surface" to='/venusSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="venus_structure">
        <div className="planet_img_container">
          <img src={venusStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="venus_structure_text_container">
          <div className="venus_structure_text_wrapper">
            <h1 className="venus_title">Venus</h1>
            <p className="venus_structure_description">
              The similarity in size and density between Venus 
              and Earth suggests they share a similar internal 
              structure: a core, mantle, and crust. Like that of Earth, 
              Venusian core is most likely at least partially liquid because 
              the two planets have been cooling at about the same rate.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure_venus"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to='/venusOverview'>overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure_venus"><p className="pagination_num_structure">02</p>
                <Link className="structure_link_to_structure" to='/venusStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure_venus"><p className="pagination_num_structure">03</p>
                <Link className="structure_link_to_surface" to='/venusSurface'>surface geology</Link>
                </button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="venus_rotation">
            <p className="venus_rotation_title">rotation time</p>
            <h3 className="venus_rotation_time">243 days</h3>
          </div>
          <div className="venus_revolution">
            <p className="venus_revolution_title">revolution time</p>
            <h3 className="venus_revolution_time">224.7 days</h3>
          </div>
          <div className="venus_radius">
            <p className="venus_radius_title">radius</p>
            <h3 className="venus_radius_num">6,051.8 km</h3>
          </div>
          <div className="venus_temp">
            <p className="venus_temp_title">average temp.</p>
            <h3 className="venus_temp_num">471°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="venus_rotation">
            <p className="venus_rotation_title">rotation time</p>
            <h3 className="venus_rotation_time">243 days</h3>
          </div>
          <div className="venus_revolution">
            <p className="venus_revolution_title">revolution time</p>
            <h3 className="venus_revolution_time">224.7 days</h3>
          </div>
          <div className="venus_radius">
            <p className="venus_radius_title">radius</p>
            <h3 className="venus_radius_num">6,051.8 km</h3>
          </div>
          <div className="venus_temp">
            <p className="venus_temp_title">average temp.</p>
            <h3 className="venus_temp_num">471°C</h3>
          </div>
        </div>
    </div>
  )
}

export default VenusStructure