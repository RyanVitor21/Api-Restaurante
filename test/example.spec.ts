import { expect, test, it, beforeAll, afterAll } from "vitest";
import { app } from "../app";
import request from "supertest";

beforeAll(async () => {
    await app.ready()
});

afterAll(async () => {
    await app.close()
});

it('Test description', async () => {
    const response = await request(app.server)
        .post('/restaurant')
        .send({
            
        });

    // Verifique o código de status
    expect(response.status).toBe(200);

    // Verifique o corpo da resposta ou outras propriedades conforme necessário
});

