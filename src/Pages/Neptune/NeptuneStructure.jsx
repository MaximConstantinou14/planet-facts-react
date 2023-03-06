import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Neptune/neptuneStructure.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import neptuneStructureImg from "../../Assets/planet-neptune-internal.svg";

const NeptuneStructure = () => {
  return (
    <div className="neptune_structure_container">
      <Navbar />

      <ul className="pagination_mobile_structure">
        <li className="pagination_item_mobile_structure">
            <button autofocus className="overview_btn_mobile_structure">
              <Link className="structure_link_to_overview" to='/neptuneOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_structure">
            <button className="structure_btn_mobile_structure">structure</button>
        </li>
        <li className="pagination_item_mobbile_structure">
            <button className="surface_btn_mobile_structure">
              <Link className="structure_link_to_surface" to='/neptuneSurface'>surface</Link>
            </button>
        </li>
      </ul>

      <div className="neptune_structure">
        <div className="planet_img_container">
          <img src={neptuneStructureImg} alt="" className="planet_img" />
        </div>
        
        <div className="neptune_structure_text_container">
          <div className="neptune_structure_text_wrapper">
            <h1 className="neptune_title">neptune</h1>
            <p className="neptune_structure_description">
              Neptune's internal structure resembles that of Uranus. 
              Its atmosphere forms about 5% to 10% of its mass and extends 
              perhaps 10% to 20% of the way towards the core. Increasing 
              concentrations of methane, ammonia and water are found in 
              the lower regions.
            </p>
          </div>
          <ul className="pagination_structure">
            <li className="pagination_item_structure">
                <button autofocus className="overview_btn_structure"><p className="pagination_num_structure">01</p>
                  <Link className="structure_link_to_overview" to="/neptuneOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_structure">
                <button className="structure_btn_structure"><p className="pagination_num_structure">02</p> internal structure</button>
            </li>
            <li className="pagination_item_structure">
                <button className="surface_btn_structure"><p className="pagination_num_structure">03</p>
                  <Link className="structure_link_to_surface" to="/neptuneSurface">surface geology</Link>
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

export default NeptuneStructure