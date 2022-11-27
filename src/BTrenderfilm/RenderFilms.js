import React, { Component } from 'react'
import Data from '../Data/DataFilms.json'


export default class RenderFilms extends Component {
    renderFilm = () => {
        return Data.map((item, index) => {
            return <div className='col-3' key={index}>
                <div className="card text-white bg-dark mt-4" style={{width:'250px', height:'380px', padding:'0'}}>
                    <img className="card-img-top" style={{width:'248px', height:'270px'}} src={item.hinhAnh} alt={item.tenPhim} />
                    <div className="card-body" style={{marginTop: '-10px'}}>
                        <h4 className="card-title" style={{fontSize:'16px',height:'25px'}}>{item.tenPhim}</h4>
                        <p className="card-text" style={{fontSize:'13px',height:'85px', color:'yellow',marginTop:'0px'}}>{item.moTa.length>70 ? <p>{item.moTa.substr(0,80)}....</p> : <p> film.moTa</p>}</p>
                    </div>
                </div>
            </div>

        })

    }
    render() {
        return (
            <div style={{ backgroundImage: 'url(./Background/avengers.jpg)', minHeight: '1000px', backgroundSize: 'contain'}}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.85)', minHeight: '1000px' }}>
                    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "rgba(87,83,149,0.6)" }}>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className='container mt-5' style={{width: '90%'}}>
                        <div className='row'>
                            {this.renderFilm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
