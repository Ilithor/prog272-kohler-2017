import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import { mount } from 'enzyme';
import '../css/index.css';

describe('Address mount Suite', function() {

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
        const wrapper = mount(<Address address={address} />);
        const welcome = <p className='App-intro'>{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    it('renders and displays the default first name', () => {
        console.log(addresses);
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

    /*for (var variable in addressList[1]) {
        it.only('renders button click message', () => {
            const wrapper = shallow(<Address addressList={addressList}/>);
            wrapper.find('button.setAddress').simulate('click');
            addressList[1][variable] = <Address addressList={addressList}/>;
            expect(wrapper.contains(addressList)).toEqual(true);
        });
    }*/
});

/**
 * Created by bcuser on 4/22/17.
 */
