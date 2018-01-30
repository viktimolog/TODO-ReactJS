import React, {Component} from 'react';

export default class Note extends Component {

    changeCheckbox = () => {
        this.props.item.changeStyle();
        this.props.controller();
    }

    render() {
        const {
            item,
            controller
        } = this.props;
        return (
            <div>
                <input type="checkbox"
                       checked={item.checked}
                       onChange={this.changeCheckbox}
                />
                <label style={item.style}>{item.note}</label>
            </div>
        );
    }
}