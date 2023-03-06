import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Uranus/uranusStructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import uranusStructureImg from "../../Assets/planet-uranus-internal.svg";

const UranusStructure = () => {
  return (
    <div className="uranus_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure_uranus">
              <Link className="structure_link_to_overview" to='/uranusOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure_uranus">structure</button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="surface_btn_mobile_structure_uranus">
              <Link className="structure_link_to_surface" to='/uranusSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="uranus_structure">
        <div className="planet_img_container">
          <img src={uranusStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="uranus_structure_text_container">
          <div className="uranus_structure_text_wrapper">
            <h1 className="uranus_title">uranus</h1>
            <p className="uranus_structure_description">
              The standard model of Uranus's structure is that it 
              consists of three layers: a rocky (silicate/iron–nickel) 
              core in the centre, an icy mantle in the middle and an outer 
              gaseous hydrogen/helium envelope. The core is relatively small, 
              with a mass of only 0.55 Earth masses.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure_uranus"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to='/uranusOverview'>overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure_uranus"><p className="pagination_num_structure">02</p>
                <Link className="structure_link_to_structure" to='/uranusStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure_uranus"><p className="pagination_num_structure">03</p>
                <Link className="structure_link_to_surface" to='/uranusSurface'>surface geology</Link>
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

export default UranusStructure