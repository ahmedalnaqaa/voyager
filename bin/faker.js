const faker = require('faker');
const axios = require('axios');

for (let i = 1; i <= 3; i++) {
    const APP_URL = process.env.APP_URL + ':' + process.env.PORT;
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    axios.post('http://127.0.0.1:3000/api/user/register', {
        "username": firstName+lastName,
        "email" : faker.internet.email(),
        "fullName": firstName + ' ' + lastName,
        "deviceType": Math.floor(Math.random()* [0, 1, 5].length),
        "userType": Math.floor(Math.random()* [1,2].length),
        "phone": faker.phone.phoneNumber('01#########'),
        "language": faker.locale
    }).then((res) => {
        //console.log(`statusCode: ${res.statusCode}`);
        //console.log(res)
    }).catch((error) => {
        console.error(error)
    });
}