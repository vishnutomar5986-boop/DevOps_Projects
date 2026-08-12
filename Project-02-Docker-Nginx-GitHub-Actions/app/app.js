const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Project 02 - CI/CD Deployment v2</h1>
        <h2>Docker + Nginx + GitHub Actions</h2>
        <p>✅ Application successfully deployed through the CI/CD pipeline.</p>
        <p>🔄 This is version 2.0 of the application.</p>
        <p>Built as part of my DevOps Portfolio.</p>
    `);
});

// Health Check Route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "Project-02-Docker-Nginx-GitHub-Actions",
        version: "2.0"
    });
});

// Version Route
app.get("/version", (req, res) => {
    res.status(200).json({
        version: "2.0",
        deployment: "GitHub Actions CI/CD",
        application: "Project-02-Docker-Nginx-GitHub-Actions"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
