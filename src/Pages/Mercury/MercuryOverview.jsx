import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Mercury/mercuryOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import mercuryImg from "../../Assets/planet-mercury.svg";

const Mercury = () => {

  return (
    <div className="mercury_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview_mercury">
            <button autofocus className="overview_btn_mobile_overview_mercury">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview_mercury">
              <Link className="overview_link_to_strucure" to='/mercuryStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview_mercury">
              <Link className="overview_link_to_surface" to='/mercurySurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="mercury_overview">
        <div className="planet_img_container">
          <img src={mercuryImg} alt="" className="planet_img" />
        </div>
        
        <div className="mercury_overview_text_container">
          <div className="mercury_overview_text_wrapper">
            <h1 className="mercury_title">Mercury</h1>
            <p className="mercury_overview_description">
              Mercury is the smallest planet in the Solar System 
              and the closest to the Sun. Its orbit around the Sun 
              takes 87.97 Earth days, the shortest of all the Sun's planets. 
              Mercury is one of four terrestrial planets in the Solar System, 
              and is a rocky body like Earth.
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview_mercury"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview_mercury"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_strucure" to='/mercuryStructure'>internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview_mercury"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_strucure" to='/mercurySurface'>surface geology</Link>
                </button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="mercury_rotation">
            <p className="mercury_rotation_title">rotation time</p>
            <h3 className="mercury_rotation_time">58.6 days</h3>
          </div>
          <div className="mercury_revolution">
            <p className="mercury_revolution_title">revolution time</p>
            <h3 className="mercury_revolution_time">87.97 days</h3>
          </div>
          <div className="mercury_radius">
            <p className="mercury_radius_title">radius</p>
            <h3 className="mercury_radius_num">2,439.7 km</h3>
          </div>
          <div className="mercury_temp">
            <p className="mercury_temp_title">average temp.</p>
            <h3 className="mercury_temp_num">430°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="mercury_rotation">
            <p className="mercury_rotation_title">rotation time</p>
            <h3 className="mercury_rotation_time">58.6 days</h3>
          </div>
          <div className="mercury_revolution">
            <p className="mercury_revolution_title">revolution time</p>
            <h3 className="mercury_revolution_time">87.97 days</h3>
          </div>
          <div className="mercury_radius">
            <p className="mercury_radius_title">radius</p>
            <h3 className="mercury_radius_num">2,439.7 km</h3>
          </div>
          <div className="mercury_temp">
            <p className="mercury_temp_title">average temp.</p>
            <h3 className="mercury_temp_num">430°C</h3>
          </div>
        </div>
    </div>
  )
}

export default Mercury