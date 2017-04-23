import React from 'react';
import Address from '../components/Address';
import addresses from '../address-list';
import { shallow } from 'enzyme';

describe('React Jest Suite', function () {



    it('renders and displays the default first name', () => {
        console.log(addresses[0]);
        const wrapper = shallow(<Address addressList={addresses}/>);
        this.state = addresses[0];
        const welcome = (<p className="App-intro">
            firstName: {this.state.firstName}
        </p>);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        this.state = addresses[0];
        const welcome = <p className="App-intro">
            lastName: {this.state.lastName}
        </p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default home', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        this.state = addresses[0];
        const welcome = <p className="App-intro">
            home: {this.state.home}
        </p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        this.state = addresses[0];
        const welcome = <p className="App-intro">
            city: {this.state.city}
        </p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default planet', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        this.state = addresses[0];
        const welcome = <p className="App-intro">
            planet: {this.state.planet}
        </p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default sector', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        this.state = addresses[0];
        const welcome = <p className="App-intro">
            sector: {this.state.sector}
        </p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.find('button.setAddress').simulate('click');
        for (var variable in addresses[1]) {
            addresses[1][variable] = <Address addresses={addresses}/>;
        }
    });
});

/**
 * Created by bcuser on 4/22/17.
 */
