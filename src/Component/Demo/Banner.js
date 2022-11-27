import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Fluid jumbo heading</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>More info</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                    </p>
                </div>
            </div>
        )
    }
}
