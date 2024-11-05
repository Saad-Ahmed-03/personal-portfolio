import React from 'react'

export default function Skills (){
  return (
    <>
    <div className="skills">
        <h2>Skills</h2>
        <div className="skill">
            <h3>HTML/CSS</h3>
            <div className="skill-bar">
                <div className="skill-bar-fill" style={{width: "80%"}}></div>
            </div>
            <p>80%</p>
        </div>
    </div>
    </>
  )
}