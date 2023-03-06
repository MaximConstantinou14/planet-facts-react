import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Neptune/neptuneOverview.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import neptuneImg from "../../Assets/planet-neptune.svg";

const NeptuneOverview = () => {
  return (
    <div className="neptune_overview_container">
      <Navbar />

      <ul className="pagination_mobile_overview">
        <li className="pagination_item_mobile_overview">
            <button autofocus className="overview_btn_mobile_overview">overview</button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="structure_btn_mobile_overview">
              <Link className="overview_link_to_strucure" to='/neptuneStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_overview">
            <button className="surface_btn_mobile_overview">
              <Link className="overview_link_to_surface" to='/neptuneSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="neptune_overview">
        <div className="planet_img_container">
          <img src={neptuneImg} alt="" className="planet_img" />
        </div>
        
        <div className="neptune_overview_text_container">
          <div className="neptune_overview_text_wrapper">
            <h1 className="neptune_title">neptune</h1>
            <p className="neptune_overview_description">
              Neptune is the eighth and farthest-known Solar planet from the Sun. 
              In the Solar System, it is the fourth-largest planet by diameter, the 
              third-most-massive planet, and the densest giant planet. It is 17 times 
              the mass of Earth, more massive than its near-twin Uranus.
            </p>
          </div>
          <ul className="pagination_overview">
            <li className="pagination_item_overview">
                <button autofocus className="overview_btn_overview"><p className="pagination_num_overview">01</p>overview</button>
            </li>
            <li className="pagination_item_overview">
                <button className="structure_btn_overview"><p className="pagination_num_overview">02</p>
                <Link className="overview_link_to_strucure" to='/neptuneStructure'>internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_overview">
                <button className="surface_btn_overview"><p className="pagination_num_overview">03</p>
                <Link className="overview_link_to_strucure" to='/neptuneSurface'>surface geology</Link>
                </button>
            </li>
          </ul>
        </div>

        <div className="planet_facts">
          <div className="neptune_rotation">
            <p className="neptune_rotation_title">rotation time</p>
            <h3 className="neptune_rotation_time">16.08 hours</h3>
          </div>
          <div className="neptune_revolution">
            <p className="neptune_revolution_title">revolution time</p>
            <h3 className="neptune_revolution_time">164.79 years</h3>
          </div>
          <div className="neptune_radius">
            <p className="neptune_radius_title">radius</p>
            <h3 className="neptune_radius_num">24,622 km</h3>
          </div>
          <div className="neptune_temp">
            <p className="neptune_temp_title">average temp.</p>
            <h3 className="neptune_temp_num">-201°C</h3>
          </div>
        </div>

      </div>
      <div className="planet_facts_desktop">
          <div className="neptune_rotation">
            <p className="neptune_rotation_title">rotation time</p>
            <h3 className="neptune_rotation_time">16.08 hours</h3>
          </div>
          <div className="neptune_revolution">
            <p className="neptune_revolution_title">revolution time</p>
            <h3 className="neptune_revolution_time">164.79 years</h3>
          </div>
          <div className="neptune_radius">
            <p className="neptune_radius_title">radius</p>
            <h3 className="neptune_radius_num">24,622 km</h3>
          </div>
          <div className="neptune_temp">
            <p className="neptune_temp_title">average temp.</p>
            <h3 className="neptune_temp_num">-201°C</h3>
          </div>
        </div>
    </div>
  )
}

export default NeptuneOverview