/**
 * Created by bcuser on 5/7/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import {mount} from 'enzyme';
import '../css/index.css';
import AddressShow from '../components/AddressShow';

describe('AddressShow mount Suite', function() {

    let quiet = true;
    let address = {};
    const unknown = 'unknown';

    /*
     * @param {object} wrapper - Container for a bunch of HTML nodes
     * @param {number} index - Index of HTML element.
     * @param {boolean} talkToMe - Speak even if quiet is true
     */

    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    it('see if true is true', () => {
        expect(true).toBe(true);
    });

    it('renders without our App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddressShow />, div);
    });

    beforeEach(function() {
        address = addresses[0];
    });

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const welcome = <p className='App-intro'>{name}</p>;
        wrapper.find('button#setAddress').simulate('click');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFirstAddressTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const welcome = <p className='App-intro'>{name}</p>;
        wrapper.find('button#firstAddress').simulate('click');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickLastAddressTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const welcome = <p className='App-intro'>{name}</p>;
        wrapper.find('button#lastAddress').simulate('click');
        console.log(welcome);
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the updated first name', () => {
        afterClickFieldTest('firstName: ' + unknown, 1);
    });

    it('renders and displays the updated last name', () => {
        afterClickFieldTest('lastName: Palpatine', 1);
    });

    it('renders and displays the updated home', () => {
        afterClickFieldTest('home: Imperial Throne', 1);
    });

    it('renders and displays the updated city', () => {
        afterClickFieldTest('city: Imperial City', 1);
    });

    it('renders and displays the updated planet', () => {
        afterClickFieldTest('planet: Imperial Center (Coruscant)', 1);
    });

    it('renders and displays the updated sector', () => {
        afterClickFieldTest('sector: Imperial Sector', 1);
    });

    it('renders and displays first address in array', () => {
        afterClickFirstAddressTest('lastName: Palpatine', 1);
    });

    it('renders and displays last address in array', () => {
        afterClickLastAddressTest('lastName: N/A', 5);
    });
});

/**
 * Created by bcuser on 4/22/17.
 */
