//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
require('dotenv').config({ path: require('path').resolve(__dirname, '../config/vars/'+process.env.NODE_ENV+'.env') });

const db = require('../config/db');
const User = require('../models/user');
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
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.deleteMany({}, (err) => {
            done();
        });
    });

    /**
     * Test the /GET /api/user/:id/notifications
     */
    describe('/GET user notifications', () => {
        it('it should GET all the user notifications', (done) => {
            let firstName = faker.name.firstName();
            let lastName = faker.name.lastName();
            let userData = {
                "username": firstName+lastName,
                "email" : faker.internet.email(),
                "fullName": firstName + ' ' + lastName,
                "phone": faker.phone.phoneNumber('01#########'),
                "language": faker.locale,
                "deviceType": Math.floor(Math.random()* [1,2,3].length),
                "userType": Math.floor(Math.random()* [1,2].length),
            };
            User.create(userData).then(function (user) {
                oneSignalService.createClient(user).then(function (playerId) {
                    User.findByIdAndUpdate(
                        {_id: user._id},
                        {'playerId': playerId.data.id},
                        {new: true, useFindAndModify: false}
                    ).then(function (user) {
                        chai.request(server)
                            .get('/api/user/'+user._id+'/notifications')
                            .end((err, res) => {
                                res.should.have.status(HttpStatus.OK);
                                res.body.should.be.a('array');
                                done();
                            });
                    });
                });

            });
        });
    });

    /**
     * Test the /POST /api/user/register
     */
    describe('/POST user', () => {
        it('it should create new user', (done) => {
            let firstName = faker.name.firstName();
            let lastName = faker.name.lastName();
            let user = {
                "username": firstName+lastName,
                "email" : faker.internet.email(),
                "fullName": firstName + ' ' + lastName,
                "phone": faker.phone.phoneNumber('01#########'),
                "language": faker.locale,
                "deviceType": Math.floor(Math.random()* [1,2,3].length),
                "userType": Math.floor(Math.random()* [1,2].length),
            };
            chai.request(server)
                .post('/api/user/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(HttpStatus.CREATED);
                    done();
                });
        });
    });
});