import React from 'react'
import './CSFundamentals.css'
import { Link } from 'react-router-dom'
import Homecard from '../Homecard'
const CSFundamentals = () => {
  return (
    <div className="Hello">
        <div className="hii">
         Phase-1
       </div>
       <div className="Phase1">
       <Homecard path="/IntroductionToComputerScience" title="Introduction To Computer Science"/>
       <Homecard path="/Clanguage" title="C The Mother Language"/>
       <Homecard path="/Cplusplus" title="C++ The High Performance Language And OOPS"/>
       <Homecard path="/DataStructures" title="Data Structures With C++"/>
       <Homecard path="/DesignAndAnalysisOfAlgorithms" title="Design And Analysis Of Algorithms"/>
       <Homecard path="/Java" title="Java The Reliable Systems Language"/>
       <Homecard path="/Python" title="Python The Versatile Scripting Language"/>
       <Homecard path="/VanillaJavaScript" title="JavaScript The Web Language"/>
       </div>
       <div className="hii">
         Phase-2
       </div>
       <div className="Phase2">
       <Homecard path="/DiscreteMathematics" title="Discrete Mathematics"/>
       <Homecard path="/OperatingSystems" title="Operating Systems"/>
       <Homecard path="/UnixAndLinux" title="Unix And Linux"/>
       <Homecard path="/DataBaseManagementSystems" title="Database Management Systems"/>
       <Homecard path="/ComputerNetworks" title="Computer Networks"/>
       <Homecard path="/ThoeryOfComputation" title="Thoery Of Computation"/>
       <Homecard path="/CompilerDesign" title="Compiler Design"/>
       </div>
       <div className="hii">
         Phase-3
       </div>
       <div className="Phase3">
       <Homecard path="/SoftWareEngineering" title="Software Engineering"/>
       <Homecard path="/UnifiedModellingLanguage" title="Unified Modelling Language"/>
       <Homecard path="/WebTechnologies" title="Web Technologies"/>
       <Homecard path="/MERNStack" title="MERN Stack"/>
       <Homecard path="/CryptoGraphyAndCyberSecurity" title="CryptoGraphy And Cyber Security "/>
       <Homecard path="/MobileApplicationDev" title="Mobile Application Development"/>
       <Homecard path="/TestingAndDevops" title="Testing And Devops"/>
       </div>
       <div className="hii">
         Phase-4
       </div>
       <div className="Phase4">
       <Homecard path="/DesignPatternsAndSystemDesign" title="Design Patterns And System Design"/>
       <Homecard path="/DistributedSystems" title="Distributed Systems"/>
       <Homecard path="/CloudComputing" title="Cloud Computing"/>
       <Homecard path="/ComputerGraphicsAndGameDevelopment" title="Computer Graphics And Game Development"/>
       </div>
    </div>
  )
}

export default CSFundamentals