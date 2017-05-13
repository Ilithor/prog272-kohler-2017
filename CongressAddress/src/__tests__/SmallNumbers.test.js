import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/SmallNumbers';
import { shallow } from 'enzyme';

describe('Nine Test', function() {

    it('see if true is true', () => {
        expect(true).toBe(true);
    });

    it('renders without our App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper);
        const welcome = <p className='App-intro'>Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className='App-intro'>Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
/**
 * Created by bcuser on 4/22/17.
 */
