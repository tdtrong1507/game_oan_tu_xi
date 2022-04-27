
const initialState = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false },
    ],
    ketQua: "I am inevitable !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computerInfo: { ma: 'bao', hinhAnh: './img/bao.png' }
}

const BaiTapOanTuXiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DAT_CUOC": {
            let mangDatCuocCapNhat = [...state.mangDatCuoc]
            // reset mảng đặt cược
            mangDatCuocCapNhat = mangDatCuocCapNhat.map((item, index) => {
                return { ...item, datCuoc: false }
            })

            // Tìm trạng thái đặt cược 
            let index = mangDatCuocCapNhat.findIndex((datCuoc) => {
                return datCuoc.ma === action.data.maCuoc
            })

            if (index !== -1) {
                mangDatCuocCapNhat[index].datCuoc = true
            }

            console.log("index", mangDatCuocCapNhat)
            state.mangDatCuoc = mangDatCuocCapNhat
            return { ...state }
        }
            break;

        case 'RAN_DOM': {

            const randomNumber = Math.floor(Math.random() * 3);
            state.computerInfo = state.mangDatCuoc[randomNumber]

            return { ...state }
        }

        case 'END_GAME': {
            let playerDatCuoc = state.mangDatCuoc.find(item => item.datCuoc === true)
            let computerDatCuoc = { ...state.computerInfo }

            switch (playerDatCuoc.ma) {
                case "keo": {
                    if (computerDatCuoc.ma === "keo") {
                        state.ketQua = "Hòa rồi !!!";
                    } else if (computerDatCuoc.ma === "bua") {
                        state.ketQua = "I am inevitable !!!";
                    } else {
                        state.ketQua = "I am Iron man !!!";
                        state.soBanThang += 1;
                    };
                };
                    break;
                case "bua": {
                    if (computerDatCuoc.ma === "keo") {
                        state.ketQua = "I am Iron man !!!";
                        state.soBanThang += 1;
                    } else if (computerDatCuoc.ma === "bua") {
                        state.ketQua = "Hòa rồi !!!";
                    } else {
                        state.ketQua = "I am inevitable !!!";
                    };
                };
                    break;
                case "bao": {
                    if (computerDatCuoc.ma === "keo") {
                        state.ketQua = "I am inevitable !!!";
                    } else if (computerDatCuoc.ma === "bua") {
                        state.ketQua = "I am Iron man !!!";
                        state.soBanThang += 1;
                    } else {
                        state.ketQua = "Hòa rồi !!!";
                    };
                };
                    break;

                default:
                    state.soBanThang += 1
                    return { ...state }
                    break;
            }
            state.soBanChoi += 1;
            console.log("playerDatCuoc", playerDatCuoc);
            return { ...state }
        }

        default: return { ...state }
            break;
    }
}

export default BaiTapOanTuXiReducer;