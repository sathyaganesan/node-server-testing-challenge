// build your server here
const express = require("express");
const cors = require("cors");
const Project = require("./project/router");
const Resource = require("./resource/router");
const Task = require("./task/router");
const ProjectResource = require("./project_resource/router")

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/projects", Project);
server.use("/api/resource", Resource);
server.use("/api/task", Task);
server.use("/api/projectresource", ProjectResource);
server.get("/", async (req, res, next) => {
    try {
        res.status(200).json({
            Message: "Welcome to Our Project"
        })
    } catch (err) {
        next(err);
    }
})

server.use((err, req, res, next) => {
    console.log(err);
    try {
        res.status(500).json({
            Message: "Something went wrong"
        })
    } catch (err) {
        next(err);
    }
    
});

module.exports = server;