#!/bin/sh
wait_for_db() {
    while ! nc -z db 5432; do
        echo "Waiting for PostgreSQL to start..."
        sleep 1
    done
    echo "PostrgeSQL is up and running."
}

wait_for_db

npx prisma migrate dev --name dbinit
npx prisma generate
node server.js