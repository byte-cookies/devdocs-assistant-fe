#!/bin/zsh

# 스크립트 실행 중 오류가 발생하면 즉시 중단
set -e

CONTAINER_NAME="devdocs-assistant-fe"
IMAGE_NAME="devdocs-assistant-fe"

# 실행 중인 컨테이너 중지 및 제거
echo "Stopping and removing existing container..."
if [ "$(docker ps -q -f name=^/${CONTAINER_NAME}$)" ]; then
    docker stop "${CONTAINER_NAME}"
fi
if [ "$(docker ps -aq -f name=^/${CONTAINER_NAME}$)" ]; then
    docker rm "${CONTAINER_NAME}"
fi

# Docker 시스템 캐시 정리 (사용하지 않는 모든 리소스 및 빌드 캐시 포함)
echo "Pruning Docker system cache..."
docker system prune -a -f

# 새 Docker 이미지 빌드
echo "Building new Docker image..."
docker build -t "${IMAGE_NAME}" .

# 새 Docker 컨테이너 실행
echo "Starting new Docker container..."
docker run -d -p 3000:3000 --name "${CONTAINER_NAME}" "${IMAGE_NAME}"

echo "Docker container '${CONTAINER_NAME}' has been restarted successfully."
