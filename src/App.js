import React,{lazy,Suspense} from "react";
import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import ImageSlider from './components/ImageSlider';
import Contribute from './components/Contribute';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import WebDevelopmentBasics from './components/WebDevelopment/WebDevelopmentBasics';
import GitAndGithub from './components/WebDevelopment/GitAndGithub';
import HtmlAndCss from './components/WebDevelopment/HtmlAndCss';
import JavaScript from './components/WebDevelopment/JavaScript';
import Reactjs from './components/WebDevelopment/Reactjs';
import BackendBasics from './components/WebDevelopment/BackendBasics';
import MongoDB from './components/WebDevelopment/MongoDB';
import NodeANDExpress from './components/WebDevelopment/NodeANDExpress';
import MERNStackProjects from './components/WebDevelopment/MERNStackProjects';
import Deployments from './components/WebDevelopment/Deployments';
import Footerx from './components/Footerx';
import MyCourses from './components/MyCourses';
import WebPrerequitises from './components/WebDevelopment/WebPrerequitises';
import NextJs from './components/WebDevelopment/NextJs';
import MicroServicesAndCloud from './components/WebDevelopment/MicroServicesAndCloud';
import Spring from './components/WebDevelopment/Spring';
import SystemDesign from './components/WebDevelopment/SystemDesign';
import ProgrammingLanguage from './components/DataScience/ProgrammingLanguage';
import Statistics from './components/DataScience/Statistics';
import SQL from './components/DataScience/SQL';
import DataCleaning from './components/DataScience/DataCleaning';
import EDA from './components/DataScience/EDA';
import MachineLearning from './components/DataScience/MachineLearning';
import DeepLearningAndNeuralNetworks from './components/DataScience/DeepLearningAndNeuralNetworks';
import NLP from './components/DataScience/NLP';
import DataSciencePrerequitises from './components/DataScience/DataSciencePrerequitises';
import IntroductionToGenerativeAI from './components/DataScience/IntroductionToGenerativeAI';
import PracticeWebsitesAndBlogs from './components/DataScience/PracticeWebsitesAndBlogs';
import AnalyticsVidhyaBlackBeltProgram from './components/DataScience/AnalyticsVidhyaBlackBeltProgram';
import DsaPrerequitises from './components/DSA/DsaPrerequitises';
import Cpluspluspathway from './components/DSA/Cpluspluspathway';
import JavaPathway from './components/DSA/JavaPathway';
import Blogs from './components/DSA/Blogs';
import CompetitiveDSABooks from './components/DSA/CompetitiveDSABooks';
import DSAStrcturedCuricullumInJava from './components/DSA/DSAStrcturedCuricullumInJava';
import SdeSheets from './components/DSA/SdeSheets';
import CodingPractice from './components/DSA/CodingPractice';
import DebuggingCommunity from './components/DSA/DebuggingCommunity';
import IntroductionToComputerScience from './components/CSFundamentals/IntroductionToComputerScience';
import CLanguage from './components/CSFundamentals/CLanguage';
import Cplusplus from './components/CSFundamentals/Cplusplus';
import DataStrctures from './components/CSFundamentals/DataStrctures';
import DesignAndAnalysisOfAlgorithms from './components/CSFundamentals/DesignAndAnalysisOfAlgorithms';
import Java from './components/CSFundamentals/Java';
import OOPS from './components/CSFundamentals/OOPS';
import Python from './components/CSFundamentals/Python';
import JS from './components/CSFundamentals/JS';
import DiscreteMathematics from './components/CSFundamentals/DiscreteMathematics';
import OperatingSystems from './components/CSFundamentals/OperatingSystems';
import UnixAndLinux from './components/CSFundamentals/UnixAndLinux';
import DBMS from './components/CSFundamentals/DBMS';
import ComputerNetworks from './components/CSFundamentals/ComputerNetworks';
import ThoeryOfComputation from './components/CSFundamentals/ThoeryOfComputation';
import CompilerDesign from './components/CSFundamentals/CompilerDesign';
import SoftWareEngineering from './components/CSFundamentals/SoftWareEngineering';
import Uml from './components/CSFundamentals/Uml';
import WebTechnologies from './components/CSFundamentals/WebTechnologies';
import MERNStack from './components/CSFundamentals/MERNStack';
import CryptoGraphyAndCyberSecurity from './components/CSFundamentals/CryptoGraphyAndCyberSecurity';
import MobileApplicationDev from './components/CSFundamentals/MobileApplicationDev';
import DesignPatternsAndSystemDesign from './components/CSFundamentals/DesignPatternsAndSystemDesign';
import TestingAndDevops from './components/CSFundamentals/TestingAndDevops';
import DistributedSystems from './components/CSFundamentals/DistributedSystems';
import CloudComputing from './components/CSFundamentals/CloudComputing';
import ComputerGraphicsAndGameDevelopment from './components/CSFundamentals/ComputerGraphicsAndGameDevelopment';
import BlockChainAndWeb3 from './components/WebDevelopment/BlockChainAndWeb3';
const WebDevlopment=lazy(()=>import("./components/WebDevelopment/WebDevlopment"));
const DataScience=lazy(()=>import("./components/DataScience/DataScience"));
const CSFundamentals=lazy(()=>import("./components/CSFundamentals/CSFundamentals"));
const DSA=lazy(()=>import("./components/DSA/DSA"));


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/WebDevlopment" element={<Suspense><WebDevlopment/></Suspense>}/>
          <Route path="/DSA" element={<Suspense><DSA/></Suspense>}/>
          <Route path="/DataScience" element={<Suspense><DataScience/></Suspense>}/>
          <Route path="/CSFundamentals" element={<Suspense><CSFundamentals/></Suspense>}/>
          <Route path="/Contribute" element={<Contribute/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/WebDevelopmentBasics" element={<WebDevelopmentBasics/>}/>
          <Route path="/GitANDGithub" element={<GitAndGithub/>}/>
          <Route path="/HtmlAndCss" element={<HtmlAndCss/>}/>
          <Route path="/JavaScript" element={<JavaScript/>}/>
          <Route path="/Reactjs" element={<Reactjs/>}/>
          <Route path="BackendBasics" element={<BackendBasics/>}/>
          <Route path="/MongoDB" element={<MongoDB/>}/>
          <Route path="/NodeAndExpress" element={<NodeANDExpress/>}/>
          <Route path="/MERNStackProjects" element={<MERNStackProjects/>}/>
          <Route path="/Deployments" element={< Deployments/>}/>
          <Route path="/MyCourses" element={<MyCourses/>}/>
          <Route path="/WebPrerequitises" element={<WebPrerequitises/>}/>
          <Route path="/NextJs" element={<NextJs/>}/>
          <Route path="/MicroServicesAndCloud" element={<MicroServicesAndCloud/>}/>
          <Route path="/Spring" element={<Spring/>}/>
          <Route path="/SystemDesign" element={<SystemDesign/>}/>
          <Route path="/ProgrammingLanguage" element={<ProgrammingLanguage/>}/>
          <Route path="/Statistics" element={<Statistics/>}/>
          <Route path="/SQL" element={<SQL/>}/>
          <Route path="/DataCleaning" element={<DataCleaning/>}/>
          <Route path="/MachineLearning" element={<MachineLearning/>}/>
          <Route path="/DeepLearningAndNeuralNetworks" element={<DeepLearningAndNeuralNetworks/>}/>
          <Route path="/NLP" element={<NLP/>}/>
          <Route path="/DataSciencePrerequitises" element={<DataSciencePrerequitises/>}/>
          <Route path="/IntroductionToGenerativeAI" element={<IntroductionToGenerativeAI/>}/>
          <Route path="/PracticeWebsitesAndBlogs" element={<PracticeWebsitesAndBlogs/>}/>
          <Route path="/AnalyticsVidhyaBlackBeltProgram" element={<AnalyticsVidhyaBlackBeltProgram/>}/>
          <Route path="/DsaPrerequitises" element={<DsaPrerequitises/>}/>
          <Route path="/Cpluspluspathway" element={<Cpluspluspathway/>}/>
          <Route path="/JavaPathway" element={<JavaPathway/>}/>
          <Route path="/Blogs" element={<Blogs/>}/>
          <Route path="/CompetitiveDSABooks" element={<CompetitiveDSABooks/>}/>
          <Route path="/DSAStrcturedCuricullumInJava" element={<DSAStrcturedCuricullumInJava/>}/>
          <Route path="/SdeSheets" element={<SdeSheets/>}/>
          <Route path="/CodingPractice" element={<CodingPractice/>}/>
          <Route path="/DebuggingCommunity" element={<DebuggingCommunity/>}/>
          <Route path="/IntroductionToComputerScience" element={<IntroductionToComputerScience/>}/>
          <Route path="/CLanguage" element={<CLanguage/>}/>
          <Route path="/Cplusplus" element={<Cplusplus/>}/>
          <Route path="/DataStrctures" element={<DataStrctures/>}/>
          <Route path="/DesignAndAnalysisOfAlgorithms" element={<DesignAndAnalysisOfAlgorithms/>}/>
          <Route path="/Java" element={<Java/>}/>
          <Route path="/OOPS" element={<OOPS/>}/>
          <Route path="/Python" element={<Python/>}/>
          <Route path="/JS" element={< JS/>}/>
          <Route path="/DiscreteMathematics" element={<DiscreteMathematics/>}/>
          <Route path="/OperatingSystems" element={<OperatingSystems/>}/>
          <Route path="/UnixAndLinux" element={<UnixAndLinux/>}/>
          <Route path="/DBMS" element={<DBMS/>}/>
          <Route path="/ComputerNetworks" element={<ComputerNetworks/>}/>
          <Route path="/ThoeryOfComputation" element={<ThoeryOfComputation/>}/>
          <Route path="/CompilerDesign" element={<CompilerDesign/>}/>
          <Route path="/SoftWareEngineering" element={<SoftWareEngineering/>}/>
          <Route path="/WebTechnologies" element={<WebTechnologies/>}/>
          <Route path="/MERNStack" element={<MERNStack/>}/>
          <Route path="/CryptoGraphyAndCyberSecurity" element={<CryptoGraphyAndCyberSecurity/>}/>
          <Route path="/MobileApplicationDev" element={<MobileApplicationDev/>}/>
          <Route path="/DesignPatternsAndSystemDesign" element={<DesignPatternsAndSystemDesign/>}/>
          <Route path="/TestingAndDevops" element={<TestingAndDevops/>}/>
          <Route path="/DistributedSystems" element={<DistributedSystems/>}/>
          <Route path="/CloudComputing" element={<CloudComputing/>}/>
          <Route path="/ComputerGraphicsAndGameDevelopment" element={<ComputerGraphicsAndGameDevelopment/>}/>
          <Route path="/BlockChainAndWeb3 " element={<BlockChainAndWeb3/>}/>      
        </Routes>
        
        <Footerx/>
    </div>

  );
}

export default App;
