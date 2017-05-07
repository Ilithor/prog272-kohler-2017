import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import { shallow } from 'enzyme';

describe('Header Test', function () {



    it('see if true is true', () => {
        expect(true).toBe(true);
    });

    it('renders without our App component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ElfHeader />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to the Empire</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});

