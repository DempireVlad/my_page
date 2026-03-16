# Portfolio Blog (Frontend + Backend)

[![Node.js](https://img.shields.io/badge/node-%3E%3D20-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Strapi](https://img.shields.io/badge/Strapi-v5-4945FF?logo=strapi&logoColor=white)](https://strapi.io/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Full-stack portfolio/blog project with two applications:

- frontend-port-blog: client app built with React Router + Vite
- backend-port-blog: CMS/API built with Strapi v5

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints Used by Frontend](#api-endpoints-used-by-frontend)
- [Strapi Content Types](#strapi-content-types)
- [Production Build](#production-build)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository contains a complete portfolio/blog platform where:

- Strapi manages content (posts and projects)
- React Router frontend consumes Strapi REST API
- Media files can be stored via Cloudinary

## Tech Stack

Frontend:

- React 19
- React Router 7
- Vite
- TypeScript
- Tailwind CSS 4
- Framer Motion

Backend:

- Strapi 5
- TypeScript
- PostgreSQL or SQLite
- Cloudinary (for media uploads)

## Project Structure

frontBack/

- frontend-port-blog/
- backend-port-blog/

## Features

Frontend:

- Home page
- Blog page and post details page
- Projects page and project details page
- About / Contact / 404 pages

Backend (Strapi):

- Post collection type
- Project collection type
- REST API for content fetching

## Requirements

- Node.js 20+
- npm 9+

## Quick Start

### 1. Run Backend (Strapi)

```bash
cd backend-port-blog
npm install
npm run develop
```

Backend will be available at:

- http://localhost:1337
- Admin panel: http://localhost:1337/admin
- API base: http://localhost:1337/api

### 2. Run Frontend

```bash
cd ../frontend-port-blog
npm install
npm run dev
```

By default, frontend runs at:

- http://localhost:5173

## Environment Variables

### Backend (backend-port-blog/.env)

Create .env from .env.example.

| Variable            | Required | Example             | Notes                             |
| ------------------- | -------- | ------------------- | --------------------------------- |
| HOST                | Yes      | 0.0.0.0             | Strapi host                       |
| PORT                | Yes      | 1337                | Strapi port                       |
| APP_KEYS            | Yes      | key1,key2,key3,key4 | Comma-separated keys              |
| API_TOKEN_SALT      | Yes      | replace_me          | Strapi security                   |
| ADMIN_JWT_SECRET    | Yes      | replace_me          | Strapi security                   |
| TRANSFER_TOKEN_SALT | Yes      | replace_me          | Strapi security                   |
| JWT_SECRET          | Yes      | replace_me          | Strapi security                   |
| ENCRYPTION_KEY      | Yes      | replace_me          | Strapi security                   |
| DATABASE_CLIENT     | Yes      | sqlite or postgres  | DB driver                         |
| DATABASE_HOST       | No       | localhost           | Required for postgres             |
| DATABASE_PORT       | No       | 5432                | Required for postgres             |
| DATABASE_NAME       | No       | strapi              | Required for postgres             |
| DATABASE_USERNAME   | No       | strapi              | Required for postgres             |
| DATABASE_PASSWORD   | No       | strapi              | Required for postgres             |
| DATABASE_SSL        | No       | false               | Optional SSL for postgres         |
| CLAUDINARY_NAME     | No       | your_cloud_name     | Required if Cloudinary is enabled |
| CLAUDINARY_KEY      | No       | your_key            | Required if Cloudinary is enabled |
| CLAUDINARY_SECRET   | No       | your_secret         | Required if Cloudinary is enabled |
| CLAUDINARY_FOLDER   | No       | portfolio-blog      | Optional upload folder            |

### Frontend (frontend-port-blog/.env)

| Variable        | Required | Example                   | Notes                      |
| --------------- | -------- | ------------------------- | -------------------------- |
| VITE_API_URL    | Yes      | http://localhost:1337/api | Base API URL               |
| VITE_STRAPI_URL | Yes      | http://localhost:1337     | Base Strapi URL for assets |

## Available Scripts

Backend (backend-port-blog):

- npm run develop: run Strapi in development mode
- npm run build: build Strapi admin panel
- npm run start: run Strapi in production mode
- npm run upgrade: upgrade Strapi to latest

Frontend (frontend-port-blog):

- npm run dev: run local development server
- npm run build: build production app
- npm run start: serve built app
- npm run typecheck: generate router types and run TypeScript checks
- npm run json-server: run local mock JSON server on port 8000

## API Endpoints Used by Frontend

- GET /api/posts?populate=\*
- GET /api/projects?populate=\*
- GET /api/projects?filters[featured][$eq]=true&populate=\*
- GET /api/projects?filters[documentId][$eq]=:id&populate=\*

## Strapi Content Types

Post:

- slug
- title
- excerpt
- content
- date
- coverImage

Project:

- title
- description
- image
- url
- date
- category (Frontend | Design | Fullstack | Backend)
- featured

## Production Build

Backend:

```bash
cd backend-port-blog
npm run build
npm run start
```

Frontend:

```bash
cd frontend-port-blog
npm run build
npm run start
```

## Troubleshooting

1. CORS or request errors from frontend

- Check VITE_API_URL in frontend .env
- Make sure backend is running on the expected host/port

2. Images are not displayed

- Check VITE_STRAPI_URL
- Check Cloudinary variables CLAUDINARY\_\*

3. Empty data in lists

- In Strapi, make sure entries are published
- Verify data exists in Post and Project collections

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

