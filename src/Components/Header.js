import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
                <div className="nav-container">
                    <nav>
                        <h1 className="logo cw">Leica</h1>
                        <ul className="nav-list">
                            <li className="nav-items">Features</li>
                            <li className="nav-items btn-danger">Order</li>
                        </ul>
                    </nav>
                </div>
        )
    }
}
