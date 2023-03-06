import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Saturn/saturnSurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import saturnImg from "../../Assets/planet-saturn.svg";
import surfaceSaturnImg from "../../Assets/geology-saturn.png"

const SaturnSurface = () => {
  return (
    <div className="saturn_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface_saturn">
              <Link className="surface_link_to_overview" to='/saturnOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface_saturn">
              <Link className="surface_link_to_structure" to='/saturnStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobbile_surface">
            <button className="surface_btn_mobile_surface_saturn">surface</button>
        </li>
      </ul>

      <div className="saturn_structure">
        <div className="planet_img_container">
          <img src={saturnImg} alt="" className="planet_img" />
          <img src={surfaceSaturnImg} alt="Geology Image From Mars"className="surface_saturn_img"/>
        </div>
        
        <div className="saturn_structure_text_container">
          <div className="saturn_structure_text_wrapper">
            <h1 className="saturn_title">saturn</h1>
            <p className="saturn_structure_description">
              The outer atmosphere of Saturn contains 96.3% molecular 
              hydrogen and 3.25% helium by volume. The planet's most famous 
              feature is its prominent ring system, which is composed mostly 
              of ice particles with a smaller amount of rocky debris and dust. 
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button className="overview_btn_surface_saturn"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/saturnOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface_saturn"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/saturnStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface_saturn"><p className="pagination_num_surface">03</p>surface geology</button>
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

export default SaturnSurface