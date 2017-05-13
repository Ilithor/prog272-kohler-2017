/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import {
    saveToLocalStorage,
    clearLocalStorage,
    getLocalStorage
} from '../assets/elf-local-storage';


class Address extends Component {
    constructor(props) {
        super(props);

        this.addressIndex = 0;
        //this.saveAddress(addresses);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = addresses[this.addressIndex];
        /*addresses.forEach(function(address) {
         saveToLocalStorage(address);
         });*/
        this.state = {
            address: address

        };
        this.quiet = true;
    }


    log = (message, message2 = '', message3 = '') => {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    };

    onAddressChangeFirst = (event) => {
        this.addressIndex = 1;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    onAddressChange = (event) => {
        if (this.addressIndex !== 0) {
            return
        }
        this.addressIndex = 1;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    onAddressNext = (event) => {
        this.addressIndex++;
        if (this.addressIndex >= addresses.length) {
            this.addressIndex = 1;
        }
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };

    onAddressChangeLast = (event) => {
        this.addressIndex = 5;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        });
    };
    66

    render() {
        if (!this.quiet) {
            console.log("ADDRESS RENDER");
        }
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onAddressNext={this.onAddressNext}
                    onAddressChangeFirst={this.onAddressChangeFirst}
                    onAddressChangeLast={this.onAddressChangeLast}
                />
            </div>
        )
    }
}

export default Address;
