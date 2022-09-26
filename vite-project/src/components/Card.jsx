import React from 'react'
import locic from "../components/image/loc.png"


function Card(props) {
    
  return (
    <div className='Card'>
        <div className='card-img'>
            <img  id = "main-img" src={props.photo} />

        </div>
        <div className='left-side'>
            <div className="location">
                <img id='loc-icon' src={locic} alt=""  />
                <p id="main-loc">{props.location}</p>
                <a id="Google-ic" href="" >View on Google Maps</a>
            <p id='card-header'>{props.title}</p>
            <p id="date" >{props.date}</p>
            <p id="desc">{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card