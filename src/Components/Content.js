import React, { Component } from 'react'
import Cam from '../img/camera 1.png'

export default class Content extends Component {
    render() {
        return (
            <div className="showcase">
                <h2>Leica M6</h2>

                <img src={Cam} alt="Cam" className="case-img"/>

                <div className="info">
                <strong><p>Small but powerful.</p></strong>
                <p>The new Leica M6 offers 4k at 60fps, Raw Video & Full Frame Sensor.</p>
                </div>
                
            </div>
        )
    }
}
