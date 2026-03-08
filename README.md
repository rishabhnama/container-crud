# 🐳 Container CRUD App

A full-stack CRUD application built with Node.js and containerized with Docker, featuring an automated CI/CD pipeline via GitHub Actions. This project serves as the **foundational blueprint** for containerizing web applications — the starting point of a three-stage DevOps progression.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Why This Project](#why-this-project)
- [The Three-Stage Progression](#the-three-stage-progression)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Run Locally (without Docker)](#run-locally-without-docker)
  - [Run with Docker](#run-with-docker)
- [CI/CD Pipeline](#cicd-pipeline)
- [Extending This Blueprint](#extending-this-blueprint)
- [Contributing](#contributing)

---

## Overview

This repository demonstrates how to take a full-stack web application — a Node.js backend with an HTML/CSS/JavaScript frontend — and containerize it using Docker. It then automates the build-and-push lifecycle using **GitHub Actions**, making it a self-contained, deployable unit right from the repository.

Core concepts covered:

- Writing a production-ready `Dockerfile` for a Node.js app
- Building and running multi-container setups
- Automating Docker image builds and pushes with GitHub Actions CI/CD
- Structuring a project so it can be seamlessly promoted to Kubernetes and Helm

---

## Why This Project

Most tutorials show you how to write an app *or* how to containerize it — rarely both, and almost never with automation. This project bridges that gap.

It answers a real question every developer faces early in their DevOps journey: **"I have a working app. Now how do I containerize it, ship it, and automate that process?"**

This repo is the answer to that question — minimal, clean, and structured as a blueprint you can fork and adapt for any Node.js application.

---

## The Three-Stage Progression

This project is **Stage 1** of a three-part series that takes the same CRUD app from a Docker container all the way to a production-grade Helm-managed Kubernetes deployment:

| Stage | Repository | What It Adds |
|-------|-----------|--------------|
| 🐳 **Stage 1** | [`container-crud`](https://github.com/rishabhnama/container-crud) *(this repo)* | Dockerize the app + GitHub Actions CI/CD |
| ☸️ **Stage 2** | [`kubernetes-crud`](https://github.com/rishabhnama/kubernetes-crud) | Deploy to Kubernetes with raw YAML manifests |
| ⎈ **Stage 3** | [`helmcrud`](https://github.com/rishabhnama/helmcrud) | Package as a Helm chart for reusable, versioned deployments |

Each stage builds directly on the last. You can follow the series end-to-end to understand the full containerization → orchestration → packaging workflow.

---

## Tech Stack

| Layer         | Technology               |
|---------------|--------------------------|
| Frontend      | HTML, CSS, JavaScript    |
| Backend       | Node.js                  |
| Containerization | Docker                |
| CI/CD         | GitHub Actions           |

---

## Project Structure

```
container-crud/
├── .github/
│   └── workflows/         # GitHub Actions CI/CD pipeline definitions
├── server/                # Node.js backend (API + static frontend)
├── package.json           # Node.js dependencies and scripts
├── .gitignore
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [Docker](https://www.docker.com/get-started)
- [Docker Hub](https://hub.docker.com/) account (for CI/CD image push)

---

## Getting Started

### Run Locally (without Docker)

```bash
# Clone the repository
git clone https://github.com/rishabhnama/container-crud.git
cd container-crud

# Install dependencies
npm install

# Start the server
npm start
```

The app will be available at `http://localhost:3000` (or whichever port is configured).

---

### Run with Docker

**Build the image:**

```bash
docker build -t container-crud .
```

**Run the container:**

```bash
docker run -p 3000:3000 container-crud
```

**Or using Docker Compose (if applicable):**

```bash
docker-compose up --build
```

Visit `http://localhost:3000` in your browser.

---

## CI/CD Pipeline

The `.github/workflows/` directory contains a GitHub Actions pipeline that automatically:

1. **Triggers** on every push to the `main` branch
2. **Builds** the Docker image from the `Dockerfile`
3. **Pushes** the image to Docker Hub (or your configured container registry)

### Setting Up CI/CD Secrets

To enable the pipeline, add the following secrets to your GitHub repository under **Settings → Secrets and variables → Actions**:

| Secret Name         | Description                        |
|---------------------|------------------------------------|
| `DOCKER_USERNAME`   | Your Docker Hub username           |
| `DOCKER_PASSWORD`   | Your Docker Hub password or token  |

Once set, every push to `main` will trigger a fresh build and publish the updated image automatically.

---

## Extending This Blueprint

This project is intentionally minimal — it's a starting point, not a final destination. Here are practical ways to extend it:

| Enhancement | How |
|---|---|
| **Add a database** | Integrate MySQL or MongoDB via Docker Compose |
| **Environment config** | Use `.env` files and Docker `--env-file` flag |
| **Multi-stage Docker build** | Reduce image size by separating build and runtime stages |
| **Container registry** | Push to AWS ECR, GitHub Container Registry, or GCR instead of Docker Hub |
| **Deploy to Kubernetes** | See [kubernetes-crud](https://github.com/rishabhnama/kubernetes-crud) — Stage 2 of this series |
| **Package with Helm** | See [helmcrud](https://github.com/rishabhnama/helmcrud) — Stage 3 of this series |

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

> 🐳 Stage 1 of 3 — Container → [Kubernetes](https://github.com/rishabhnama/kubernetes-crud) → [Helm](https://github.com/rishabhnama/helmcrud)
