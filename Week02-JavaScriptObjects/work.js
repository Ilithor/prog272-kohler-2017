var person = {
	firstName: 'Daryk',
	lastName: 'Kohler',
	fullName: function(){'use strict';
		return this.firstName + ' ' + this.lastName;
	}
};

var calculator = {
	operator01: -1,
	operator02: -1,
	addMe: function(){'use strict';
		return this.operator01 + this.operator02;},
	subtractMe: function(){'use strict';
		return this.operator01 - this.operator02;}
};

calculator.multiplyMe = function() {
	return this.operator01 * this.operator02;
};

calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

divider('Person');
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
divider('Calculator');
console.log('operator01 =', calculator.operator01);
console.log('operator02 =',calculator.operator02);
console.log('Add: ', calculator.addMe());
console.log('Subtract: ', calculator.subtractMe());
console.log('Multiply: ', calculator.multiplyMe());
