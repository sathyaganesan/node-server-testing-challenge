const supertest = require("supertest");
const server = require("../api/server");
const dbConfig = require("../data/dbConfig");

beforeEach(async () => {
    await dbConfig.seed.run();
})

afterAll(async () => {
    await dbConfig.destroy() // close the database connection
})

describe("Project Integration tests", () => {

    it("gets a list of projects", async () => {
        const res = await supertest(server).get("/api/projects")
        // For authorization purpose
        // .set("Authorization", token)
        expect(res.type).toBe("application/json");
        expect(res.body.length).toBe(3);
        expect(res.body[0].name).toBe("carpenting");
    })

    it("gets project by ID", async () => {
        const res = await supertest(server).get("/api/projects/2")
        expect(res.body.id).toBe(2);
        expect(res.type).toBe("application/json");
        expect(res.body.name).toBe("Plumbing");
    })

    it("Create the new project", async () => {
        const res = await supertest(server)
            .post("/api/projects")
        .send({name: "Electrical", description: "Fix all the wiring and switch"})
        expect(res.type).toBe("application/json");
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Electrical")
    })
})