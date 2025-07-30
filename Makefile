# Makefile for Frostie demo

.PHONY: up down build.dist
up:
	docker compose up --build

down:
	docker compose down

build.dist:
	docker compose -f docker-compose.build.yml run --rm builder