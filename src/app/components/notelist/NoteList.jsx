import React, { Component } from 'react';
import NoteItem from '../noteitem/NoteItem'
import { noteData } from '../../../firebaseConnect';
class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount = () => {
        noteData.on('value', (notes) => {
            var arrayNote = [];
            notes.forEach(element => {
                const key = element.key;
                const title = element.val().title;
                const content = element.val().content;
                arrayNote.push({
                    key: key,
                    title: title,
                    content: content
                })
            });
            this.setState({
                dataFirebase: arrayNote
            })
        })
    }


    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteItem
                        key={key}
                        index={key}
                        note={value}
                        title={value.title}
                        content={value.content}
                    />
                )
            })
        }
    }
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {
                        this.getData()
                    }
                    {/* <NoteItem />
                    <NoteItem />
                    <NoteItem /> */}
                </div>
            </div>
        );
    }
}

export default NoteList;