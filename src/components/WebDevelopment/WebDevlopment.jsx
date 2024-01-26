import React from 'react'
import {Link} from "react-router-dom";
import './WebDevelopment.css'
import Homecard from '../Homecard';


const WebDevlopment = () => {
  return (
    <div className="Hello">
      <Homecard path="/WebPrerequitises" title="Web Development Prerequitises"/>
      <Homecard path="/WebDevelopmentBasics" title="Web Development Basics"/>
      <Homecard path="/GitAndGithub" title="Git And Github"/>
      <Homecard path="/HtmlAndCss" title="HTML And CSS"/>
      <Homecard path="/JavaScript" title="JavaScript"/>
      <Homecard path="/Reactjs" title="ReactJs"/>
      <Homecard path="/BackendBasics" title="Backend Basics"/>
      <Homecard path="/MongoDB" title="MongoDB"/>
      <Homecard path="/NodeANDExpress" title="Node And Express Js"/>
      <Homecard path="/MERNStackProjects" title="MERN Stack Projects"/>
      <Homecard path="/NextJs" title="NextJs"/>
      <Homecard path="/MicroServicesAndCloud" title="MicroServicesAndCloud"/>
      <div className="hii">
       One Tech Stack is completed you can learn further to improve your Knowledge
       </div>
      <Homecard path="/Spring" title="Spring"/>
      <Homecard path="/SystemDesign" title="System Design"/>
      <Homecard path="/BlockChainAndWeb3" title="BlockChain And Web3"/>
      <Homecard path="/Deployments" title="Deployments"/>
      <Homecard path="/WebDevCommunity" title="Web Development Community"/>
      
      
       </div>
  )
}

export default WebDevlopment