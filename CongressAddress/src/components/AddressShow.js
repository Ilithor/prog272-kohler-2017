/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        console.log('ADDRESS PROPS', typeof this.props);

    }

    log(message, message2 = '', message3 = '') {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    getAddressBlock = () => {
        if (this.props.address) {
            return <div>

                <p className='App-intro'>
                    firstName: {this.props.address === undefined ? '' : this.props.address.firstName}
                </p>
                <p className='App-intro'>
                    lastName: {this.props.address === undefined ? '' : this.props.address.lastName}
                </p>
                <p className='App-intro'>
                    home: {this.props.address === undefined ? '' : this.props.address.home}
                </p>
                <p className='App-intro'>
                    city: {this.props.address === undefined ? '' : this.props.address.city}
                </p>
                <p className='App-intro'>
                    planet: {this.props.address === undefined ? '' : this.props.address.planet}
                </p>
                <p className='App-intro'>
                    sector: {this.props.address === undefined ? '' : this.props.address.sector}
                </p>

            </div>;
        } else {
            return <p className='App-intro'>
                No Address Given
            </p>;
        }
    }

    render() {
        this.log('SHOW ADDRESS RENDER');
        return (
            <div id='addressShowRender' className='App'>
                {this.getAddressBlock}
                <button id='setAddress' onClick={this.props.onAddressChange}>Show Address
                </button>
                <button id='firstAddress' onClick={this.props.onAddressChangeFirst}>First Address
                </button>
                <button id='nextAddress' onClick={this.props.onAddressNext}>Next Address
                </button>
                <button id='lastAddress' onClick={this.props.onAddressChangeLast}>Last Address
                </button>
            </div>
        );
    }
}

export default AddressShow;
