import React from 'react'
import { Link } from 'react-router-dom'
import "./DataScience.css"
const DataScience = () => {
  return (
    <div className="Hello">
      <Link to="/DataSciencePrerequitises">
     <button className="a1">DataScience Prerequitises</button>
      </Link>
       <Link to="/ProgrammingLanguage">
     <button className="a1">Python With DSA</button>
      </Link>
      <Link to="/DataScienceLibraries">
       <button className="a1">DataScience Libraries</button>
      </Link> 
      <Link to="/Statistics">
       <button className="a1">Statistics & Maths for DataScience</button>
      </Link> 
      <Link to="/SQL">
      <button className="a1">Learn SQL</button>
      </Link>
      <Link to="/DataCleaning">
      <button className="a1">Data Cleaning</button>
      </Link>
      <Link to="/EDA">
      <button className="a1">Exploratory Data Analysis</button>
      </Link>
       <Link to="/MachineLearning">
       <button className="a1"> Machine Learning Algorithms</button>
       </Link>
       <Link to="/BigData">
      <button className="a1">BigData&Spark</button>
      </Link>
       <Link to="/PracticeWebsitesAndBlogs">
       <button className="a1">Practice on Anayltics Vidhya And Kaggle</button>
       </Link>
       <Link to="/AnalyticsVidhyaBlackBeltProgram">
       <button className="a1">Analytics Vidhya DataScientist BlackBelt Program</button>
       </Link>
       <div className="hii">
       This Knowledge is Enough to Become Data Analyst or Data Scientist,
       AI Engineer Research Pathway is Continued for Enthusiasts
       </div>
       
       <Link to="/DeepLearningAndNeuralNetworks">
       <button className="a1">DeepLearning & NeuralNetworks</button>
       </Link>
       <Link to="/ComputerVision">
       <button className="a1">Computer Vision</button>
       </Link>
       <Link to="/NLP">
       <button className="a1">Natural Language Processing</button>
       </Link>
       <Link to="/RecommendationSystems">
       <button className="a1"> Recommendation Systems</button>
       </Link>
       <Link to="/ReinforcementLearning">
       <button className="a1">Reinforcement Learning</button>
       </Link>
       <Link to="/DeepReinforcementLearning">
       <button className="a1">Deep RL And Self Driving Cars NanoDegree</button> 
       </Link>
       <Link to="/IntroductionToGenerativeAI">
       <button className="a1">Introduction To Generative AI</button>
       </Link>
       <Link to="/DataScienceCommunity">
       <button className="a1">DataScience Community</button>
       </Link>
    </div>
  )
}

export default DataScience