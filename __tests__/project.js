const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

afterAll(async () => {
    await dbConfig.destroy() // close the database connection
})

describe("Project Integration tests", () => {
    it("gets a list of projects", async () => {
        const res = await supertest(server).get("/api/projects")
        expect(res.type).toBe("application/json");
        expect(res.body.length).toBe(3);
        expect(res.body[0].name).toBe("carpenting")
    })

    it("gets project by ID", async () => {
        const res = await supertest(server).get("/api/projects/2")
        expect(res.body.id).toBe(2);
        expect(res.body.name).toBe("Plumbing");
    })
})