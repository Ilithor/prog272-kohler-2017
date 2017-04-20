import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Address from '../components/Address';
import addresses from '../address-list';
import { shallow } from 'enzyme';

describe('React Jest Suite', function () {



    it('renders without our App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to Prog272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper);
        const welcome = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it.only('renders and displays the default first name', () => {
        console.log(addresses[0]);
        const wrapper = shallow(<Address addressList={addresses}/>);
        this.state=addresses[0];
        const welcome = (<p className="App-intro">
            firstName: {this.state.firstName}
        </p>);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    //for in loop
    //addresses[0][variable] each variable in list

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">lastName: Palpatine</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default home', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper);
        const welcome = <p className="App-intro">home: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">home: Imperial Throne</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper);
        const welcome = <p className="App-intro">city: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">city: Imperial City</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default planet', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper);
        const welcome = <p className="App-intro">planet: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">planet: Imperial Center (Coruscant)</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default sector', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper);
        const welcome = <p className="App-intro">sector: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">sector: Imperial Sector</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});

