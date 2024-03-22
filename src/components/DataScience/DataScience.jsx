import React from 'react'
import { Link } from 'react-router-dom'
import "./DataScience.css"
import Homecard from '../Homecard'
const DataScience = () => {
  return (
    <div className="Hello">
       <div className="hii">
       Fundamentals & Beginner
       </div>
        <div className="blocks">
        <Homecard path="/DataSciencePrerequitises" title="DataScience Prerequitises"/>
        <Homecard path="/ProgrammingLanguage" title="Python With DSA"/>
        <Homecard path="/DSLibraries" title="DataScience Libraries"/>
        <Homecard path="/MathsForDataScience" title="Maths For DataScience"/>
        <Homecard path="/StrcturedQueryLanguage" title="Learn SQL"/>
        </div>
        <div className="hii">
        Core & Intermediate
       </div>
        <div className="blocks">
        <Homecard path="/DataCleaning" title="Data Cleaning"/>
        <Homecard path="/ExploratoryDataAnalysis" title="Exploratory Data Analysis"/>
        <Homecard path="/MachineLearning" title="Machine Learning Algorithms"/>
        <Homecard path="/FeatureSelection" title="Feature Selection And Engineering"/>
        <Homecard path="/BigData" title="BigData&Spark"/>
        <Homecard path="/PracticeWebsitesAndBlogs" title="Practice on Anayltics Vidhya And Kaggle"/>
        <Homecard path="/AnalyticsVidhyaBlackBeltProgram" title="Analytics Vidhya DataScientist BlackBelt Program"/>
        </div>
        <div className="hii">
        Research & Advanced
       </div>
       <div className="blocks">
        <Homecard path="/DeepLearningAndNeuralNetworks" title="DeepLearning & NeuralNetworks"/>
        <Homecard path="/ComputerVision" title="Computer Vision"/>
        <Homecard path="/NaturalLanguageProcessing" title="Natural Language Processing"/>
        <Homecard path="/RecommendationSystems" title="Recommendation Systems"/>
        <Homecard path="/TimeSeries" title="TimeSeries Forecasting"/>
        <Homecard path="/ReinforcementLearning" title="Reinforcement Learning"/>
        <Homecard path="/DeepReinforcementLearning" title="Deep RL And Self Driving Cars NanoDegree"/>
        <Homecard path="/IntroductionToGenerativeAI" title="Introduction To Generative AI & LLM's"/>
        <Homecard path="/DataScienceCommunity" title="DataScience Community"/>
        </div>
    </div>
  )
}

export default DataScience