import React from "react";
import "../Styles/skills.css";
const frontendSkills = [
  {
    title: "JavaScript",

    percentage: "70%",
  },
  {
    title: "React.js",

    percentage: "70%",
  },
  {
    title: "CSS",

    percentage: "85%",
  },
  {
    title: "Bootstrap",

    percentage: "90%",
  },
];
const backendSkills = [
  {
    title: "Node.js",

    percentage: "85%",
  },
  {
    title: "Express.js",

    percentage: "85%",
  },
  {
    title: "MongoDB",

    percentage: "85%",
  },
  {
    title: "Git",

    percentage: "85%",
  },
];

function Skills() {
  return (
    <div className="skills-wrapper d-flex gap-5">
      <div className="frontend-skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>

      <div className="backend-skill w-50">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
}
const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill-data mb-3">
      <div className="skill-title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>

      <div className="skill-bar">
        <span
          className="skill-bar-percentage "
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};
export default Skills;
