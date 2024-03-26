import React from 'react'
import './DSA.css'
import MenuTitle from '../MenuTitle'
const CodingPractice = () => {
  return (
    <div className="menuitem">
        <div className="hii">
          DSA
       </div>
      <MenuTitle title="Hackerrank" url="https://www.hackerrank.com/domains/data-structures?filters%5Bstatus%5D%5B%5D=unsolved&badge_type=problem-solving"/>
      <MenuTitle title="GeeksForGeeks" url="https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions"/>
      <MenuTitle title="Leetcode" url="https://leetcode.com/problemset/"/>
      <div className="hii">
         Competitive Programming
       </div>
      <MenuTitle title="Codechef" url="https://www.codechef.com/practice"/>
      <MenuTitle title="HackerEarth Contests" url="https://www.hackerearth.com/challenges/hackathon/"/>
      <MenuTitle title="Codeforces" url="https://codeforces.com/problemset"/>
      <MenuTitle title="TopCoder" url="https://www.topcoder.com/thrive/tracks?tax=Advanced%20Math&track=Competitive%20Programming"/>
      <MenuTitle title="SPOJ" url="https://www.spoj.com/"/>
      
    </div>
  )
}

export default CodingPractice