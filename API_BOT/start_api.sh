#!/bin/bash

# Função para verificar e instalar o Docker
install_docker() {
    if ! command -v docker &> /dev/null; then
        echo "Docker não encontrado. Instalando Docker..."
        sudo apt update
        sudo apt install -y docker.io
        sudo systemctl start docker
        sudo systemctl enable docker
        echo "Docker instalado com sucesso."
    else
        echo "Docker já está instalado."
    fi
}

# Função para verificar e instalar o Docker Compose
install_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        echo "Docker Compose não encontrado. Instalando Docker Compose..."
        DOCKER_COMPOSE_VERSION="2.25.0"  # Defina a versão desejada
        sudo curl -L "https://github.com/docker/compose/releases/download/v${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
        echo "Docker Compose instalado com sucesso."
    else
        echo "Docker Compose já está instalado."
    fi
}


# Executa as funções de instalação
install_docker
install_docker_compose

# Inicializa Docker
docker-compose up -d