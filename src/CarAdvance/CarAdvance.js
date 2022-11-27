import React, { Component } from 'react'
import './style.css'
import arrayFeatures from '../Data/arrayFeatures.json'
import wheels from '../Data/wheels.json'

export default class CarAdvance extends Component {
    changeColor = (itemChange) => {
        console.log(itemChange)
        this.setState({
            carCurrent: itemChange,
        })
    }

    renderIcon = () => {
        return arrayFeatures.map((item, index) => {
            return <div className='container-fluid p-2 border m-1' style={{ borderRadius: '5px' }} onClick={() => {
                this.changeColor(item)
            }}>
                <div className='row'>
                    <div className='col-2'>
                        <img style={{ width: '50px' }} src={item.img} alt={item.title} />
                    </div>
                    <div className='col-9 pl-5'>
                        <p className="card-text" style={{ color: 'black', margin: ' 0', textSize: '28px', fontWeight: '600', textAlign: 'left' }}>{item.title}</p>
                        <p className="card-text" style={{ color: 'black', textAlign: 'left' }}>{item.type}</p>
                    </div>
                </div>
            </div>
        })
    }

    renderWheels = () => {
        return wheels.map((item, index) => {
            return <div className='container-fluid p-2 border m-1' style={{ borderRadius: '5px' }}>
                <div className='row'>
                    <div className='col-2'>
                        <img style={{ width: '50px' }} src={item.img} alt={item.title} />
                    </div>
                    <div className='col-9 pl-5'>
                        <p className="card-text" style={{ color: 'black', margin: ' 0', textSize: '20px', fontWeight: '600', textAlign: 'left' }}>{item.title}</p>
                    </div>
                </div>
            </div>
        })
    }

    componentDidMount = () => {
        //Đây là phương thức có sẵn của component tự động thực thi sau khi render được gọi, lưu ý: componentDidmount chỉ chạy 1 lần đầu tiên sau khi render thực thi
        // <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.4.1/js-cloudimage-360-view.min.js"></script>

        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js';

        document.querySelector('#appendScript').appendChild(tagScript);
    }

    state = {
        carCurrent: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./Bài tập chọn xe nâng cao/images/icons/icon-black.jpg",
            "srcImg": "images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "images-black/images-black-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "images-black/images-black-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "images-black/images-black-3/"
                }
            ]
        },
    }

    componentDidUpdate = () => {
        //Hàm này chạy sau khi state thay đổi (Tự kích hoạt sau render)
        //Lưu ý: Không được phép setState tại component này vì infinity loop

        //clean ảnh cũ
        document.querySelector('#carCurrent').innerHTML = '';

        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-responsive/lazysizes.min.js?v4.1.6';

        //clear script cũ trước khi append script mới của thư viện vào
        document.querySelector('#appendScript').innerHTML = "";
        document.querySelector('#appendScript').appendChild(tagScript);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='model'>
                            <div
                                id='carCurrent'
                                style={{ minWidth: '856px' }}
                                className="cloudimage-360"
                                data-folder={"./Bài tập chọn xe nâng cao/images/" + this.state.carCurrent.srcImg}
                                data-filename-x="civic-{index}.jpg"
                                data-amount-x={8} />
                        </div>
                        <div id='appendScript'>

                        </div>
                        <div className="card text-left mt-2 bg-light">
                            <h3 className='card-hearder ml-4'>Exterior color</h3>
                            <table className="table border-light" border='1'>
                                <tr>
                                    <th>trinhgsgsdagasgasdgasdg</th>
                                    <th>trinhgsd</th>
                                </tr>
                                <tr>
                                    <th>trinhgsdgdsgsdagsad</th>
                                    <th>trinhgsd</th>
                                </tr>
                                <tr>
                                    <th>trinhgsgádgasdgsadgasdd</th>
                                    <th>trinhgsd</th>
                                </tr>
                            </table>

                        </div>

                    </div>
                    <div className='col-5'>
                        <div className="card bg-light">
                            <p className='card-header text-primary' style={{ textAlign: 'left', textSize: '30px' }}>Exterior color</p>
                            <div className="card-body pl-3 pr-4 pt-2 pb-2">
                                {this.renderIcon()}
                            </div>
                        </div>
                        <div className="card bg-light mt-1">
                            <p className='card-header' style={{ textAlign: 'left', textSize: '33px', textColor: 'black', fontWeight: '600' }}>Wheels</p>
                            <div className="card-body pl-1 pr-2 pt-1 pb-1">
                                {this.renderWheels()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
