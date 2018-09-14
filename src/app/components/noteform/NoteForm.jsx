import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: ''
        }
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        if (this.props.editItem) {//edit case
            this.setState({
                title: this.props.editItem.title,
                content: this.props.editItem.content,
                id: this.props.editItem.id
            });
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }


    addData = (title, content) => {
        if (this.state.id) {//edit case
            var editObject = {};
            editObject.id = this.state.id;
            editObject.title = this.state.title;
            editObject.content = this.state.content;

            this.props.editDataStore(editObject);
            this.props.changeEditStatus();
            this.props.alertOn("Edit note success", "success");    
        }
        else {
            var item = {};
            item.title = title;
            item.content = content;
            // this.props.getData(item);

            this.props.addDataStore(item);//use reducer trong store
            this.props.alertOn("Add note success", 'info');

        }
    }

    printTitle = () => {
        
        if (this.props.addStatus) {
            return (
                <h3>ADD NEW NOTE</h3>
            )
        }
        else {
            return (
                <h3>EDIT NOTE</h3>
            )
        }
    }
    componentWillReceiveProps(){
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
    }
    render() {
        console.log(this.props.editItem);
        return (
            <div className="col-4">
                {
                    this.printTitle()
                }
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input value={this.props.editItem.title} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="title" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea value={this.props.editItem.content} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="content" id="noteContent" aria-describedby="helpIdNoteTitle" placeholder="Nội dung note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.title, this.state.content)} className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>

        );
    }
}
//prop.editItem
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({ type: "ADD_DATA", getItem });
        },
        editDataStore: (getItem) => {
            dispatch({ type: "EDIT", getItem });
        },
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        alertOn: (alertContent, alertType) => {
            dispatch({
                type: "ALERT_ON",
                alertContent,
                alertType
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);