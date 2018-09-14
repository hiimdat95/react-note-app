import { noteData } from '../../firebaseConnect';

var redux = require('redux');
const noteinitialState = {
    isEdit: false,
    editItem:{}, 
    isAdd:false,
    alertShow: false,
    alertContent: '',
    alertType:'info'
}

const allReducer = (state = noteinitialState, action) => {
    switch (action.type) {

        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log('Add data ' + action.getItem+ ' thanh cong');
            return state

        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }

        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd, editItem: {} }

        case "GET_EDIT_DATA":
            return { ...state, editItem:action.editObject }

        case "EDIT":
            //update du lieu len firebase
            noteData.child(action.getItem.id).update({
                title: action.getItem.title,
                content: action.getItem.content
            })
            console.log('Edit success');
            return { ...state, editItem:{} }

        case "DELETE":
            noteData.child(action.deleteId).remove();
            console.log('Delete success');
            return state;

        case "ALERT_ON":
            return {...state, alertShow: true, alertContent: action.alertContent, alertType: action.alertType};
        
        case "ALERT_OFF":
            return {...state, alertShow: false};
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;
