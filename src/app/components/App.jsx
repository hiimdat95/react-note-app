import React, { Component } from 'react'
import './App.css';
import * as firebase from 'firebase';
import firebaseConnect from "../../firebaseConnect";


class App extends Component {
    pushData = () => {
        var connectData = firebase.database().ref('dataForNote');
        connectData.push({
            title: "Ghi chu so 3",
            content: "Noi dung ghi chu so 3"
        })
    }
    deleteData = (id) => {
        var connectData = firebase.database().ref('dataForNote');
        connectData.child(id).remove(); 
    }

    render() {
        console.log(firebaseConnect);
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={() => this.pushData() }>Add new note</button>
                <hr/>
                <button onClick={() => this.deleteData('-LMCH6xUw_1Ouy6cSWs8') }>Delete new note</button>
            </div>
        );
    }
}
export default App;
