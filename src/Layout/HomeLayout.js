import React, { Component } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default class Home extends Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        )
    }
}
