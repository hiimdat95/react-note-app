import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {
  twoActionButton = () => {
    this.props.changeEditStatus();//action 
    //ham lay noi dung truyen trong store, de store update du lieu --action 2
    
    this.props.getEditData(this.props.note);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header" role="tab" id="note1">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.index} aria-expanded="true" aria-controls="noteContent1">
              {this.props.title}
            </a>
            <div className="btn-group float-right">
              <button className="btn btn-outline-info" onClick={() => this.twoActionButton()}>Edit</button>
              <button className="btn btn-outline-secondary">Delete</button>
            </div>
          </h5>
        </div>
        <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby="note1">
          <div className="card-body">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    },
    getEditData: (editObject) => {
      dispatch({
        type: "GET_EDIT_DATA",
        editObject
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)