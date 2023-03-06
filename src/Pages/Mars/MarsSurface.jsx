import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Mars/marsSurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import marsImg from "../../Assets/planet-mars.svg";
import surfaceMarsImg from "../../Assets/geology-mars.png"

const MarsSurface = () => {
  return (
    <div className="mars_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface_mars">
              <Link className="surface_link_to_overview" to='/marsOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface_mars">
              <Link className="surface_link_to_structure" to='/marsStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobbile_surface">
            <button className="surface_btn_mobile_surface_mars">surface</button>
        </li>
      </ul>

      <div className="mars_structure">
        <div className="planet_img_container">
          <img src={marsImg} alt="" className="planet_img" />
          <img src={surfaceMarsImg} alt="Geology Image From Mars"className="surface_mars_img"/>
        </div>
        
        <div className="mars_structure_text_container">
          <div className="mars_structure_text_wrapper">
            <h1 className="mars_title">mars</h1>
            <p className="mars_structure_description">
              Mars is a terrestrial planet whose surface consists 
              of minerals containing silicon and oxygen, metals, 
              and other elements that typically make up rock. 
              The surface is primarily composed of tholeiitic basalt, 
              although parts are more silica-rich than typical basalt.
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button className="overview_btn_surface_mars"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/marsOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface_mars"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/marsStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface_mars"><p className="pagination_num_surface">03</p>surface geology</button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="mars_rotation">
            <p className="mars_rotation_title">rotation time</p>
            <h3 className="mars_rotation_time">1.03 days</h3>
          </div>
          <div className="mars_revolution">
            <p className="mars_revolution_title">revolution time</p>
            <h3 className="mars_revolution_time">1.88 years</h3>
          </div>
          <div className="mars_radius">
            <p className="mars_radius_title">radius</p>
            <h3 className="mars_radius_num">3,389.5 km</h3>
          </div>
          <div className="mars_temp">
            <p className="mars_temp_title">average temp.</p>
            <h3 className="mars_temp_num">-28°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="mars_rotation">
            <p className="mars_rotation_title">rotation time</p>
            <h3 className="mars_rotation_time">1.03 days</h3>
          </div>
          <div className="mars_revolution">
            <p className="mars_revolution_title">revolution time</p>
            <h3 className="mars_revolution_time">1.88 years</h3>
          </div>
          <div className="mars_radius">
            <p className="mars_radius_title">radius</p>
            <h3 className="mars_radius_num">3,389.5 km</h3>
          </div>
          <div className="mars_temp">
            <p className="mars_temp_title">average temp.</p>
            <h3 className="mars_temp_num">-28°C</h3>
          </div>
        </div>
    </div>
  )
}

export default MarsSurface