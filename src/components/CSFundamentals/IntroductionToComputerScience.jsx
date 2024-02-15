import React from 'react'
import photo1 from "./assets/Steve.jpg"
import photo2 from "./assets/Turing.jpg"
import photo3 from "./assets/oldendaycomputer.jpeg"
import photo4 from "./assets/macintosh.jpg"
import './CSFundamentals.css'
const IntroductionToComputerScience = () => {
  return (
    <>
   
    <div className="Intro">
   
      <img src={photo1} alt="Steve Jobs" className="photo1"/>  
    </div>
    <div className="text">
      <h3>There are approximately 25.6 million Software Developers in the world.</h3>
      <h3>It is expected that number of Software Developers will be 29.3 millions worldwide by 2027. </h3>
      <div className="history">
      <h1 className="history">History of Modern Computer Science</h1>
      <img src={photo2} alt="Alan Turing" className="photo2"/>
      
      <p>Alan Turing was considered as Father of Modern Day Computer Science. While working for the</p>
      <p>British Secret Service during World War II. Turing was recruited, along with a few other mathematicians,</p>
      <p>into the code-breaking effort undertaken by the British government at Bletchley Park to crack the Enigma machine.</p>
      <p>The Enigma was a sophisticated electro-mechanical device used by the German military to encrypt their orders,</p> 
      <p> including those that were transmitted to the U-boats wreaking havoc on the Atlantic shipping lanes.</p> 
      <p>The “keys” – the sets of rules for encoding messages – used by the Enigma would change constantly.</p> 
      <p>Turing designed machines, known as “bombes”, that could cycle through hundreds and thousands of</p>
      <p>Enigma settings to match the available “cribs” (the most frequently occurring words across messages) in order to</p>
      <p>identify the correct key. It was extremely difficult work, tense and taut, equal parts educated guesswork and puzzle solving.</p> 
      <p>Turing’s contributions helped make the decryption work at Bletchley Park a success and played a substantial</p>
      <p> role in the eventual victory of the Allies over Axis Powers.That leads to Foundation of Computer Science after War</p>
      <p>You can know More about this invention in the Documentary film called The Imitation Game </p>
      <p>You can learn about this theoritcally from a subject called Theory Of Computation in more detail</p>
      </div>
      <div>
      <h1>Early Age Computers</h1>
      <img src={photo3} alt="Earlyagecomputers"/>
      <h3>The Early Age Computers are Very large in Size,The cost of Memory and Processor is also high</h3>
      <h3>Early Age Computers are mainly used for Scientific and Industrial Purpose</h3>
      </div>
      <div>
      <h1>Modern Day Computers</h1>
      <img src={photo3} alt="Earlyagecomputers"/> 
      </div>
    </div>
    </>
  )
}

export default IntroductionToComputerScience