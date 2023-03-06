import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Venus/venusSurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import venusImg from "../../Assets/planet-venus.svg";
import surfaceVenusImg from "../../Assets/geology-venus.png"

const VenusSurface = () => {
  return (
    <div className="venus_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface_venus">
              <Link className="surface_link_to_overview" to='/venusOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface_venus">
              <Link className="surface_link_to_structure" to='/venusStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobbile_surface">
            <button className="surface_btn_mobile_surface_venus">surface</button>
        </li>
      </ul>

      <div className="venus_structure">
        <div className="planet_img_container">
          <img src={venusImg} alt="" className="planet_img" />
          <img src={surfaceVenusImg} alt="Geology Image From Mars"className="surface_venus_img"/>
        </div>
        
        <div className="venus_structure_text_container">
          <div className="venus_structure_text_wrapper">
            <h1 className="venus_title">venus</h1>
            <p className="venus_structure_description">
              Much of the Venusian surface appears to have 
              been shaped by volcanic activity. Venus has several 
              times as many volcanoes as Earth, and it has 167 large 
              volcanoes that are over 100 km (60 mi) across. The only 
              volcanic complex of this size on Earth is the Big Island 
              of Hawaii.
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button className="overview_btn_surface_venus"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/venusOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface_venus"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/venusStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface_venus"><p className="pagination_num_surface">03</p>surface geology</button>
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

export default VenusSurface