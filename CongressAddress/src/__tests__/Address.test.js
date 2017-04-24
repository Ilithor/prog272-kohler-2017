import React from 'react';
import Address from '../components/Address';
import addresses from '../address-list';
import { shallow } from 'enzyme';

describe('React Jest Suite', function () {

    const unknown = "unknown";

    it('renders and displays the default first name', () => {
        console.log(addresses[0]);
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = unknown;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the updated first name', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.find('button.setAddress').simulate('click');
        const welcome = "unknown";
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = unknown;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the updated last name', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.find('button.setAddress').simulate('click');
        const welcome = "Palpatine";
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default home', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = unknown;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the updated home', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.find('button.setAddress').simulate('click');
        const welcome = "Imperial Throne";
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = unknown;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the updated city', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.find('button.setAddress').simulate('click');
        const welcome = "Imperial City";
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default planet', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = unknown;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the updated planet', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.find('button.setAddress').simulate('click');
        const welcome = "Imperial Center (Coruscant)";
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default sector', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = unknown;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the updated sector', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.find('button.setAddress').simulate('click');
        const welcome = "Imperial Sector";
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    /*for (var variable in addresses[1]) {
        it.only('renders button click message', () => {
            const wrapper = shallow(<Address addressList={addresses}/>);
            wrapper.find('button.setAddress').simulate('click');
            addresses[1][variable] = <Address addresses={addresses}/>;
            expect(wrapper.contains(addresses)).toEqual(true);
        });
    }*/
});

/**
 * Created by bcuser on 4/22/17.
 */
