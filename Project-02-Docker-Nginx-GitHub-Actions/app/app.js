const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Project 02 - Docker, Nginx & GitHub Actions</h1>
        <p>Application is running successfully.</p>
        <p>Built as part of my DevOps Portfolio.</p>
    `);
});

// Health Check Route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "Project-02-Docker-Nginx-GitHub-Actions"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
