# GitHub Actions CI/CD Pipeline

## Objective

Automate the build and deployment process whenever changes are pushed to the `main` branch.

## Pipeline Flow

```text
Developer
   |
   | git push
   v
GitHub Repository
   |
   v
GitHub Actions
   |
   +--> Checkout Repository
   |
   +--> Login to Docker Hub
   |
   +--> Build Docker Image
   |
   +--> Push Image to Docker Hub
   |
   +--> Configure SSH
   |
   +--> Connect to OCI VM
   |
   +--> Run deploy.sh
   |
   +--> Pull Latest Docker Image
   |
   +--> Replace Existing Container
   |
   +--> Health Check
   |
   v
Deployment Complete
