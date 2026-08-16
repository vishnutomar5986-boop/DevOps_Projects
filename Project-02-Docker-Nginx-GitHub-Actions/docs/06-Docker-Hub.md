# Docker Hub Image Registry

## Objective

Use Docker Hub as the container image registry between GitHub Actions and the OCI deployment server.

## Image Flow

```text
GitHub Actions
      |
      | docker build
      v
Docker Image
      |
      | docker push
      v
Docker Hub
      |
      | docker pull
      v
OCI VM
      |
      v
Docker Container
