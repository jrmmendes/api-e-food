import request from 'supertest';

import app from '../src/config/app';

test('Server should be running with response 200  ', async () => {
  const res = await request(app).get('/');

  expect(res.status).toBe(404);
});
