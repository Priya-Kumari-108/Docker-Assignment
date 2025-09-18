 Docker Assignment – Frontend & Backend Application

 Project Overview
This repository contains my **Dockerized Frontend and Backend Application**.  
The goal of this assignment was to learn and apply the concepts of **Docker**, **Dockerfiles**, **Docker Compose**, and **Docker Hub image deployment**.

I worked on containerizing both parts of the project (frontend and backend), building images, testing locally, and finally pushing them to **Docker Hub** under my account.



 Project Structure

Docker-Assignment/
│── backend/ # Backend source code + Dockerfile
│ ├── Dockerfile.backend
│ └── ...
│
│── frontend/ # Frontend source code + Dockerfile
│ ├── Dockerfile.frontend
│ └── ...
│
│── docker-compose.yml # Compose file to run both services together
│── README.md


Approach & Steps Followed

Understanding Docker Basics
- Learned about **images, containers, volumes, and networks**.
- Understood the difference between **`docker build`**, **`docker run`**, **`docker ps`**, and **`docker exec`**.

Creating Dockerfiles
- Wrote separate **Dockerfiles** for:
  - `backend` → Flask-based application
  - `frontend` → React/HTML app
- Used multi-stage builds where needed to reduce image size.

Using Docker Compose
- Wrote a `docker-compose.yml` to run **both frontend and backend containers** together.
- Defined services with proper ports, container names, and dependencies.

Debugging Issues
During the assignment, I faced multiple issues:
- **Docker connection issue** – Solved by reinstalling and configuring `docker-compose`.
- **Tagging & pushing images** – Initially got `denied: requested access to the resource is denied`.  
  Fixed it by:
  - Logging in with `docker login`
  - Using correct repo name and tags  
  (`docker tag <image> priyakumari108/docker-assignment-108:<tag>`)

Pushing to Docker Hub
- Created a repo on Docker Hub:  
  [`priyakumari108/docker-assignment-108`](https://hub.docker.com/r/priyakumari108/docker-assignment-108)
- Tagged images as:
  - `priyakumari108/docker-assignment-108:backend`
  - `priyakumari108/docker-assignment-108:frontend`
- Pushed both images successfully using:
  ```bash
  docker push priyakumari108/docker-assignment-108:backend


Priya Kumari
Docker Hub: priyakumari108




