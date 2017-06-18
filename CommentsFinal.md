# Final

Review of the Final Projects.

## General Comments

You had a good start to your quarter, but your final was not strong. You learned about and showed knowledge of:

- Linux basics
- Git and branches
- Parsing and working with JSON data stored in arrays and objects.
- React
- React Native
- Heroku
- Test Driven Development
- Rest calls to a server (**CongressAddress** and/or **CongressNative** talks to **CongressServer**)
- Database connectivity with Mongo DB

For what it is worth, my estimation of you as a developer is much higher than what I saw toward the end of this quarter. To get the final into better condition would not have been hard, in my opinion.

For instance, you needed to copy address-list.json into the public folder of **AddressServer**. We talked about this in class several times.

You are a good student who just didn't have a very good quarter.


## Core Programs

- CongressAddress runs but does not work
- CongressServer runs but cannot insert data in the database
  - You call /alll-data when it is /all-data
- CongressNative loads but gets a red screen.
- Heroku runs but has the broken implementation mentioned above.

## Data

- CongressAddress does talk to CongressServer but you don't have data in the database  
- CongressServer does not talk correctly to MongoDb  
- Congress Address looks reasonable on the phone. A bit lopsided, but doesn't really work.
- LocalStorage does not work because we don't load data
- Edit Data
  - Does not  work.

Overall, this just doesn't make sense to me. Why didn't you go back a few versions and turn in something that worked? You have much better commits than this one. I would say I am looking at the wrong commit, but I see the same thing on Heroku.


## Heroku

This loaded smoothly but does not work properly

## React Native

I could not get this to work properly.

## Testing

```
Test Suites: 3 failed, 4 passed, 7 total
Tests:       16 failed, 26 passed, 42 total
```

This could have been better.

## Other

My **OnNameChange**, for handling edits, ended up looking like this:

```javascript
onNameChange(event) {
    logger.log('on name change');
    const address = getByIndex(this.state.addressIndex);
    switch (event.target.id) {
        case 'elfFN':
            address.firstName = event.target.value;
            break;
        case 'elfLN':
            address.lastName = event.target.value;
            break;
        default:
            address.zip = 'OH NO BAD CASE';
    }
    saveByIndex(address, this.state.addressIndex);
    this.setState({
        address: address
    });
};
```

The code shown above is incomplete in that it only handles first and last names, but it does handle the first and last names correctly.

This code from **DataMaven** is the client side code that allowed me to save the changes to the server:

```javascript
dbAddressSave() {
    const address = getByIndex(this.state.addressIndex);
    const url = '/update' +
        '?id=' + address._id +
        '&address=' + JSON.stringify(address);
    fetch(url)
        .then((data) => data.json())
        .then(function(data) {
            logger.log(JSON.stringify(data, null, 4));
        }).catch(function(err) {
            const message = 'Either could not insert ' +
                'data or could not display ' +
                'results after inserting data\n';
            alert(message + err);
            logger.log(err);
        });
}
```

## Summary

Assignments 92.29
Midterm: 96
Final: 82
Participation: 98
Total: 90.41

That's an B+ for the quarter.
