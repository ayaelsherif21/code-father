import React, { useState } from 'react'
import './Team.css'
import { ourTeam } from './OurTeam'


export default function Team() {
   const [member, setMember] = useState(ourTeam)
  return (


<div className="teamsec">
    <h4 className='secTitle'>Meet our <span style={{color:"var(--mainColor)"}}>Team</span></h4>

<section className='team flex'>
    <div className="dropdown">
  <input
    className="sr-only"
    name="state-dropdown"
    id="state-dropdown"
    type="checkbox"
  />
  <label htmlFor="state-dropdown" aria-label="dropdown scrollbar" className="trigger">
    <img
      src="./../images/logo2.png"
      alt="Profile"
      className="trigger-img"
    />
    <div className="trigger-text">
    <h4 >Mohamed Elgendy</h4>
    <h5>XR Developer</h5>
    </div>
   
    <span className="trigger-arrow">›</span>
  </label>

  <ul className="list webkit-scrollbar" role="list" dir="auto">
    <li className="listitem" role="listitem">
      <article className="article">Hover to view scrollbar.</article>
    </li>
    <li className="listitem" role="listitem">
      <article className="article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        sunt tempora recusandae dolorum.
      </article>
    </li>
    <li className="listitem" role="listitem">
      <article className="article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        sunt tempora recusandae dolorum.
      </article>
    </li>
  </ul>
    </div>
    {/* <div className="dropdown">
  <input
    className="sr-only"
    name="state-dropdown"
    id="state-dropdown"
    type="checkbox"
  />
  <label htmlFor="state-dropdown" aria-label="dropdown scrollbar" className="trigger">
    <img
      src="./logo2.png"
      alt="Profile"
      className="trigger-img"
    />
    <div className="trigger-text">
    <h4 >Omar Abdelaziz</h4>
    <h5>Flutter Developer</h5>
    </div>
   
    <span className="trigger-arrow">›</span>
  </label>

  <ul className="list webkit-scrollbar" role="list" dir="auto">
    <li className="listitem" role="listitem">
      <article className="article">Hover to view scrollbar.</article>
    </li>
    <li className="listitem" role="listitem">
      <article className="article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        sunt tempora recusandae dolorum.
      </article>
    </li>
    <li className="listitem" role="listitem">
      <article className="article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        sunt tempora recusandae dolorum.
      </article>
    </li>
  </ul>
    </div>
    <div className="dropdown">
  <input
    className="sr-only"
    name="state-dropdown"
    id="state-dropdown"
    type="checkbox"
  />
  <label htmlFor="state-dropdown" aria-label="dropdown scrollbar" className="trigger">
    <img
      src="./logo2.png"
      alt="Profile"
      className="trigger-img"
    />
    <div className="trigger-text">
    <h4 >Dai Ashraf</h4>
    <h5>Game Artist</h5>
    </div>
   
    <span className="trigger-arrow">›</span>
  </label>

  <ul className="list webkit-scrollbar" role="list" dir="auto">
    <li className="listitem" role="listitem">
      <article className="article">Hover to view scrollbar.</article>
    </li>
    <li className="listitem" role="listitem">
      <article className="article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        sunt tempora recusandae dolorum.
      </article>
    </li>
    <li className="listitem" role="listitem">
      <article className="article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        sunt tempora recusandae dolorum.
      </article>
    </li>
  </ul>
    </div> */}
</section>

</div>


  )
}
