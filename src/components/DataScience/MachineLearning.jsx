import React from 'react'
import './DataScience.css'
import MenuTitle from '../MenuTitle'
const MachineLearning = () => {
  return (
    <div className="menuitem">
      <MenuTitle title="Kaggle Intro To Machine Learning Course" url="https://www.kaggle.com/code/dansbecker/how-models-work"/>
      <MenuTitle title="Andrew Ng Machine Learning Specialization" url="https://www.coursera.org/specializations/machine-learning-introduction"/>
      <MenuTitle title="Machine Learning Algorithms" url="https://www.udemy.com/course/machinelearning/?couponCode=ST14MT32124"/>
      <MenuTitle title="Kaggle Datasets For Practice" url="https://www.kaggle.com/datasets?topic=trendingDataset"/>
      <MenuTitle title="Book" url="https://www.amazon.in/Machine-Learning-Tom-M-Mitchell/dp/1259096955"/>
    </div>
  )
}

export default MachineLearning