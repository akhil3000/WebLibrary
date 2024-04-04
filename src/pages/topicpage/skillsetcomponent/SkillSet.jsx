import React from "react";
import Skill from "./skillcomponent/Skill";
import './SkillSet.css'

function SkillSet({ skillset, path }) {
  return (
    <div className="skill-set">
      {skillset.title && <p className="skillset-heading">{skillset.title}</p>}
      <div className="skills-container">
        {skillset.skills.map((skill) => {
          return <Skill skill={skill} path={path + (skillset.path ? skillset.path : '') + skill.path} />;
        })}
      </div>
    </div>
  );
}

export default SkillSet;
