import React, { Component } from 'react';
import logo from '../images/imperialemblem.svg';
import '../css/App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            nine: '0',
        }
    }
    getNine = () => {
        console.log('state');
        this.setState({nine: '9'})
    };
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to the Empire</h2>
                </div>
                <p className="App-intro">
                    Nine: {this.state.nine}
                </p>
                <button className="elf" onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
}

export default App;
