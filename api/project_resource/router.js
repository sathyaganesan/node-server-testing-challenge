const express = require("express");

const ProjectResource = require("./model");
 
const router = express.Router();

router.get("/:id", async (req, res, next) => {
    try {
        const projectresource = await ProjectResource.projectResource(req.params.id)
        res.json(projectresource);
    } catch (err) {
        next(err);
    }
   
})

module.exports = router;