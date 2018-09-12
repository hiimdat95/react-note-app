import React, { Component } from 'react';

class NoteForm extends Component {
    render() {
        return (
            <div className="col-4">
                <h3>SỬA NỘI DUNG NOTE</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea type="text" className="form-control" name="noteContent" id="noteTitle"
                        />


                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>

        );
    }
}

export default NoteForm;