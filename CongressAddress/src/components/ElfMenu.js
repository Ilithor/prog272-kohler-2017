/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import '../css/App.css';

class ElfMenu extends Component {
    render() {
        return (
            <div>
                <div className='App'>
                    <ul id='elfMenu'>
                        <li><Link to='/'>AddressShow</Link></li>
                        <li><Link to='/edit'>AddressEdit</Link></li>
                        <li><Link to='/small'>SmallNumbers</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ElfMenu;
