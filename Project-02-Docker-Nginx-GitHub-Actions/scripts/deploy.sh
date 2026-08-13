#!/bin/bash

set -e

IMAGE="vishnutomar5986/project-02-docker-nginx-github-actions:latest"
CONTAINER="project02-container"

echo "========================================="
echo "Starting Project 02 deployment"
echo "========================================="

echo "[1/5] Pulling latest Docker image..."
docker pull "$IMAGE"

echo "[2/5] Stopping existing container..."

if docker ps -q --filter "name=^${CONTAINER}$" | grep -q .; then
    docker stop "$CONTAINER"
else
    echo "No running container found."
fi

echo "[3/5] Removing existing container..."

if docker ps -aq --filter "name=^${CONTAINER}$" | grep -q .; then
    docker rm "$CONTAINER"
else
    echo "No existing container found."
fi

echo "[4/5] Starting new container..."

docker run -d \
    --name "$CONTAINER" \
    --restart unless-stopped \
    -p 127.0.0.1:3000:3000 \
    "$IMAGE"

echo "[5/5] Verifying deployment..."

sleep 5

if curl -fsS http://localhost:3000/health; then
    echo
    echo "========================================="
    echo "Deployment successful!"
    echo "========================================="
else
    echo
    echo "========================================="
    echo "Deployment verification failed!"
    echo "========================================="
    exit 1
fi
