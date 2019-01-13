//During the test the env variable is set to test
//process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let db = require('../config/db');
let User = require('../models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
            done();
        });
    });
    /*
      * Test the /GET route
      */
    describe('/GET user notifications', () => {
        it('it should GET all the user notifications', (done) => {
            chai.request(server)
                .get('/api/user/5c3913a8bc26b63a36b74e15/notifications')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});