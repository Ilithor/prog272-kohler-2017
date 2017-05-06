import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import { shallow } from 'enzyme';

describe('React Jest Suite', function () {



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

