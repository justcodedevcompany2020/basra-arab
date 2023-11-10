const initialState = {
    data: {},
};
export const AddMsgReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'AddMsgAction':
            temp.data = action.data
            break;
        default:
            return temp;
    }
    return temp;
} 