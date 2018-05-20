import supertest from 'supertest';
import {app} from '../index.js';

describe('Users API unit test', function () {
    this.timeout(120000);

    it('should return collection of JSON documents', function (done) {
        // calling home page api
        supertest(app)
            .get('/api/users')
            .expect('Content-type', /json/)
            .expect(200) // This is the HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                done();
            });
    });

    it('should register a user', function (done) {
        supertest(app)
            .post('/api/users')
            .query({action: 'register'})
            .send({username: 'User 4', password: 'Password 4'})
            .expect('Content-type', /json/)
            .expect(201)
            .end(function (err, res) {
                res.status.should.equal(201);
                done();
            });
    });

    it('should authenticate a user', function (done) {
        supertest(app)
            .post('/api/users')
            .send({username: 'User 1', password: 'Password 1'})
            .expect('Content-type', /json/)
            .expect(201)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.token.substring(0, 3).should.equal('BEA');
                done();
            });
    });
});