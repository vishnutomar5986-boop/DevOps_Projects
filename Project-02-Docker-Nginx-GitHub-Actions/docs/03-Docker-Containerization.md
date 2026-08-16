# Docker Containerization

## Objective

Containerize the Node.js application so it can be packaged and deployed consistently across environments.

## Dockerfile

The application uses the official Node.js 24 Alpine image.

The Docker build process:

1. Uses Node.js 24 Alpine as the base image.
2. Creates `/usr/src/app` as the working directory.
3. Copies `package.json` and `package-lock.json`.
4. Installs dependencies using `npm ci`.
5. Copies the application source code.
6. Exposes application port `3000`.
7. Starts the application using `npm start`.

## Build the Docker Image

From the Project 02 directory:

```bash
cd Project-02-Docker-Nginx-GitHub-Actions
docker build -t project-02-docker-nginx-github-actions .
