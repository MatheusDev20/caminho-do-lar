FROM node:20-slim

RUN corepack enable && corepack prepare pnpm@8.15.6 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/site/package.json apps/site/

RUN pnpm install --frozen-lockfile

COPY apps/site apps/site

WORKDIR /app/apps/site

EXPOSE 3000

CMD ["pnpm", "dev", "--host"]
