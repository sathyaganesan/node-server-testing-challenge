const db = require("../../data/dbConfig");

function projectResource(id) {
    return db("project_resource")
        .where("project_id", id)
        .leftJoin("resource", "resource_id", "resource.id")
        .leftJoin("project", "project_id", "project.id")
        .select("project.id", "project.name as Project_name", "resource.name as Resource_name")
}

module.exports = {
    projectResource
}