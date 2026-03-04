const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "..", "data", "projects.json");

router.get("/projects", async (req, res) => {
  try {
    const rawData = await fs.readFileSync(dataPath, "utf-8");
    const data = JSON.parse(rawData);

    const projects = data.projects.filter((p) => p.status === true);

    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/projects/:id", (req, res) => {
  try {
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const data = JSON.parse(rawData);

    const project = data.projects.find((p) => p.id === req.params.id);

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
