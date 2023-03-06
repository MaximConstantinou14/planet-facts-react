import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Saturn/saturnOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import saturnImg from "../../Assets/planet-saturn.svg";

const SaturnOverview = () => {
  return (
    <div className="saturn_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview">
            <button autofocus className="overview_btn_mobile_overview_saturn">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview_saturn">
              <Link className="overview_link_to_strucure" to='/saturnStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview_saturn">
              <Link className="overview_link_to_surface" to='/saturnSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="saturn_overview">
        <div className="planet_img_container">
          <img src={saturnImg} alt="" className="planet_img" />
        </div>
        
        <div className="saturn_overview_text_container">
          <div className="saturn_overview_text_wrapper">
            <h1 className="saturn_title">saturn</h1>
            <p className="saturn_overview_description">
              Saturn is the sixth planet from the Sun and the second-largest 
              in the Solar System, after Jupiter. It is a gas giant with an 
              average radius of about nine and a half times that of Earth. 
              It only has one-eighth the average density of Earth.
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview_saturn"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview_saturn"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_structure" to='/saturnStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview_saturn"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_surface" to='/saturnSurface'>surface goelogy</Link>
                </button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="saturn_rotation">
            <p className="saturn_rotation_title">rotation time</p>
            <h3 className="saturn_rotation_time">10.8 hours</h3>
          </div>
          <div className="saturn_revolution">
            <p className="saturn_revolution_title">revolution time</p>
            <h3 className="saturn_revolution_time">29.46 years</h3>
          </div>
          <div className="saturn_radius">
            <p className="saturn_radius_title">radius</p>
            <h3 className="saturn_radius_num">58,232 km</h3>
          </div>
          <div className="saturn_temp">
            <p className="saturn_temp_title">average temp.</p>
            <h3 className="saturn_temp_num">-138°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="saturn_rotation">
            <p className="saturn_rotation_title">rotation time</p>
            <h3 className="saturn_rotation_time">10.8 hours</h3>
          </div>
          <div className="saturn_revolution">
            <p className="saturn_revolution_title">revolution time</p>
            <h3 className="saturn_revolution_time">29.46 years</h3>
          </div>
          <div className="saturn_radius">
            <p className="saturn_radius_title">radius</p>
            <h3 className="saturn_radius_num">58,232 km</h3>
          </div>
          <div className="saturn_temp">
            <p className="saturn_temp_title">average temp.</p>
            <h3 className="saturn_temp_num">-138°C</h3>
          </div>
        </div>
    </div>
  )
}

export default SaturnOverview