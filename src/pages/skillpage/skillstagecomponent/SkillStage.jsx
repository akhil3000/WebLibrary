import React from 'react'
import ResourceCard from './resourcecardcomponent/ResourceCard'
import './SkillStage.css'

function SkillStage({stage}) {
  return (
    <div className="skill-stage">
        {stage.title && <p className="stage-heading">{stage.title}</p>}
        <div className="resources-container">
            {
                stage.resources.map((resource)=> {
                    return <ResourceCard data={resource}/>
                })
            }
        </div>
    </div>
  )
}

export default SkillStage