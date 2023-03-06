import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Saturn/saturnStructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import saturnStructureImg from "../../Assets/planet-saturn-internal.svg";

const SaturnStructure = () => {
  return (
    <div className="saturn_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure_saturn">
              <Link className="structure_link_to_overview" to='/saturnOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure_saturn">structure</button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="surface_btn_mobile_structure_saturn">
              <Link className="structure_link_to_surface" to='/saturnSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="saturn_structure">
        <div className="planet_img_container">
          <img src={saturnStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="saturn_structure_text_container">
          <div className="saturn_structure_text_wrapper">
            <h1 className="saturn_title">saturn</h1>
            <p className="saturn_structure_description">
              Despite consisting mostly of hydrogen and helium, 
              most of Saturn's mass is not in the gas phase, 
              because hydrogen becomes a non-ideal liquid when the 
              density is above 0.01 g/cm3, which is reached at a radius 
              containing 99.9% of Saturn's mass.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure_saturn"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to='/saturnOverview'>overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure_saturn"><p className="pagination_num_structure">02</p>
                <Link className="structure_link_to_structure" to='/saturnStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure_saturn"><p className="pagination_num_structure">03</p>
                <Link className="structure_link_to_surface" to='/saturnSurface'>surface geology</Link>
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

export default SaturnStructure