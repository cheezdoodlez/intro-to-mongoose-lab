const prompt = require('prompt-sync')();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const customer = require('./model/customer')

mongoose.connect(process.env.MONGODB_URI)
console.log('Connected :3')

const menu = [
    { id: '1', option: 'Create customer' },
    { id: '2', option: 'View customer ' },
    { id: '3', option: 'Update customer' },
    { id: '4', option: 'Delete customer' },
    { id: '5', option: 'EXIT' }
];

async (displayMenu) => {

}
console.log('Welcome to the Customer Relationship Management system (CRM) :3')

5
menu.forEach(item => {
    console.log(item.id, item.option);
})


const userPrompt = prompt('Which option would you like to choose?:');
const userChoice = menu.find(item => item.id === userPrompt);


if (userChoice) {
    const allUsers = customerData.find()
    console.log(customerData.name, customerData.age)
}
else {
    console.log('Invalid entry silly, please select another choice.')
}


/*/ This was my attempt, I got stuck and
 moved on to other labs to keep up with 
 content and never came back to figure 
 out how to proceed/*/ 
