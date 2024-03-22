import React from 'react'
import './DataScience.css'
import MenuTitle from '../MenuTitle'
const DataCleaning = () => {
  return (
    <div className="menuitem">
      <MenuTitle title="What is Data Cleaning" url="https://www.analyticsvidhya.com/blog/2021/04/data-cleaning-for-beginners-why-and-how/"/>
      <MenuTitle title="Microsoft Excel Course" url="https://www.youtube.com/watch?v=RdTozKPY_OQ&t=2984s"/>
      <MenuTitle title="Pandas Tutorial" url="https://www.kaggle.com/learn/pandas"/>
      <MenuTitle title="Data Cleaning Tutorial" url="https://www.kaggle.com/learn/data-cleaning"/>
      <MenuTitle title="Documentation" url="https://realpython.com/python-data-cleaning-numpy-pandas/"/>
    </div>
  )
}

export default DataCleaning