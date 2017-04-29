/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from "./AddressShow";

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

    render() {
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        )
    }
}

export default Address;
