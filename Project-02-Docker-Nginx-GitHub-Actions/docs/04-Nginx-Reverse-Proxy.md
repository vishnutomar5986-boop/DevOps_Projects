# Nginx Reverse Proxy

## Objective

Use Nginx as a reverse proxy in front of the Dockerized Node.js application.

## Architecture

```text
Internet
   |
   | HTTP :80
   v
Nginx
   |
   | Reverse Proxy
   v
127.0.0.1:3000
   |
   v
Docker Container
   |
   v
Node.js / Express
