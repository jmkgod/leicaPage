import React, { Component } from 'react'
import ig from '../img/instagram-logo.png'
import yt from '../img/yt-logo.png'
import twt from '../img/twitter-logo.png'


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-home">

                <nav>
                    <h2> Leica 2020 </h2>

                    <ul>
                        <li><img src={yt} alt="yt" /></li>
                        <li><img src={twt} alt="twt" /></li>
                        <li><img src={ig} alt="ig" /></li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}
