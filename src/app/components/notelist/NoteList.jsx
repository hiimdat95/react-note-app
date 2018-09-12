import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div>
                <div className="col">
                    <div id="noteList" role="tablist" aria-multiselectable="true">
                        <div className="card">
                            <div className="card-header" role="tab" id="note1">
                                <h5 className="mb-0">
                                    <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                        Ghi chu ngay 31/03/2018
                                    </a>
                                </h5>
                            </div>
                            <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facere doloribus ut deleniti asperiores, rem cupiditate neque suscipit, mollitia veniam, natus iusto. Similique saepe laboriosam non ducimus ex, beatae facere.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" role="tab" id="note2">
                                <h5 className="mb-0">
                                    <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                                        Ghi chu ngay 1/4/2018
                                    </a>
                                </h5>
                            </div>
                            <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="note2">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facere doloribus ut deleniti asperiores, rem cupiditate neque suscipit, mollitia veniam, natus iusto. Similique saepe laboriosam non ducimus ex, beatae facere.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteList;