import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import {mount} from 'enzyme';
import '../css/index.css';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(false, 'Address.test.js');
jest.mock('whatwg-fetch');

describe('Address mount Suite', function() {

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
        ReactDOM.render(<Address />, div);
    });

    beforeEach(function() {
        address = addresses[0];
    });

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const welcome = <p className='App-intro'>{name}</p>;
        elfDebug.getElement(wrapper, 'div#addressShowRender');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName: ' + unknown, 0);
    });

    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName: ' + unknown, 0);
    });

    it('renders and displays the default home', () => {
        defaultFieldTest('home: ' + unknown, 0);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('city: ' + unknown, 0);
    });

    it('renders and displays the default planet', () => {
        defaultFieldTest('planet: ' + unknown, 0);
    });

    it('renders and displays the default sector', () => {
        defaultFieldTest('sector: ' + unknown, 0);
    });
});

/**
 * Created by bcuser on 4/22/17.
 */
