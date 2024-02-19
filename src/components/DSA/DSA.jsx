import React from 'react'
import { Link } from 'react-router-dom'
import './DSA.css'
import Homecard from '../Homecard'
const DSA = () => {
  return (
    <div className='Hello'>
      <Homecard path="/DsaPrerequitises" title="DSA Prerequitises"/>
      <div className="DSA1">
      <Homecard path="/Cpluspluspathway" title="C++ Pathway"/>
      <Homecard path="/JavaPathway" title="Java Pathway"/>
      </div>
      <div className="DSA1">
      <Homecard path="/Blogs" title="Blogs"/>
      <Homecard path="/CompetitiveDSABooks" title="Competitive DSA Books"/>
      </div>
      <div className="DSA1">
      <Homecard path="/CodingPractice" title="Programming Practice Websites"/>
      <Homecard path="/SdeSheets" title="DSA SDE Sheets"/>
      </div>
      <Homecard path="/DebuggingCommunity" title="DebuggingCommunity"/>
    </div>
  )
}

export default DSA