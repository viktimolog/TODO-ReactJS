import React, {Component} from 'react';
import Note from './Note';
import TODOItem from "../classes/TODOItem"

export default class TODOShow extends Component {

    state = {
        text: ''
    }

    componentDidMount(){
        this.itemInput.focus();
    }

    componentDidUpdate(){
        this.itemInput.focus();
    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    handleAddItem = () => {
        if (this.state.text !== '') {
            this.props.controller.addItem(new TODOItem(this.state.text, false));
            this.resetState();
        }
    }

    resetState() {
        this.setState({
            text: ''
        });
    }

    update=()=>{
        this.forceUpdate();
    }

    render() {
        const {
            controller
        } = this.props;

        return (
            <div>
                {
                    controller.TODOList.map(TODOItem =>
                        <Note
                            item={TODOItem}
                            controller={this.update}
                        >
                        </Note>
                    )
                }

                <input
                    ref={(input) => { this.itemInput = input; }}
                    type="text"
                    size="80"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />

                <input
                    type="submit"
                    onClick={this.handleAddItem}
                    value="Add"
                />
            </div>
        );
    }
}