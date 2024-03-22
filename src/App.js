import React,{lazy,Suspense} from "react";
import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import Spacecomponent from "./components/Spacecomponent";
import store from "./utils/store";

import {Provider} from "react-redux";
import{
  Contribute,
  AboutUs,
  Home,
  WebDevelopmentBasics,
  GitAndGithub,
  HtmlAndCss,
  JavaScript,
  Reactjs,
  BackendBasics,
  MongoDB,
  NodeANDExpress,
  MERNStackProjects,
  Deployments,
  Footerx,
  MyCourses,
  WebPrerequitises,
  NextJs,
  MicroServicesAndCloud,
  Spring,
  SystemDesign,
  ProgrammingLanguage,
  MathsForDataScience,
  StrcturedQueryLanguage,
  DSLibraries,
  DataCleaning,
  ExploratoryDataAnalysis,
  MachineLearning,
  DeepLearningAndNeuralNetworks,
  NaturalLanguageProcessing,
  DataSciencePrerequitises,
  IntroductionToGenerativeAI,
  ReinforcementLearning,
  RecommendationSystems,
  DeepReinforcementLearning,
  PracticeWebsitesAndBlogs,
  AnalyticsVidhyaBlackBeltProgram,
  DsaPrerequitises,
  Cpluspluspathway, 
  JavaPathway,
  Blogs,
  CompetitiveDSABooks,
  DSAStrcturedCuricullumInJava,
  SdeSheets,
  CodingPractice,
  DebuggingCommunity,
  IntroductionToComputerScience,
  CLanguage,
  Cplusplus,
  DataStructures,
  DesignAndAnalysisOfAlgorithms,
  Java,
  Python,
  VanillaJavaScript,
  DiscreteMathematics,
  OperatingSystems,
  UnixAndLinux,
  DatabaseManagementSystems,
  ComputerNetworks,
  ThoeryOfComputation,
  CompilerDesign,
  SoftWareEngineering,
  UnifiedModellingLanguage,
  WebTechnologies,
  MERNStack,
  BlockChain,
  CryptoGraphyAndCyberSecurity,
  MobileApplicationDev,
  DesignPatternsAndSystemDesign,
  TestingAndDevops,
  DistributedSystems,
  CloudComputing,
  ComputerGraphicsAndGameDevelopment,
  WebDevCommunity
  

} from './pages';
const WebDevlopment=lazy(()=>import("./components/WebDevelopment/WebDevlopment"));
const DataScience=lazy(()=>import("./components/DataScience/DataScience"));
const CSFundamentals=lazy(()=>import("./components/CSFundamentals/CSFundamentals"));
const DSA=lazy(()=>import("./components/DSA/DSA"));


function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Navbar/>
        <Spacecomponent/>
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
          <Route path="/MathsForDataScience" element={<MathsForDataScience/>}/>
          <Route path="/StrcturedQueryLanguage" element={<StrcturedQueryLanguage/>}/>
          <Route path="/DataCleaning" element={<DataCleaning/>}/>
          <Route path="/ExploratoryDataAnalysis" element={<ExploratoryDataAnalysis/>}/>
          <Route path="/MachineLearning" element={<MachineLearning/>}/>
          <Route path="/DeepLearningAndNeuralNetworks" element={<DeepLearningAndNeuralNetworks/>}/>
          <Route path="/NaturalLanguageProcessing" element={<NaturalLanguageProcessing/>}/>
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
          <Route path="/DataStructures" element={<DataStructures/>}/>
          <Route path="/DesignAndAnalysisOfAlgorithms" element={<DesignAndAnalysisOfAlgorithms/>}/>
          <Route path="/Java" element={<Java/>}/>
          <Route path="/Python" element={<Python/>}/>
          <Route path="/VanillaJavaScript" element={< VanillaJavaScript/>}/>
          <Route path="/DiscreteMathematics" element={<DiscreteMathematics/>}/>
          <Route path="/OperatingSystems" element={<OperatingSystems/>}/>
          <Route path="/UnixAndLinux" element={<UnixAndLinux/>}/>
          <Route path="/DatabaseManagementSystems" element={<DatabaseManagementSystems/>}/>
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
           <Route path="/BlockChain" element={<BlockChain/>}/>    
          <Route path="/ReinforcementLearning " element={<ReinforcementLearning/>}/>   
          <Route path="/DeepReinforcementLearning " element={<DeepReinforcementLearning/>}/>   
          <Route path="/RecommendationSystems " element={<RecommendationSystems/>}/>
          <Route path="/UnifiedModellingLanguage" element={<UnifiedModellingLanguage/>}/>
          <Route path="WebDevCommunity" element={<WebDevCommunity/>}/>
          <Route path="DSLibraries" element={<DSLibraries/>}/>

        </Routes>
        <Footerx/>
        </Provider>
    </div>

  );
}

export default App;
