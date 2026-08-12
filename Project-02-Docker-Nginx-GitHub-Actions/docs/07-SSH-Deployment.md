# SSH-Based Deployment

## Overview

GitHub Actions requires secure SSH access to the OCI Ubuntu VM in order to deploy the Docker application.

A dedicated ED25519 SSH key was created specifically for Project-02.

The deployment architecture is:

```text
GitHub Actions
      |
      | SSH
      v
OCI Ubuntu VM
      |
      v
root user
      |
      v
Docker deployment script
