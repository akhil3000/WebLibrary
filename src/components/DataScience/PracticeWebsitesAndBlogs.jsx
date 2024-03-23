import React from 'react'
import './DataScience.css'
import MenuTitle from '../MenuTitle'
const PracticeWebsitesAndBlogs = () => {
  return (
    <div className="menuitem"> 
       <MenuTitle title="Kaggle Datasets For Practice" url="https://www.kaggle.com/datasets?topic=trendingDataset"/>
       <MenuTitle title="Analytics Vidya Contests & Hackathons" url="https://datahack.analyticsvidhya.com/contest/all/"/>
    </div>
  )
}

export default PracticeWebsitesAndBlogs