import React, { Component } from 'react'
import DataGlasses from '../Data/DataGlasses.json' 

export default class BTThuKinh extends Component {
    styleGlass = {
        width: '114px',
        top: '61px',
        left: '327px',
        opacity: '0.75',
    }
    
    state = {
        glassCurrent: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlasses = () => {
        return DataGlasses.map((item, index) => {
            return <div className='col-2 p-3' key={index}>
                <img onClick={() => {
                    this.chooseGlass(item)
                }} style={{width:'114px'}} src={item.url} alt={item.name}/>
            </div>
        })
    }

    chooseGlass = (newState) => {
        this.setState({
            glassCurrent: newState,
        })
    }

    render() {

        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.webp)', minHeight: '1200px', backgroundSize: 'cover', backgroundRepeat: 'repeat' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.35)', minHeight: '1200px' }}>
                    <h4 className='text-light p-4' style={{ backgroundColor: 'rgba(0,0,0,.75)' }}>TRY GLASSES APP ONLINE</h4>
                    <div className='container' style={{ marginTop: '110px' }}>
                        <div className='row'>
                            <div className='col-6 position-relative text-center'>
                                <img className='position-absolute' src='./glassesImage/model.jpg' alt='model' style={{ width: '200px' }} />
                                <img className='position-absolute' src={this.state.glassCurrent.url} alt='glasses' style={this.styleGlass} />
                            </div>
                            <div className='col-6 text-center'>
                                <img src='./glassesImage/model.jpg' alt='model' style={{ width:'200px' }} />
                            </div>
                        </div>
                    </div>
                    <div className='container bg-light mt-5'>
                        <div className='row'>
                            {this.renderGlasses()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
