import React from 'react';
import ReactDOM from 'react-dom';
import ElfMenu from './components/ElfMenu';
import ElfHeader from './components/ElfHeader';

ReactDOM.render(
    <div>
        <ElfHeader/>
        <ElfMenu/>
    </div>,
    document.getElementById('root')
);
