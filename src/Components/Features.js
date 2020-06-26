import React, { Component } from 'react'
import img1 from '../img/card1 1.png'
import img2 from '../img/card2 1.png'
import img3 from '../img/card3 1.png'
import wave from '../img/wave.png'

export default class Features extends Component {
    render() {
        return (
            <div className="feature-container">
                <h2 className="feature-title">Features</h2>

                <div className="card-feature">

                    <div className="card-feature-item">
                    <img src={img1}/>
                    <p className="title">4k 60fps</p>
                    <p className="description">Nostrud consectetur sint officia irure aute irure esse anim Lorem.</p>
                    </div>
                    
                    <div className="card-feature-item">
                    <img src={img2}/>
                    <p className="title">4k 60fps</p>
                    <p className="description">Nostrud consectetur sint officia irure aute irure esse anim Lorem.</p>
                    </div>
                    
                    <div className="card-feature-item">
                    <img src={img3}/>
                    <p className="title">4k 60fps</p>
                    <p className="description">Nostrud consectetur sint officia irure aute irure esse anim Lorem.</p>
                    </div>
                    
                </div>

                <img src={wave} alt="wave" className="wave" />
            </div>
        )   
    }
}
