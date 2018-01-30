import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TODOShow from "./components/TODOShow";
import TODOItem from "./classes/TODOItem"

class App extends Component {
    constructor() {
        super();

        this.state = {

            controller: {
                TODOList: [new TODOItem("Establish the addition of new tasks in the TODO List", false)
                    , new TODOItem("Prevent adding empty elements", false)
                    , new TODOItem("Move the focus on the input of a new task at startup", true)
                    , new TODOItem("Implement the function of the task complete", false)]

                , addItem: function (item) {
                    this.TODOList = [...this.TODOList, item]
                }
            }
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO List</h1>
                </header>

                <TODOShow
                    controller={this.state.controller}
                />

            </div>
        );
    }
}
export default App;
