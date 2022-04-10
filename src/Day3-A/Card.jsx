import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='cont'>

        <div className='cont1' style={props.b}>

            <div className='cont2'>
                <h3 className='a'>{props.date}</h3>
                <img src={props.img}/>
                <p  >Case Study</p>
                <h1 className='c'>{props.heading}</h1>
                <h1 className='e'>{props.heading1}</h1>
                <h3 className='d'>{props.device}</h3>

            </div>

            <div className='cont3'>
                <i className="fa-solid fa-arrow-right"></i>
            </div>

        </div>

    </div>
  )
}

export default Card
