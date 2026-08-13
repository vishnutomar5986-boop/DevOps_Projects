const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Project 02 - CI/CD Deployment v3</h1>
        <h2>Docker + Nginx + GitHub Actions</h2>
        <p>✅ Version 3 successfully deployed automatically.</p>
        <p>🔄 CI/CD pipeline test completed.</p>
        <p>🐳 Docker container updated automatically.</p>
        <p>🌐 Nginx reverse proxy is working.</p>
        <p>Built as part of my DevOps Portfolio.</p>
    `);
});

// Health Check Route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "Project-02-Docker-Nginx-GitHub-Actions",
        version: "3.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
