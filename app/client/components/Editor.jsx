import React from 'react';
import { hot } from 'react-hot-loader'

class Editor extends React.Component{

    constructor(props){
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF'
        }



    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }


    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        // this.setState({ text: '', title: '', color: '#FFFFFF' });
    }







    render(){
        return(
            <div id="wb_Editor_contrainer">
                <div id="Editor_contrainer">
                    <div className="row">
                        <div className="col-1">
                            <div id="wb_Editor_title">
                                <span id="wb_uid8">Добавить одежду</span>
                            </div>
                            <div id="wb_Editor_block">
                                <div id="Editor_block">
                                    <div className="row">
                                        <div className="col-1">
                                            <input type="text" id="title" name="title"
                                                   value={this.state.title}
                                                   onChange={this.handleTitleChange}
                                                   placeholder="&#1044;&#1086;&#1073;&#1072;&#1074;&#1080;&#1090;&#1100; &#1090;&#1072;&#1081;&#1090;&#1083;" />
                                                <textarea name="Text" id="text" rows="4" cols="147"
                                                          value={this.state.text}
                                                          onChange={this.handleTextChange}
                                                 placeholder="&#1044;&#1086;&#1073;&#1072;&#1074;&#1080;&#1090;&#1100; &#1090;&#1077;&#1082;&#1089;&#1090;" />
                                                <input type="submit" onClick={this.handleNoteAdd}
                                                        disabled ={!this.state.text}
                                                       id="Button1" name="button" value="Добавить" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(module)(Editor);