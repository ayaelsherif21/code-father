import React, { useState } from 'react'
import './Team.css'
import { ourTeam } from './OurTeam'
import Instructor from './Instructor'


export default function Team() {
   const [member, setMember] = useState(ourTeam)
  return (


<div className="teamsec">
    <h4 className='secTitle'>Meet our <span style={{color:"var(--mainColor)"}}>Team</span></h4>
    <div style={{columnGap:"20px"}} className="instructors flex">
    <Instructor courseId="1" />
    <Instructor courseId="4" /> 
    </div>
   

</div>


  )
}
