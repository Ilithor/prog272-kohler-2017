/**
 * Created by bcuser on 4/17/17.
 */
import React from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressEdit from "./AddressEdit";
import Address from './Address';

class AddressChanger extends Address {

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
            </div>
        );
    }
}

export default AddressChanger;
