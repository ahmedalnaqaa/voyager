const faker = require('faker');
const axios = require('axios');

console.log(1);
for (let i = 1; i <= 3; i++) {
    console.log(2);
    const APP_URL = process.env.APP_URL + ':' + process.env.PORT;
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    console.log(2);
    axios.post('http://127.0.0.1:3000/api/user/register', {
        "username": firstName+lastName,
        "email" : faker.internet.email(),
        "fullName": firstName + ' ' + lastName,
        "phone": faker.phone.phoneNumber('01#########'),
        "language": faker.locale
    }).then((res) => {
        //console.log(`statusCode: ${res.statusCode}`);
        //console.log(res)
    }).catch((error) => {
        console.error(error)
    });
    console.log(3);
}