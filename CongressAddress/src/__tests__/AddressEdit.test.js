/**
 * Created by bcuser on 5/7/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import {mount} from 'enzyme';
import '../css/index.css';
import AddressEdit from '../components/AddressEdit';

describe('AddressEdit mount Suite', function() {

    // http://stackoverflow.com/a/32911774/253576
    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});

    });

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
        ReactDOM.render(<AddressEdit />, div);
    });

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const welcome = <p className='App-intro'>test</p>;
        wrapper.find('button#setAddress').simulate('click');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(false);
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
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    beforeEach(function() {
        address = addresses[0];
    });

    it('renders and tests if firstName has changed', () => {
        afterClickFieldTest('firstName: ' + unknown, 1);
    });

    it('renders and tests if lastName has changed', () => {
        afterClickFieldTest('lastName: Palpatine', 1);
    });

    it('renders and tests if home has changed', () => {
        afterClickFieldTest('home: Imperial Throne', 1);
    });

    it('renders and tests if city has changed', () => {
        afterClickFieldTest('city: Imperial City', 1);
    });

    it('renders and tests if planet has changed', () => {
        afterClickFieldTest('planet: Imperial Center (Coruscant)', 1);
    });

    it('renders and tests if sector has changed', () => {
        afterClickFieldTest('sector: Imperial Sector', 1);
    });

    it('renders and tests if first name has changed', () => {
        afterClickFirstAddressTest('lastName: Palpatine', 1);
    });

    it('renders and tests if first name has changed', () => {
        afterClickLastAddressTest('lastName: N/A', 5);
    });

});

/**
 * Created by bcuser on 4/22/17.
 */
