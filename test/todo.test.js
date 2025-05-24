const { expect } = require('chai');
const request = require('supertest');
const app = require('../index');

describe('TODO API', () => {
  it('GET /todos should return empty array', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(0);
        done();
      });
  });

  it('POST /todos should add a new todo', (done) => {
    request(app)
      .post('/todos')
      .send({ task: 'Test task' })
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.have.property('task', 'Test task');
        done();
      });
  });
}); 