import { noteData } from '../../firebaseConnect';

var redux = require('redux');
const noteinitialState = {
    isEdit: false,
    editItem:{}
}

const allReducer = (state = noteinitialState, action) => {
    switch (action.type) {

        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log('Add data ' + action.getItem+ ' thanh cong');
            return state

        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }

        case "GET_EDIT_DATA":
            console.log('Add data ' + action.editObject+ ' thanh cong');
            return { ...state, editItem:action.editObject }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;
