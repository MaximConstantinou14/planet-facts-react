import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Uranus/uranusSurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import uranusImg from "../../Assets/planet-uranus.svg";
import surfaceUranusImg from "../../Assets/geology-uranus.png"

const UranusSurface = () => {
  return (
    <div className="uranus_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface_uranus">
              <Link className="surface_link_to_overview" to='/uranusOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface_uranus">
              <Link className="surface_link_to_structure" to='/uranusStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobbile_surface">
            <button className="surface_btn_mobile_surface_uranus">surface</button>
        </li>
      </ul>

      <div className="uranus_structure">
        <div className="planet_img_container">
          <img src={uranusImg} alt="" className="planet_img" />
          <img src={surfaceUranusImg} alt="Geology Image From Mars"className="surface_uranus_img"/>
        </div>
        
        <div className="uranus_structure_text_container">
          <div className="uranus_structure_text_wrapper">
            <h1 className="uranus_title">uranus</h1>
            <p className="uranus_structure_description">
              The composition of Uranus's atmosphere is different from its bulk, 
              consisting mainly of molecular hydrogen and helium. The helium molar 
              fraction, i.e. the number of helium atoms per molecule of gas, 
              is 0.15±0.03 in the upper troposphere. 
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button className="overview_btn_surface_uranus"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/uranusOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface_uranus"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/uranusStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface_uranus"><p className="pagination_num_surface">03</p>surface geology</button>
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

export default UranusSurface