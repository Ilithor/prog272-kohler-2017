/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import logo from '../images/imperialemblem.svg';
import {Jumbotron} from 'react-bootstrap';

class ElfHeader extends Component {

    render() {
        return (
            <div className='App'>
                <Jumbotron>
                    <div className='App-header'>
                        <img src={logo} className='App-logo' alt='logo'/>
                        <h2>Welcome to the Empire</h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default ElfHeader;
