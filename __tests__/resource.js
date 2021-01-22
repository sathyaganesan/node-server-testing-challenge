const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

afterAll(async () => {
    await dbConfig.destroy() // close the database connection
})

describe("Resource integration testing", () => {
    it("gets a list of resources", async () => {
        const res = await supertest(server).get("/api/resource")
        expect(res.body.length).toBe(6);
    })
})