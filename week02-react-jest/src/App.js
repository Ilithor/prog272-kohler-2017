import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            nine: '0',
            firstName: 'unknown',
            lastName: 'unknown',
            home: 'unknown',
            city: 'unknown',
            planet: 'unknown',
            sector: 'unknown'
        }
    }
    getNine = () => {
        console.log('state');
        this.setState({nine: '9'})
    };
    setAddress = () => {
        this.setState({
            image: <img src={require("./palpatineelectionposter.jpg")} alt="Emperor Palpatine" />,
            firstName: 'Unknown',
            lastName: 'Palpatine',
            home: 'Imperial Throne',
            city: 'Imperial City',
            planet: 'Imperial Center (Coruscant)',
            sector: 'Imperial Sector'
        })
    };
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Prog272</h2>
                </div>
                <p className="App-intro">
                    {this.state.image}
                </p>
                <p className="App-intro">
                    Nine: {this.state.nine}
                </p>
                <p className="App-intro">
                    firstName: {this.state.firstName}
                </p>
                <p className="App-intro">
                    lastName: {this.state.lastName}
                </p>
                <p className="App-intro">
                    home: {this.state.home}
                </p>
                <p className="App-intro">
                    city: {this.state.city}
                </p>
                <p className="App-intro">
                    planet: {this.state.planet}
                </p>
                <p className="App-intro">
                    sector: {this.state.sector}
                </p>
                <button className="elf" onClick={this.getNine}>Get Nine</button>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default App;
