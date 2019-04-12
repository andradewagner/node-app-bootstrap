const { TestHelper } = require('oi-node-api-framework');
const supertest = require('supertest');
const { server } = require('../../../../../app');

describe('Cliente', () => {
    before(() => {
        TestHelper.before();
    });

    after(() => {
        TestHelper.after();
        server.close();
    });

    it('Deve retornar 404 caso não encontre um cliente por nome', (done) => {
        supertest(server)
            .get('/minhaoi-consumo-backend/cliente/Diogo')
            .set('x-origin-application', 'minhaoi-consumo-backend')
            .set('x-origin-channel', 'teste-unitario')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImxvZ2luIjoiZGlvZ28ubGVpdGFvQG9pLm5ldC5iciIsInBlcmZpbCI6ImFkbWluIn0sImlhdCI6MTUxMDQ1NTg3MX0.q8ZxxZ893JGi490N0FAFrFAaNNl6TDloagprfMBUDNo')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err) => {
                if (err) throw err;
                done();
            });
    });
});
