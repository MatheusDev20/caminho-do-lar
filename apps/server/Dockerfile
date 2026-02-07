FROM node:18-slim

RUN corepack enable && corepack prepare pnpm@8.15.6 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/server/package.json apps/server/

RUN pnpm install --frozen-lockfile

COPY apps/server apps/server

WORKDIR /app/apps/server

RUN chmod +x entrypoint.sh

EXPOSE 3001

ENTRYPOINT ["./entrypoint.sh"]
