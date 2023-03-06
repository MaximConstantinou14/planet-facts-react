import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Earth/earthOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import earthImg from "../../Assets/planet-earth.svg";

const EarthOverview = () => {
  return (
    <div className="earth_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview">
            <button autofocus className="overview_btn_mobile_overview_earth">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview_earth">
              <Link className="overview_link_to_strucure" to='/earthStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview_earth">
              <Link className="overview_link_to_surface" to='/earthSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="earth_overview">
        <div className="planet_img_container">
          <img src={earthImg} alt="" className="planet_img" />
        </div>
        
        <div className="earth_overview_text_container">
          <div className="earth_overview_text_wrapper">
            <h1 className="earth_title">Earth</h1>
            <p className="earth_overview_description">
              Third planet from the Sun and the only known 
              planet to harbor life. About 29.2% of Earth's surface 
              is land with remaining 70.8% is covered with water. 
              Earth's distance from the Sun, physical properties and 
              geological history have allowed life to evolve and thrive.
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview_earth"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview_earth"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_structure" to='/earthStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview_earth"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_surface" to='/earthSurface'>surface goelogy</Link>
                </button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="earth_rotation">
            <p className="earth_rotation_title">rotation time</p>
            <h3 className="earth_rotation_time">0.99 days</h3>
          </div>
          <div className="earth_revolution">
            <p className="earth_revolution_title">revolution time</p>
            <h3 className="earth_revolution_time">365.26 days</h3>
          </div>
          <div className="earth_radius">
            <p className="earth_radius_title">radius</p>
            <h3 className="earth_radius_num">6,371 km</h3>
          </div>
          <div className="earth_temp">
            <p className="earth_temp_title">average temp.</p>
            <h3 className="earth_temp_num">16°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="earth_rotation">
            <p className="earth_rotation_title">rotation time</p>
            <h3 className="earth_rotation_time">0.99 days</h3>
          </div>
          <div className="earth_revolution">
            <p className="earth_revolution_title">revolution time</p>
            <h3 className="earth_revolution_time">365.26 days</h3>
          </div>
          <div className="earth_radius">
            <p className="earth_radius_title">radius</p>
            <h3 className="earth_radius_num">6,371 km</h3>
          </div>
          <div className="earth_temp">
            <p className="earth_temp_title">average temp.</p>
            <h3 className="earth_temp_num">16°C</h3>
          </div>
        </div>
    </div>
  )
}

export default EarthOverview