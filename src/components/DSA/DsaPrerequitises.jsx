import React from 'react'
import photo1 from "../DSA/images/DSA.png"
import photo2 from "../DSA/images/Maang.png";
import "./DSA.css";
const DsaPrerequitises = () => {
  return (
    <>
    <section className="image">
     <img src={photo1} className="DSA"/>
     <h1>DSA</h1>
    </section>

    <section className="content">
    <h4>Data Structures are The Building Blocks Of Any Software That We Build</h4>
    <h4>Cutting-Edge Technologies like Web Development,Data Science,Block Chain and Others will use Data Strctures Internally In their framework Implementation</h4>
    <h4>If you Master Any One Object Oriented Programming Language and Data Structures in It and CS Fundamentals You are all set to learn any Specialization</h4>
    <img src={photo2} className="Maang"/>
    <h4>All Famous Product Based Companies will ask DSA in their interviews</h4>
    <h4>The Prerequitises for DSA are:</h4>
    <ol>
      <li><h4>1.Knowledge of any One Object Oriented Programming language</h4></li>
     <li><h4>2.Problem Solving Mindset</h4></li>
      <li><h4>3.Logical Thinking</h4></li>
      </ol>
    </section>
    </>
  )
}

export default DsaPrerequitises