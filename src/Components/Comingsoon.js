import React, { Component } from 'react'
import cam from '../img/camera-soon-v2 1.png'
import circle from '../img/circle.png'

export default class Comingsoon extends Component {
    render() {
        return (
            <div className="comingsoon-container">

                <div className="icon-comingsoon">
                <h1 className="title-soon">ComingSoon</h1>
                <img src={cam} alt="cam" className="img-cam" />
                <img src={circle} alt="circle" className="" />
                </div>

    
               
            </div>
        )
    }
}
