import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ marginTop: 50 }}>
                    <Body />
                </div>
                <div style={{ marginTop: 50 }}>
                    <Footer />
                </div>
            </div>
        )
    }
}
