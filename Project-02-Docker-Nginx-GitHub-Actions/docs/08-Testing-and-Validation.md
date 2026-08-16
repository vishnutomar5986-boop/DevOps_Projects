# Testing and Validation

## Objective

This document validates the complete Project 02 deployment after implementing:

- Node.js / Express
- Docker
- Nginx
- Docker Hub
- SSH-based deployment
- GitHub Actions
- OCI Ubuntu VM

The purpose of this validation is to confirm that every individual component works correctly and that the complete CI/CD deployment flow works from source code change to production deployment.

---

# 1. Application Validation

Before testing Docker or Nginx, the Node.js application must be working correctly.

The application exposes two primary endpoints:

| Endpoint | Purpose |
|----------|---------|
| `/` | Application homepage |
| `/health` | Application health check |

The `/health` endpoint is particularly important because it is used to verify that the application is running correctly after deployment.

---

## Test Application Health

Run:

```bash
curl http://127.0.0.1:3000/health
