/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';

class Address extends Component {
    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        this.addressIndex=0;
        const address = addresses[this.addressIndex];
        this.state = {
            address: address

        };
        this.quiet = true;
    }


    log=(message, message2 = '', message3 = '') => {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    };

    onAddressChange = (event) => {
        this.addressIndex = 1;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    onNameChange = (event) => {
        this.log("ON NAME CHANGE");
        const address = addresses[this.addressIndex];
        switch (event.target.id) {
            case 'elfImage':
                address.image = event.target.value;
                break;
            case 'elfFirstName':
                address.firstName = event.target.value;
                break;
            case 'elfLastName':
                address.lastName = event.target.value;
                break;
            case 'elfHome':
                address.home = event.target.value;
                break;
            case 'elfCity':
                address.city = event.target.value;
                break;
            case 'elfPlanet':
                address.planet = event.target.value;
                break;
            case 'elfSector':
                address.sector = event.target.value;
                break;
            default:
                throw new Error('OH NO BAD CASE in Address onNameChange');
        }
        this.setState({
            address: address
        })
    };

    render() {
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        )
    }
}

export default Address;
