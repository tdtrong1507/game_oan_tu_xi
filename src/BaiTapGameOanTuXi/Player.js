import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    renderMangDatCuoc = () => {
        return this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
                border = { border: "3px solid orange" }
            }

            return <div key={index} className='col-4 p-0'>
                <button onClick={() => { this.props.datCuoc(item.ma) }} style={border} className='btnItem'>
                    <img style={{ width: 35, height: 35 }} src={item.hinhAnh} />
                </button>
            </div>
        })
    }

    render() {
        console.log("mangDatCuoc", this.props.mangDatCuoc)
        return (
            <div>
                <div className='theThink'>
                    <img className='mt-2' style={{ width: 75, height: 75 }}
                        src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
                    />

                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150, marginTop: 20 }} src='./img/player.png' />



                <div className='container px-5'>
                    <div className='row px-5'>
                        {this.renderMangDatCuoc()}
                        {/* <div className='col-4 p-0'>
                            <button onClick={() => { this.props.datCuoc("bao") }} className='btnItem'>
                                <img style={{ width: 35, height: 35 }} src />
                            </button>
                        </div>
                        <div className='col-4 p-0 '>
                            <button onClick={() => { this.props.datCuoc("keo") }} className='btnItem'>
                                <img style={{ width: 35, height: 35 }} src='./img/keo.png' />
                            </button>
                        </div>
                        <div className='col-4 p-0'>
                            <button onClick={() => { this.props.datCuoc("bua") }} className='btnItem'>
                                <img style={{ width: 35, height: 35 }} src='./img/bua.png' />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            let action = {
                type: "DAT_CUOC",
                data: {
                    maCuoc
                }
            }

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)