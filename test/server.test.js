const request = require('supertest');

const app = require('../src/config/app');

test('Server should be running with response 200  ', async () => {
  const res = await request(app).get('/');

  expect(res.status).toBe(200);
});
