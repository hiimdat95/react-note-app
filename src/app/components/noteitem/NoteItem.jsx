import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id="note1">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#noteList" aria-expanded="true" aria-controls="noteContent1">
                {this.props.noteTitle}
              </a>
              <div className="btn-group float-right">
                    <button className="btn btn-outline-info"> Sửa </button>
                    <button className="btn btn-outline-secondary"> Xoá </button>
              </div>
            
            </h5>
          </div>
          <div className="collapse in" role="tabpanel" aria-labelledby="note1">
                  <div className="card-body">
                  </div>
                </div>
          </div>
        );
    }
}

export default NoteItem;