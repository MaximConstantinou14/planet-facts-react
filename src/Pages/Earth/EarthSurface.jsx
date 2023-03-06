import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Earth/earthSurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import earthImg from "../../Assets/planet-earth.svg";
import surfaceEarthImg from "../../Assets/geology-earth.png"

const EarthSurface = () => {
  return (
    <div className="earth_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface_earth">
              <Link className="surface_link_to_overview" to='/earthOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface_earth">
              <Link className="surface_link_to_structure" to='/earthStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobbile_surface">
            <button className="surface_btn_mobile_surface_earth">surface</button>
        </li>
      </ul>

      <div className="earth_structure">
        <div className="planet_img_container">
          <img src={earthImg} alt="" className="planet_img" />
          <img src={surfaceEarthImg} alt="Geology Image From Mars"className="surface_earth_img"/>
        </div>
        
        <div className="earth_structure_text_container">
          <div className="earth_structure_text_wrapper">
            <h1 className="earth_title">earth</h1>
            <p className="earth_structure_description">
              The total surface area of Earth is about 510 million km2. 
              The continental crust consists of lower density material 
              such as the igneous rocks granite and andesite. Less common 
              is basalt, a denser volcanic rock that is the primary 
              constituent of the ocean floors.
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button className="overview_btn_surface_earth"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/earthOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface_earth"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/earthStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface_earth"><p className="pagination_num_surface">03</p>surface geology</button>
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

export default EarthSurface