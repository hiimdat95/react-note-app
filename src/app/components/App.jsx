import React, { Component } from 'react'
import './App.css';
import NoteForm from './noteform/NoteForm';
import NoteList from './notelist/NoteList';
import Nav from './nav/Nav';
import { connect } from 'react-redux'

class App extends Component {
    showForm = () => {
        if (this.props.isEdit) {
            return <NoteForm />
        }
    }

    render() {
        return (
            <div >
                <Nav />
                <div className="container">
                    <div className="row">
                        <NoteList />
                        {
                            this.showForm()
                        }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
