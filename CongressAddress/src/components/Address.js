/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import {
    getByIndex
} from '../assets/elf-local-storage';
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();
import Logger from '../assets/elf-logger';
const logger = new Logger();


class Address extends Component {
    constructor(props) {
        super(props);
        logger.log('Constructor called');

        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
        });

        this.addressIndex = 0;
        //this.saveAddress(addresses);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = getByIndex[this.addressIndex];
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
        const address = getByIndex[this.addressIndex];

        this.setState({
            address: address
        });
    };

    onAddressChange = (event) => {
        //detailLogger.log('onAddressChange called with', event.target.id);
        if (event.target.id.startsWith('dec')) {
            if (this.addressIndex > 0) {
                this.addressIndex -= 1;
            }
        } else {
            if (this.addressIndex < this.addressCount) {
                this.addressIndex += 1;
            }
        }
        //detailLogger.log('addressIndex', this.addressIndex);
        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        });
    };

    onAddressNext = (event) => {
        this.addressIndex++;
        if (this.addressIndex >= addresses.length) {
            this.addressIndex = 1;
        }
        const address = getByIndex[this.addressIndex];

        this.setState({
            address: address
        });
    };

    onAddressChangeLast = (event) => {
        this.addressIndex = 5;
        const address = getByIndex[this.addressIndex];

        this.setState({
            address: address
        });
    };

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
