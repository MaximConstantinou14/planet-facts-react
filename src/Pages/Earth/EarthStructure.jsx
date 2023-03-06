import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Earth/earthStructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import earthStructureImg from "../../Assets/planet-earth-internal.svg"

const EarthStructure = () => {
  return (
    <div className="earth_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure_earth">
              <Link className="structure_link_to_overview" to='/earthOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure_earth">structure</button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="surface_btn_mobile_structure_earth">
              <Link className="structure_link_to_surface" to='/earthSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="earth_structure">
        <div className="planet_img_container">
          <img src={earthStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="earth_structure_text_container">
          <div className="earth_structure_text_wrapper">
            <h1 className="earth_title">earth</h1>
            <p className="earth_structure_description">
              Earth's interior, like that of the other terrestrial planets, 
              is divided into layers by their chemical or physical (rheological) 
              properties. The outer layer is a chemically distinct silicate solid crust, 
              which is underlain by a highly viscous solid mantle.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure_earth"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to='/earthOverview'>overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure_earth"><p className="pagination_num_structure">02</p>
                <Link className="structure_link_to_structure" to='/earthStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure_earth"><p className="pagination_num_structure">03</p>
                <Link className="structure_link_to_surface" to='/earthSurface'>surface geology</Link>
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

export default EarthStructure