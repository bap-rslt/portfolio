import React from "react";
import { motion } from "framer-motion";
import virbacImage from "./virbac.svg";
import bdsImage from "./bds.png";
import volleyImage from "./volley.jpg";


const Xp = () => {
  return (
    <div className="fond">
      <motion.div
        initial={{ y: "10vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <div className="xp_card">
          <div className="xp_image">
            <img
              src={virbacImage}
              alt="Avatar"
              style={{ width: "40vw", height: "40vh" }}
            />
          </div>
          <div className="xp_text_card">
            <text className="xp_title">Internship at Virbac's IT department</text>
            <text className="xp_description">
                                            Had the chance to put my skills into practice, and designed{'\n'} 
                                            python classification algorithms for production batch data.{'\n'}
                                            Learned about ERP, MES and LIMS, and how these platforms are{'\n'}
                                            used in production.
                                            
                                            
                                            
            </text>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "10vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <div className="xp_card">
          <div className="xp_image">
            <img
              src={bdsImage}
              alt="Avatar"
              style={{ width: "27vw", height: "40vh" }}
            />
          </div>
          <div className="xp_text_card">
            <text className="xp_title">Students sports office tresurer </text>
            <text className="xp_description">Managed a budget and organized expenses.{'\n'}
                                            General acounting of the association.{'\n'}
                                            Managed a team during events organization.{'\n'}
            
            </text>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "10vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <div className="xp_card">
          <div className="xp_image">
            <img
              src={volleyImage}
              alt="Avatar"
              style={{ width: "20vw", height: "40vh" }}
            />
          </div>
          <div className="xp_text_card">
            <text className="xp_title">Volleyball school team captain</text>
            <text className="xp_description">Leading a team during the university Volleyball tournament.{'\n'}
                                              Designed training plans for the team.{'\n'}
            </text>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Xp;