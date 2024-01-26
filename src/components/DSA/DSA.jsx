import React from 'react'
import { Link } from 'react-router-dom'
import './DSA.css'
const DSA = () => {
  return (
    <div className='Hello'>
      <Link to="/DsaPrerequitises">
     <button className="a1">DSA Prerequitises</button>
      </Link>
      <Link to="/Cpluspluspathway">
     <button className="a1">C++ Pathway</button>
      </Link>
      <Link to="/JavaPathway">
     <button className="a1">Java Pathway</button>
      </Link>
      <Link to="/Blogs">
     <button className="a1">Blogs</button>
      </Link>
      <Link to="/CompetitiveDSABooks">
     <button className="a1">Competitive DSA Books</button>
      </Link>
      <Link to="/DSAStrcturedCuricullumInJava">
     <button className="a1">DSA Level 2 Curicullum</button>
      </Link>
      <Link to="/SdeSheets.jsx">
     <button className="a1"> DSA SDE Sheets</button>
      </Link>
      <Link to="/CodingPractice">
     <button className="a1">Programming Practice Websites</button>
      </Link>
      <Link to="/DebuggingCommunity">
     <button className="a1">DebuggingCommunity</button>
      </Link>
    </div>
  )
}

export default DSA