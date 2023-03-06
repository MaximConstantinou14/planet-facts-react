import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Mars/marsStructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import marsStructureImg from "../../Assets/planet-mars-internal.svg"

const MarsStructure = () => {
  return (
    <div className="mars_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure_mars">
              <Link className="structure_link_to_overview" to='/marsOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure_mars">structure</button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="surface_btn_mobile_structure_mars">
              <Link className="structure_link_to_surface" to='/marsSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="mars_structure">
        <div className="planet_img_container">
          <img src={marsStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="mars_structure_text_container">
          <div className="mars_structure_text_wrapper">
            <h1 className="mars_title">mars</h1>
            <p className="mars_structure_description">
              Like Earth, Mars has differentiated into a dense 
              metallic core overlaid by less dense materials. 
              Scientists initially determined that the core is at 
              least partially liquid. Current models of its interior 
              imply a core consisting primarily of iron and nickel 
              with about 16–17% sulfur.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure_mars"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to='/marsOverview'>overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure_mars"><p className="pagination_num_structure">02</p>
                <Link className="structure_link_to_structure" to='/marsStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure_mars"><p className="pagination_num_structure">03</p>
                <Link className="structure_link_to_surface" to='/marsSurface'>surface geology</Link>
                </button>
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

export default MarsStructure