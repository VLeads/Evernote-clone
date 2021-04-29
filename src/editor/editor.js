import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { render } from '@testing-library/react';

class EditorComponent extends React.Component {
    constructor() {
        // constructor is calling super
        super();
        this.state = {
        text: '',
        title:'',
        id: ''
        };
    }
//componentDidMount is called after the first render in dom
    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        });
    }
//componentDidUpdate is called when there is any change/update in the dom
    componentDidUpdate= () => {
        if(this.props.selectedNote.id !== this.state.id) { this.setState({
            //above if statement means, suppose we have selected a note already in sidebar. And we are clicking it again, then it will not be again re-rendered. 
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        });
    }
    }

    render() {

        const { classes } = this.props;

        return(
        <div className={classes.editorContainer}>
            <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
            <input
                className={classes.titleInput}
                placeholder='Note title...'
                value={this.state.title ? this.state.title : ''}
                onChange={(e) => this.updateTitle(e.target.value)}>
            </input>
            <ReactQuill
                value={this.state.text}
                onChange={this.updateBody}
            >
            </ReactQuill>
        </div>);
    }
    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    };
    updateTitle = async (txt) => {
        await this.setState({ title: txt });
        this.update();
    }
    update = debounce(() => {
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500); //1500ms= 1.5sec. when user stop typing for 1.5s, written text get added to database.
}

export default withStyles(styles)(EditorComponent);