import React from 'react'
import {Link} from "react-router-dom";
import './WebDevelopment.css'



const WebDevlopment = () => {
  return (
    <div className="Hello">
       <Link to="/WebPrerequitises">
     <button className="a1">Web Development Prerequitises</button>
      </Link>
      <Link to="/WebDevelopmentBasics">
     <button className="a1">Web Development Basics</button>
      </Link>
      <Link to="/GitAndGithub">
       <button className="a1">Git And Github</button>
      </Link> 
      <Link to="/HtmlAndCss">
      <button className="a1">HTML And CSS</button>
      </Link>
      <Link to="/JavaScript">
      <button className="a1">JavaScript</button>
      </Link>
      <Link to="/Reactjs">
      <button className="a1">ReactJs</button>
      </Link>
       <Link to="/BackendBasics">
       <button className="a1">Backend Basics</button>
       </Link>
       <Link to="/MongoDB">
       <button className="a1">MongoDB</button>
       </Link>
       <Link to="/NodeANDExpress">
       <button className="a1">Node And Express Js</button>
       </Link>
       <Link to="/MERNStackProjects">
       <button className="a1">MERN Stack Projects</button>
       </Link>
       <Link to="/NextJs">
       <button className="a1">NextJs</button>
       </Link>
       <Link to="/MicroServicesAndCloud">
       <button className="a1">MicroServicesAndCloud</button>
       </Link>
       <div className="hii">
       One Tech Stack is completed you can learn further to improve your Knowledge
       </div>
       <Link to="/Spring">
       <button className="a1">Spring</button>
       </Link>
       <Link to="/SystemDesign">
       <button className="a1">SystemDesign</button>
       </Link>
       <Link to="/BlockChainAndWeb3">
       <button className="a1">BlockChainAndWeb3</button>
       </Link>
       <Link to="/Deployments">
       <button className="a1">Deployments</button>
       </Link>
       <Link to="/WebDevCommunity">
       <button className="a1">Web Development Community</button>
       </Link>
    </div>
  )
}

export default WebDevlopment