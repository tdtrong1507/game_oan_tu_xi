import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {

        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
          }`

        return (
            <div>
                <style>
                    {keyframe}
                </style>

                <div className='theThink' style={{ position: 'relative', overflow: 'hidden' }}>
                    <img className='mt-2'
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: "translateX(-50%)",
                            animation: `randomItem${Date.now()} 0.5s`,
                            width: 75,
                            height: 75
                        }}
                        src={this.props.computerInfo.hinhAnh}
                        alt={this.props.computerInfo} />

                </div>
                <div className='speech-bubble'>
                </div>
                <img style={{ width: 150, height: 150, marginTop: 20 }} src='./img/playerComputer.png' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computerInfo: state.BaiTapOanTuXiReducer.computerInfo
    }
}


export default connect(mapStateToProps)(Computer)