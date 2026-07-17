# Project 02 - Docker, Nginx & GitHub Actions CI/CD Pipeline

## Overview

This project demonstrates how to automate the deployment of a Dockerized Node.js application to a Linux cloud server using GitHub Actions.

The objective is to build a simple Continuous Integration and Continuous Deployment (CI/CD) pipeline where every push to the `main` branch automatically deploys the latest version of the application to an Oracle Cloud Infrastructure (OCI) Virtual Machine.

The deployment uses Docker for containerization, Nginx as a reverse proxy, GitHub Actions for automation, and SSH for secure remote deployment.

---

## Project Goals

- Deploy a Node.js application using Docker
- Configure Nginx as a reverse proxy
- Automate deployments with GitHub Actions
- Secure deployment using SSH keys and GitHub Secrets
- Document every step of the implementation

---

## Technology Stack

- Node.js
- Docker
- Nginx
- GitHub Actions
- Git
- Linux (Ubuntu)
- Oracle Cloud Infrastructure (OCI)

---

## Project Status

🚧 In Progress

This project is being developed incrementally. Each phase is documented and committed separately to demonstrate the complete development process.

---

## Planned Directory Structure

```
Project-02-Docker-Nginx-GitHub-Actions/
│
├── app/
├── docs/
├── nginx/
├── scripts/
├── screenshots/
├── .github/
│   └── workflows/
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md
```

---

## Documentation

Detailed implementation guides will be added to the `docs/` directory as the project progresses.

---

## Learning Objectives

By completing this project, I aim to gain practical experience with:

- Docker containerization
- Reverse proxy configuration
- CI/CD pipelines
- GitHub Actions workflows
- Linux server administration
- Production deployment practices
