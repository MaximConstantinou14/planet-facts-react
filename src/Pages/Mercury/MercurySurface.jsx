import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Mercury/mercurySurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import mercuryImg from "../../Assets/planet-mercury.svg";
import surfaceMercuryImg from "../../Assets/geology-mercury.png"

const MercurySurface = () => {
  return (
    <div className="mercury_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface">
              <Link className="surface_link_to_overview" to='/'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface">
              <Link className="surface_link_to_structure" to='/mercuryStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobbile_surface">
            <button className="surface_btn_mobile_surface">surface</button>
        </li>
      </ul>

      <div className="mercury_structure">
        <div className="planet_img_container">
          <img src={mercuryImg} alt="" className="planet_img" />
          <img src={surfaceMercuryImg} alt="Geology Image From Mars"className="surface_mercury_img"/>
        </div>
        
        <div className="mercury_structure_text_container">
          <div className="mercury_structure_text_wrapper">
            <h1 className="mercury_title">Mercury</h1>
            <p className="mercury_structure_description">
              Mercury's surface is similar in appearance to 
              that of the Moon, showing extensive mare-like 
              plains and heavy cratering, indicating that it has 
              been geologically inactive for billions of years. 
              It is more heterogeneous than either Mars's or the Moon’s.
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button autofocus className="overview_btn_surface"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/mercuryStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface"><p className="pagination_num_surface">03</p>surface geology</button>
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

export default MercurySurface