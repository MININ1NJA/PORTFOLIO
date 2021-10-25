import React from "react";
import { FaCss3Alt , FaReact, FaHtml5, FaJs,} from "react-icons/fa";




const skillicons = "text-4xl mx-auto inline-block";
const data = {
  name: "Siddhant Mohite",
  title: "Front-End Developer / Designer",
  social: {
    github: "https://github.com/MININ1NJA",
    discord: "https://discordapp.com/users/852493707810570281/",
    email: "mailto:mohitesiddhant16@gmail.com",
  },
  about: {
    title: "Hey there 👋 ",
    description:
      "I am Siddhant Mohite , Student of PCACS Panvel pursuing Bsc Computer Science and recently i am working on python and will start leet code soon.  i am very fascinated by web programming e.g building websites :) ",
  },




  skills: [
    {
      skillName: "HTML",
      skillIcon: <FaHtml5 className={skillicons} />,
    },
    {
      skillName: "CSS",
      skillIcon: <FaCss3Alt className={skillicons} />,
    },
    {
      skillName: "Javascript",
      skillIcon: <FaJs className={skillicons} />,
    }, 
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={skillicons } />,
    },
  ],

};
export default data;
