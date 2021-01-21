// build your `Project` model here
const db = require("../../data/dbConfig");

function findProject() {
    return db("project");
}

function findProjectById(id) {
    return db("project")
        .where("id", id)
        .first()
}

function addProject(proj) {
    return db("project")
        .insert(proj)
        .into("project")
}

function getTasksByProjectId(id) {
    return db("project")
        .leftJoin("task", "project_id", "project.id")
        .where("project_id", id)
    .select("project.id", "project.name as Project_name", "task.name as Task_name")
}

module.exports = {
    findProject,
    findProjectById,
    addProject,
    getTasksByProjectId
}
