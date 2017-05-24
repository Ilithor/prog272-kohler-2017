/**
 * Created by bcuser on 5/21/17.
 */
import React, {Component} from 'react';
import Address from './Address';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();
import {
    getByIndex
} from '../assets/elf-local-storage';

class DataMaven extends Component {
    constructor(props) {
        super(props);

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
        if (this.addressIndex >= getByIndex.length) {
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

    onNameChange = (event) => {
        this.log("ON NAME CHANGE");
        let address = getByIndex[this.addressIndex];
        console.log(address);
        switch (event.target.id) {
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
        return (
            <Router>
                <div>
                    <ElfHeader/>
                    <ElfMenu/>
                    <Route exact path='/' render={(props) => (
                        <Address {...props}
                                 address={this.state.address}
                                 onAddressChange={this.onAddressChange}
                                 onAddressNext={this.onAddressNext}
                                 onAddressChangeFirst={this.onAddressChangeFirst}
                                 onAddressChangeLast={this.onAddressChangeLast}
                        />
                    )}/>
                    <Route path='/edit' render={(props) => (
                        <AddressEdit {...props}
                                     address={this.state.address}
                                     onAddressChange={this.onAddressChange}
                                     onNameChange={this.onNameChange}
                        />
                    )}/>
                    <Route path='/small' component={SmallNumbers}/>
                </div>
            </Router>
        );
    }
}

export default DataMaven;
