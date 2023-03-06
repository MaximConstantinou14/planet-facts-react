import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Venus/venusOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import venusImg from "../../Assets/planet-venus.svg"

const VenusOverview = () => {
  return (
    <div className="venus_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview">
            <button autofocus className="overview_btn_mobile_overview_venus">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview_venus">
              <Link className="overview_link_to_strucure" to='/venusStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview_venus">
              <Link className="overview_link_to_surface" to='/venusSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="venus_overview">
        <div className="planet_img_container">
          <img src={venusImg} alt="" className="planet_img" />
        </div>
        
        <div className="venus_overview_text_container">
          <div className="venus_overview_text_wrapper">
            <h1 className="venus_title">Venus</h1>
            <p className="venus_overview_description">
              Venus is the second planet from the Sun. 
              It is named after the Roman goddess of love 
              and beauty. As the brightest natural object in 
              Earth's night sky after the Moon, Venus can cast 
              shadows and can be, on rare occasions, visible to 
              the naked eye in broad daylight.
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview_venus"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview_venus"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_structure" to='/venusStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview_venus"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_surface" to='/venusSurface'>surface goelogy</Link>
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

export default VenusOverview