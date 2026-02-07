#!/bin/sh
set -e

echo "Running migrations..."
pnpm migration:run
echo "Migrations completed."

echo "Starting server..."
exec pnpm dev
