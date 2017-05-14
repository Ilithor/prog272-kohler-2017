/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import Address from './Address';
import AddressChanger from './AddressChanger';
import SmallNumbers from './SmallNumbers';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../css/App.css';

class ElfMenu extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className='App'>
                        <ul id='elfMenu'>
                            <li><Link to='/'>AddressShow</Link></li>
                            <li><Link to='/edit'>AddressEdit</Link></li>
                            <li><Link to='/small'>SmallNumbers</Link></li>
                        </ul>
                        <Route exact path='/' component={Address}/>
                        <Route path='/edit' component={AddressChanger}/>
                        <Route path='/small' component={SmallNumbers}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default ElfMenu;
