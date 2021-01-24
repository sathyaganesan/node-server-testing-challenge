// build your `/api/projects` router here
const express = require("express");
const Project = require("../project/model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const project = await Project.findProject()
        res.json(project)
    } catch (err) {
        next(err);
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const project = await Project.findProjectById(req.params.id)
        if (!project) {
            return res.status(404).json({
                Message: "Project with specific Id doesn't exsist"
            })
        }
        res.json(project);
    } catch (err) {
        next(err);
    }
})


router.get("/:id/task", async (req, res, next) => {
    try {
        const getTask = await Project.getTasksByProjectId(req.params.id)
        res.json(getTask);
    } catch (err) {
        next(err);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const [project] = await Project.addProject(req.body)
        res.status(201).json(project)
    } catch (err) {
        next(err);
    }
})

router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    const change = req.body;
    try {
        const editProject = await Project.updateProject(change, id)
        res.status(201).json(editProject);
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        //this condition not responding
        if (!req.params.id) {
            res.status(404).json({
                Message: "Project with specific id doesn't exsists."
            })
        } else {
            await Project.removeProject(req.params.id)
            res.status(201).json({
                Message: "Selected Project got successfully deleted"
            })
        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;