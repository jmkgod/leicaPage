import React, { Component } from 'react'
import Content from '../Components/Content'
import Features from '../Components/Features'
import ComingSoon  from '../Components/Comingsoon'

class Home extends Component {
    render() {
        return (
            <div>
                <Content />
                <Features />
                <ComingSoon />
            </div>
        )
    }
}

export default Home