import React from "react";
import cImage from "../c.png";
import cppImage from "../cpp.png";
import cssImage from "../css.png";
import htmlImage from "../html.png";
import matlabImage from "../matlab.png";
import pythonImage from "../python.png";
import nodejsImage from "../nodejs.png";
import sqlImage from "../sql.png";
import cemImage from "../cem.png";
import franceImage from "../france.png";
import germanImage from "../german.png";
import usaImage from "../usa.png";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  return (
    <div className="skills-fond">
      <div className="INFO">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">C/C++/Embedded C</text>
              <text className="skills_descriptions">
                C/C++ 
                and Embedded Systems {'\n'}
                courses at Mines de Saint-Etienne
              </text>
            </div>
            <div className="skills_images">
              <img
                src={cImage}
                alt="c"
                style={{ width: "5vw", height: "10vh" }}
              />
              <img
                src={cppImage}
                alt="cpp"
                style={{ width: "5vw", height: "10vh" }}
              />
              <img
                src={cemImage}
                alt="cem"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">Python</text>
              <text className="skills_descriptions">Pandas, Numpy, Matplotlib, Scikit-learn {'\n'}
              Machine Learning projects {'\n'} web scraping projects{'\n'}
              
              </text>
            </div>
            <div className="skills_images">
              <img
                src={pythonImage}
                alt="python"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">SQL</text>
              <text className="skills_descriptions">Databases and data structures {'\n'}
              courses at Mines de Saint-Etienne</text>
            </div>
            <div className="skills_images">
              <img
                src={sqlImage}
                alt="sql"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">HTML/CSS</text>
              <text className="skills_descriptions">Self-taught{'\n'}
              Website creation with animations{'\n'}               
              </text>
            </div>
            <div className="skills_images">
              <img
                src={htmlImage}
                alt="html"
                style={{ width: "5vw", height: "10vh" }}
              />
              <img
                src={cssImage}
                alt="css"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">Node.js</text>
              <text className="skills_descriptions">Self-taught {'\n'}
              Using the React library for web development {'\n'}
              </text>
            </div>
            <div className="skills_images">
              <img
                src={nodejsImage}
                alt="nodejs"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">Matlab</text>
              <text className="skills_descriptions">Animal vision simulation {'\n'}
              Introductory courses at Mines de Saint-Etienne {'\n'}
              </text>
            </div>
            <div className="skills_images">
              <img
                src={matlabImage}
                alt="matlab"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>



      <div className="LANGUE">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">English</text>
              <text className="skills_descriptions">Proeficient</text>
            </div>
            <div className="skills_images">
              <img
                src={usaImage}
                alt="usa"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">French</text>
              <text className="skills_descriptions">Native</text>
            </div>
            <div className="skills_images">
              <img
                src={franceImage}
                alt="fr"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <div className="Skill">
            <div className="skills_descriptif">
              <text className="skills_title">German</text>
              <text className="skills_descriptions">Beginner</text>
            </div>
            <div className="skills_images">
              <img
                src={germanImage}
                alt="german"
                style={{ width: "5vw", height: "10vh" }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;