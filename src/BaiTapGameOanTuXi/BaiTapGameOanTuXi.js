import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapGameOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

class BaiTapGameOanTuXi extends Component {
    render() {
        return (
            <div className='gameOanTuXi container-luid p-0'>
                <div className='row text-center mt-4 mx-0'>
                    <div className='col-3'>
                        <Player />
                    </div>

                    <div className='col-6 p-0'>
                        <KetQuaTroChoi />
                        <button onClick={() => { this.props.playGame() }} style={{ fontSize: 20 }} className='btn btn-success p-2 mt-3'>Play Game</button>
                    </div>

                    <div className='col-3'>
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let action = {
                type: 'RAN_DOM'
            }

            let randomComputerItem = setInterval(() => {
                dispatch(action)
                count++;
                if (count > 15) {
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: 'END_GAME',
                    })
                }


            }, 100)
        }
    }

}


export default connect(null, mapDispatchToProps)(BaiTapGameOanTuXi)