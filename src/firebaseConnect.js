import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC2rEwScpcdcwTr-oqyHyxNlE3xQRXhkec",
    authDomain: "react-node-98bb2.firebaseapp.com",
    databaseURL: "https://react-node-98bb2.firebaseio.com",
    projectId: "react-node-98bb2",
    storageBucket: "react-node-98bb2.appspot.com",
    messagingSenderId: "438853971802"
};


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

var data = firebase.database().ref('dataForNote/note2');
    data.once('value').then(function(snapshot){
        console.log(snapshot.val());
    }) 
// data.set({
//     id:1,
//     titleNote:"Tieu de ghi chu 2 (edited)",
//     contentNote:"Noi dung ghi chu 2 (edited)"
// })
 