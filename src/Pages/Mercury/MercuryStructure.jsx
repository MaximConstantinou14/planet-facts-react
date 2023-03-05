import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Mercury/mercurySructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import mercuryStructureImg from "../../Assets/planet-mercury-internal.svg";

const MercuryStructure = () => {
  return (
    <div className="mercury_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure">
              <Link className="structure_link_to_overview" to='/'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure">structure</button>
        </li>
        <li className="pagination_item_mobbile_structure">
            <button className="surface_btn_mobile_structure">
              <Link className="structure_link_to_surface" to='/mercurySurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="mercury_structure">
        <div className="planet_img_container">
          <img src={mercuryStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="mercury_structure_text_container">
          <div className="mercury_structure_text_wrapper">
            <h1 className="mercury_title">Mercury</h1>
            <p className="mercury_structure_description">
              Mercury appears to have a solid silicate crust 
              and mantle overlying a solid, iron sulfide outer 
              core layer, a deeper liquid core layer, and a solid 
              inner core. The planet's density is the second highest 
              in the Solar System at 5.427 g/cm3 , only slightly less 
              than Earth's density.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to="/">overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure"><p className="pagination_num_structure">02</p> internal structure</button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure"><p className="pagination_num_structure">03</p>
                  <Link className="structure_link_to_surface" to="/mercurySurface">surface geology</Link>
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

export default MercuryStructure