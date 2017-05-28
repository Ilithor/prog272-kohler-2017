/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import {Button} from 'react-bootstrap';

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
            return <form className='navbar-form' action=''>
                <div id='addressShowRender' className='row'>
                    <div className='col-sm-12'>

                        <p className='elf-p'>
                            firstName: {this.props.address === undefined ? '' : this.props.address.firstName}
                        </p>
                        <p className='elf-p'>
                            lastName: {this.props.address === undefined ? '' : this.props.address.lastName}
                        </p>
                        <p className='elf-p'>
                            home: {this.props.address === undefined ? '' : this.props.address.home}
                        </p>
                        <p className='elf-p'>
                            city: {this.props.address === undefined ? '' : this.props.address.city}
                        </p>
                        <p className='elf-p'>
                            planet: {this.props.address === undefined ? '' : this.props.address.planet}
                        </p>
                        <p className='elf-p'>
                            sector: {this.props.address === undefined ? '' : this.props.address.sector}
                        </p>

                    </div>
                </div>
            </form>;
        } else {
            return <p className='App-intro'>
                No Address Given
            </p>;
        }
    };

    render() {
        this.log('SHOW ADDRESS RENDER');
        return (
            <div id='addressShowRender' className='row'>
                {this.getAddressBlock}
                <Button
                    bsStyle='primary'
                    id='setAddress'
                    onClick={this.props.onAddressChange}>Show Address
                </Button>
                <Button
                    bsStyle='primary'
                    id='firstAddress'
                    onClick={this.props.onAddressChangeFirst}>First Address
                </Button>
                <Button
                    bsStyle='primary'
                    id='nextAddress'
                    onClick={this.props.onAddressNext}>Next Address
                </Button>
                <Button
                    bsStyle='primary'
                    id='lastAddress'
                    onClick={this.props.onAddressChangeLast}>Last Address
                </Button>
            </div>
        );
    }
}

export default AddressShow;
