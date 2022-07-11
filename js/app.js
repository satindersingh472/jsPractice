let customer_name = `robber alert`;
let account_balance = 0;
let is_active = true;
if (account_balance >= 1000) {
    console.log(`The account balance is ${account_balance}`);
} else {
    console.log(`${customer_name} has not enough money`);
}
if (account_balance >= 5000) {
    console.log(`The account balance is atleast 5000`);
} else {
    console.log(`Not enough balance`);
}
if (account_balance >= 10000) {
    console.log(`The balance is above 10000 for third time check`);
} else {
    console.log(`The balance is not above 10000`);
}
if (is_active === false && account_balance >= 1) {
    console.log(`There is an error in the system`);

} else {
    console.log(`All good`);
}
if ((customer_name === `robber alert` && account_balance > 0) || (customer_name === `robber alert` && is_active === true)) {
    console.log(`Robber Alert`);
}

let customer_object = {
    name: `sam`,
    total_balance: 200,
    is_active: true
}
if (customer_object[`total_balance`] < 5000) {
    console.log(`error`);
}
let customer = [{
    name: `nav`,
    total_balance: 300,
    is_active: false
},

{

    name: `jag`,
    total_balance: 6600,
    is_active: true
},

{

    name: `gary`,
    total_balance: 400,
    is_active: true
}
];

let counter = 0;
while (counter < customer.length) {
    if (customer[counter][`is_active`] === true) {
        console.log(`Name: ${customer[counter][`name`]}  and Account Balance :${customer[counter][`total_balance`]}`);
    }
    counter++;
}
let counter_for = 0;
for (counter_for < 0; counter_for < customer.length; counter_for++) {
    if (customer[counter_for][`is_active`] === true) {
        console.log(`Name: ${customer[counter_for][`name`]}  and Account Balance :${customer[counter_for][`total_balance`]}`);
    }
}