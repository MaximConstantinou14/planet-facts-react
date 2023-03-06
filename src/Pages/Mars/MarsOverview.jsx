import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Mars/marsOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import marsImg from "../../Assets/planet-mars.svg"

const MarsOverview = () => {
  return (
    <div className="mars_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview">
            <button autofocus className="overview_btn_mobile_overview_mars">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview_mars">
              <Link className="overview_link_to_strucure" to='/marsStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview_mars">
              <Link className="overview_link_to_surface" to='/marsSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="mars_overview">
        <div className="planet_img_container">
          <img src={marsImg} alt="" className="planet_img" />
        </div>
        
        <div className="mars_overview_text_container">
          <div className="mars_overview_text_wrapper">
            <h1 className="mars_title">mars</h1>
            <p className="mars_overview_description">
              Mars is the fourth planet from the Sun and the 
              second-smallest planet in the Solar System, being 
              larger than only Mercury. In English, Mars carries 
              the name of the Roman god of war and is often referred 
              to as the "Red Planet".
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview_mars"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview_mars"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_structure" to='/marsStructure'>internal structure</Link></button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview_mars"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_surface" to='/marsSurface'>surface goelogy</Link>
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

export default MarsOverview