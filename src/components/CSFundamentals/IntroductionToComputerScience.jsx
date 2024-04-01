import React from 'react'
import photo1 from "./assets/Steve.jpg"
import photo2 from "./assets/Turing.jpg"
import photo3 from "./assets/oldendaycomputer.jpeg"
import photo4 from "./assets/mac.jpg"


import './CSFundamentals.css'
const IntroductionToComputerScience = () => {
  return (
    <>
   
    <div className="Intro">
   
      <img src={photo1} alt="Steve Jobs" className="photo1"/>  
    </div>
    <div className="text">
    
      <h4>There are approximately 25.6 million Software Developers in the world.</h4>
      <h4>It is expected that number of Software Developers will be 29.3 millions worldwide by 2027. </h4>
      <div className="history">
      <h1 className="history">History of Modern Computer Science</h1>
      <img src={photo2} alt="Alan Turing" className="photo2"/>
      
      <h4>Alan Turing was considered as Father of Modern Day Computer Science. While working for the</h4>
      <h4>British Secret Service during World War II. Turing was recruited, along with a few other mathematicians,</h4>
      <h4>into the code-breaking effort undertaken by the British government at Bletchley Park to crack the Enigma machine.</h4>
      <h4>The Enigma was a sophisticated electro-mechanical device used by the German military to encrypt their orders,</h4> 
      <h4> including those that were transmitted to the U-boats wreaking havoc on the Atlantic shipping lanes.</h4> 
      <h4>The “keys” – the sets of rules for encoding messages – used by the Enigma would change constantly.</h4> 
      <h4>Turing designed machines, known as “bombes”, that could cycle through hundreds and thousands of</h4>
      <h4>Enigma settings to match the available “cribs” (the most frequently occurring words across messages) in order to</h4>
      <h4>identify the correct key. It was extremely difficult work, tense and taut, equal parts educated guesswork and puzzle solving.</h4> 
      <h4>Turing’s contributions helped make the decryption work at Bletchley Park a success and played a substantial</h4>
      <h4> role in the eventual victory of the Allies over Axis Powers.That leads to Foundation of Computer Science after War</h4>
      <h4>You can know More about this invention in the Documentary film called The Imitation Game </h4>
      <h4>You can learn about this theoritcally from a subject called Theory Of Computation in more detail</h4>
    
      <div>
      <h1>Early Age Computers</h1>
      <img src={photo3} alt="Earlyagecomputers"/>
      <h4>The Early Age Computers are Very large in Size,The cost of Memory and Processor is also high</h4>
      <h4>Early Age Computers are mainly used for Scientific and Industrial Purpose</h4>
      </div>
      <div>
      <h1>Modern Day Computers</h1>
      <img src={photo4} className="mac" alt="ModernDayComputers"/> 
      <h4>In 1984 Apple Company released 1st version of Personal computer Macintosh,Modern day Computers,Laptops evolved from this Machine</h4>
      <h4>Steve Jobs and Steve Wozniac together developed this,So that Common man can use it for personnel purpose </h4> 
      </div>
      <div className="programminglanguages">
       <h1>Programming a Computer</h1> 
      <h4>There are a plethora of languages that the programmer uses for giving commands to the computer.</h4>
      <h4>All these languages are categorized as assembly-level language, machine-level language, and high-level language.</h4>
      <h4>Languages like C, C++, Python, and Java are high-level programming languages.</h4>
       <h4>Machine-level language is a low-level language that deals with 0s and 1s,</h4> 
       <h4>Whereas assembly-level language lies between low-level language and high-level language; it is more of an intermediary language</h4>
      </div>
      <div>
        <h1>How to Become Programmer in Nowadays</h1>
        
          <h4>Learn a Procedural Programming Language</h4>
          <h4>Learn a Object Oriented Programming Language with Data Structures And Algorithms</h4>
          <h4>Learn Computer Sciene Fundamentals</h4>
          <h4>Choose a Specailization Either Web Development or Data Science or Your Intrested Domain and Make Projects</h4>
          <h4>You can learn all these skills and concepts from the guidence provided by this blog</h4>
          <h4>What you need is Dedication to learn,Internet Connection,Laptop</h4>
          <h4>Thank You</h4> 
      </div>
    </div>
    </div>
    </>
  )
}

export default IntroductionToComputerScience