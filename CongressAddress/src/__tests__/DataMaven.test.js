/**
 * Created by bcuser on 5/21/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import DataMaven from '../components/DataMaven';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(true, 'DataMaven.test.js');

describe('DataMaven Suite', function() {

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

    it('renders DataMaven component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DataMaven />, div);
    });

    it('renders and displays a BrowserRouter', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper);
        let router = wrapper.find('BrowserRouter');
        //console.log(router);
        expect(router.length).toEqual(1);
    });

    it('renders and displays at least one Route', () => {
        const wrapper = shallow(<DataMaven />);
        elfDebug.getAll(wrapper);
        let router = wrapper.find('Route');
        expect(router.length).toBeGreaterThan(0);
    });

    it('renders and displays the ElfHeader', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper, false);
        let router = wrapper.find('ElfHeader');
        expect(router.length).toEqual(1);
    });

    it('renders and displays the ElfMenu', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper, false);
        let router = wrapper.find('ElfMenu');
        expect(router.length).toEqual(1);
    });
});
