import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Uranus/uranusOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import uranusImg from "../../Assets/planet-uranus.svg";

const UranusOverview = () => {
  return (
    <div className="uranus_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview">
            <button autofocus className="overview_btn_mobile_overview_uranus">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview_uranus">
              <Link className="overview_link_to_strucure" to='/uranusStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview_uranus">
              <Link className="overview_link_to_surface" to='/uranusSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="uranus_overview">
        <div className="planet_img_container">
          <img src={uranusImg} alt="" className="planet_img" />
        </div>
        
        <div className="uranus_overview_text_container">
          <div className="uranus_overview_text_wrapper">
            <h1 className="uranus_title">uranus</h1>
            <p className="uranus_overview_description">
              Uranus is the seventh planet from the Sun. 
              Its name is a reference to the Greek god of the sky, 
              Uranus according to Greek mythology, was the great-grandfather of Ares. 
              It has the third-largest planetary radius and fourth-largest planetary 
              mass in the Solar System.
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview_uranus"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview_uranus"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_structure" to='/uranusStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview_uranus"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_surface" to='/uranusSurface'>surface goelogy</Link>
                </button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="uranus_rotation">
            <p className="uranus_rotation_title">rotation time</p>
            <h3 className="uranus_rotation_time">17.2 hours</h3>
          </div>
          <div className="uranus_revolution">
            <p className="uranus_revolution_title">revolution time</p>
            <h3 className="uranus_revolution_time">84 years</h3>
          </div>
          <div className="uranus_radius">
            <p className="uranus_radius_title">radius</p>
            <h3 className="uranus_radius_num">25,362 km</h3>
          </div>
          <div className="uranus_temp">
            <p className="uranus_temp_title">average temp.</p>
            <h3 className="uranus_temp_num">-195°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="uranus_rotation">
            <p className="uranus_rotation_title">rotation time</p>
            <h3 className="uranus_rotation_time">17.2 hours</h3>
          </div>
          <div className="uranus_revolution">
            <p className="uranus_revolution_title">revolution time</p>
            <h3 className="uranus_revolution_time">84 years</h3>
          </div>
          <div className="uranus_radius">
            <p className="uranus_radius_title">radius</p>
            <h3 className="uranus_radius_num">25,362 km</h3>
          </div>
          <div className="uranus_temp">
            <p className="uranus_temp_title">average temp.</p>
            <h3 className="uranus_temp_num">-195°C</h3>
          </div>
        </div>
    </div>
  )
}

export default UranusOverview