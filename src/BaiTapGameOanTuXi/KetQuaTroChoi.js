import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        const { ketQua, soBanThang, soBanChoi } = this.props
        return (
            <div>
                <div className='display-3 text-warning'>{ketQua}</div>
                <div className='display-4 text-success' >BẠN THẮNG: <span className='text-warning'>{soBanThang}</span></div>
                <div className='display-4 text-success'> SỐ BÀN CHƠI: <span className='text-warning'>{soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.BaiTapOanTuXiReducer.ketQua,
        soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
        soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
    }
}


export default connect(mapStateToProps)(KetQuaTroChoi)