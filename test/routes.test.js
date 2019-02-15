require('dotenv').config()

const request = require('supertest');
const server = require('../server/index.js');

beforeAll(async () => {
  console.log('Starting Integration tests...');
});

afterAll(() => {
  server.close();
});

describe('Integration tests', () => {
  test('get pokemon abilities GET /pokemon/:name', async () => {
    const name = 'ditto';
    const response = await request(server).get(`/pokemon/${name}`);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe(name);
    expect(response.body).toHaveProperty('abilities');
  });

  test('should not get pokemon abilities GET /pokemon/:name', async () => {
    const name = 'Random';
    const response = await request(server).get(`/pokemon/${name}`);
    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty('message');
  });
});
