//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

require('dotenv').config({ path: require('path').resolve(__dirname, '../config/vars/'+process.env.APP_ENV+'.env') });

const db = require('../config/db');
const User = require('../models/user');
const Notification = require('../models/notification');
const HttpStatus = require('http-status-codes');
const faker = require('faker');
const notificationService = require('../services/notification');
const oneSignalService = require('../services/onesignal');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Notifications', () => {
    beforeEach((done) => { //Before each test we empty the database
        Notification.deleteMany({}, (err) => {
            done();
        });
    });

    /**
     * Test the /POST /api/notification/send
     */
    describe('/POST notification', () => {
        it('it should create and send notification', (done) => {
            let firstName = faker.name.firstName();
            let lastName = faker.name.lastName();
            let userData = {
                "username": firstName+lastName,
                "email" : faker.internet.email(),
                "fullName": firstName + ' ' + lastName,
                "phone": faker.phone.phoneNumber('01#########'),
                "language": faker.locale,
                "deviceType": 5,
                "userType": Math.floor(Math.random()* [1,2].length),
            };
            User.create(userData).then(function (user) {
                oneSignalService.createClient(user).then(function (playerId) {
                    User.findByIdAndUpdate(
                        {_id: user._id},
                        {'playerId': playerId.data.id},
                        {new: true, useFindAndModify: false}
                    ).then(function (user) {
                        let notificationData ={
                            "notificationType": Math.floor(Math.random()* [1,2].length),
                            "message": 'hello',
                            "users": [user._id]
                        };
                        chai.request(server)
                            .post('/api/notification/send')
                            .send(notificationData)
                            .end((err, res) => {
                                res.should.have.status(HttpStatus.CREATED);
                                done();
                            });
                    });
                });

            });
        });
    });
});