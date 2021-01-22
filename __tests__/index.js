const supertest = require("supertest");
const server = require("../api/server");

test("GET /", async () => {
    const res = await supertest(server).get("/")
    console.log(res)
})