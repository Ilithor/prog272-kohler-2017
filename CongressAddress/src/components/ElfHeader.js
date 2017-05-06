/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import logo from '../images/imperialemblem.svg';
import '../css/index.css';

class ElfHeader extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to the Empire</h2>
                </div>
            </div>
        );
    }
}

export default ElfHeader;