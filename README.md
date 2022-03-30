# Prisma Repro

### Setup

`npx lerna bootstrap && cd packages/db && npx prisma generate`

### Running

`cd packages/web && npm run dev`

## Issue

Visiting http://127.0.0.1:3000/api/hello will trigger an issue where `@prisma/client` cannot find `prisma.schema`.
