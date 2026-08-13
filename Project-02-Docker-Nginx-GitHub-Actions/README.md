# Project 02 - Docker, Nginx & GitHub Actions CI/CD Pipeline

## Overview

This project demonstrates an automated CI/CD pipeline for deploying a containerized Node.js application to an Ubuntu Virtual Machine hosted on Oracle Cloud Infrastructure (OCI).

The pipeline automatically builds the Docker image, pushes it to Docker Hub, connects securely to the OCI VM using SSH, pulls the latest image, replaces the running container, and verifies the deployment through a health-check endpoint.

Nginx is used as a reverse proxy so that external HTTP traffic reaches the Node.js application running inside the Docker container.

---

## Architecture

```text
Developer
    |
    | git push
    v
GitHub Repository
    |
    | GitHub Actions
    v
+-----------------------------+
| CI/CD Pipeline              |
|                             |
| 1. Checkout repository      |
| 2. Login to Docker Hub      |
| 3. Build Docker image       |
| 4. Push image               |
| 5. Configure SSH            |
| 6. Deploy to OCI VM         |
| 7. Verify deployment        |
+-------------+---------------+
              |
              | SSH
              v
       OCI Ubuntu VM
              |
              v
       Docker Container
        Node.js App
        127.0.0.1:3000
              ^
              |
         Nginx :80
              |
              v
          HTTP Client
