/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';

class AddressEdit extends Component {

    log(message, message2 = '', message3 = '') {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    render() {
        this.log('SHOW ADDRESS RENDER');
        return (
            <div id='addressShowRender' className='App'>
                <input
                    id='elfFirstName'
                    className='App-intro'
                    value={this.props.address === undefined ? '' : this.props.address.firstName}
                    onChange={this.props.onNameChange}
                />
                <input
                    id='elfLastName'
                    className='App-intro'
                    value={this.props.address === undefined ? '' : this.props.address.lastName}
                    onChange={this.props.onNameChange}
                />
                <input
                    id='elfHome'
                    className='App-intro'
                    value={this.props.address === undefined ? '' : this.props.address.home}
                    onChange={this.props.onNameChange}
                />
                <input
                    id='elfCity'
                    className='App-intro'
                    value={this.props.address === undefined ? '' : this.props.address.city}
                    onChange={this.props.onNameChange}
                />
                <input
                    id='elfPlanet'
                    className='App-intro'
                    value={this.props.address === undefined ? '' : this.props.address.planet}
                    onChange={this.props.onNameChange}
                />
                <input
                    id='elfSector'
                    className='App-intro'
                    value={this.props.address === undefined ? '' : this.props.address.sector}
                    onChange={this.props.onNameChange}
                />
                <button id='showAddress' onClick={this.props.onAddressChange}>Show Address
                </button>
                <button id='firstAddress' onClick={this.props.onAddressChangeFirst}>First Address
                </button>
                <button id='nextAddress'  onClick={this.props.onAddressNext}>Next Address
                </button>
                <button id='lastAddress' onClick={this.props.onAddressChangeLast}>Last Address
                </button>
            </div>
        );
    }
}

export default AddressEdit;
