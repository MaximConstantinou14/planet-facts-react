import React from 'react';
import Navbar from '../../Components/Navbar';
import "../../Css/Neptune/neptuneSurface.css";
import "../../Css/variables.css";
import {Link} from "react-router-dom";

import neptuneImg from "../../Assets/planet-neptune.svg";
import surfaceNeptuneImg from "../../Assets/geology-neptune.png"

const NeptuneSurface = () => {
  return (
    <div className="neptune_structure_container">
      <Navbar />

      <ul className="pagination_mobile_surface">
        <li className="pagination_item_mobile_surface">
            <button autofocus className="overview_btn_mobile_surface_neptune">
              <Link className="surface_link_to_overview" to='/neptuneOverview'>overview</Link>
            </button>
        </li>
        <li className="pagination_item_mobile_surface">
            <button className="structure_btn_mobile_surface_neptune">
              <Link className="surface_link_to_structure" to='/neptuneStructure'>structure</Link>
            </button>
        </li>
        <li className="pagination_item_mobbile_surface">
            <button className="surface_btn_mobile_surface_neptune">surface</button>
        </li>
      </ul>

      <div className="neptune_structure">
        <div className="planet_img_container">
          <img src={neptuneImg} alt="" className="planet_img" />
          <img src={surfaceNeptuneImg} alt="Geology Image From neptune"className="surface_neptune_img"/>
        </div>
        
        <div className="neptune_structure_text_container">
          <div className="neptune_structure_text_wrapper">
            <h1 className="neptune_title">neptune</h1>
            <p className="neptune_structure_description">
              Neptune's atmosphere is 80% hydrogen and 19% helium. 
              A trace amount of methane is also present. Prominent 
              absorption bands of methane exist at wavelengths above 
              600 nm, in the red and infrared portion of the spectrum.
            </p>
          </div>
          <ul className="pagination_surface">
            <li className="pagination_item_surface">
                <button className="overview_btn_surface_neptune"><p className="pagination_num_surface">01</p>
                  <Link className="surface_link_to_overview" to="/neptuneOverview">overview</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="structure_btn_surface_neptune"><p className="pagination_num_structure">02</p>
                  <Link className="surface_link_to_structure" to="/neptuneStructure">internal structure</Link>
                </button>
            </li>
            <li className="pagination_item_surface">
                <button className="surface_btn_surface_neptune"><p className="pagination_num_surface">03</p>surface geology</button>
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

export default NeptuneSurface