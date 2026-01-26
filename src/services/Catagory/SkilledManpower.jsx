import React from "react";
import ServiceHeading from "../ServiceHeading";
import Templates from "../Templates";
import Endline from '../Endline'
import { TbBarrierBlock } from "react-icons/tb";
import { LuPaintbrush } from "react-icons/lu";
import { GoFlame } from "react-icons/go";
import { LuBuilding } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { IoLayersOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiLightningBold } from "react-icons/pi";
import { LuWrench } from "react-icons/lu";








const ServiceTemplate = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center mt-4">
          <div className="row">
            <div className="col">
              <ServiceHeading
                title="Skilled Manpower Supply"
                description="Expert professionals for specialized construction roles"
              />
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Electrician" icon={<PiLightningBold />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Barbenders" icon={<TbBarrierBlock />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Plumbers" icon={<LuWrench />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Masons" icon={<TbBarrierBlock />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Painters" icon={<LuPaintbrush />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Welders" icon={<GoFlame />} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Shuttering Carpenters" icon={<LuBuilding />
} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Supervisors & Foremen" icon={<FiUserCheck />
} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Welders" icon={<IoLayersOutline />
} />
            </div>
            <div className="col-6 col-md-3 col-lg-2  mb-4">
              <Templates title="Fabricators" icon={<IoSettingsOutline />
} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Endline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
    
};

export default ServiceTemplate;
