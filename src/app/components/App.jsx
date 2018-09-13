import React, { Component } from 'react'
import './App.css';
import * as firebase from 'firebase';
import { noteData } from "../../firebaseConnect";
import NoteForm from './noteform/NoteForm';
import NoteList from './notelist/NoteList';
import Nav from './nav/Nav';


class App extends Component {
    constructor(props) {
        super(props);
        this.setState = {};
    }

    addData = (item) => {
        noteData.push(item);
    }

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
        noteData.once('value').then(function (snapshot) {
            console.log(snapshot.val());
        });
        console.log(noteData);
        return (
            <div >
                <Nav />
                <div className="container">
                    <div className="row">
                        <NoteList />
                        <NoteForm getData={(item) => this.addData(item)} />
                    </div>
                </div>
            </div>
            // <div className="App">
            //     <header className="App-header">
            //         <h1 className="App-title">Welcome to React</h1>
            //     </header>
            //     <button onClick={() => this.pushData()}>Add new note</button>
            //     <hr />
            //     <button onClick={() => this.deleteData('-LMCH6xUw_1Ouy6cSWs8')}>Delete new note</button>
            // </div>
        );
    }
}
export default App;
