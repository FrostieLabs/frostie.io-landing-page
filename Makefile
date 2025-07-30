# Makefile for Frostie demo
SHELL := /bin/bash
ENV = dev

.PHONY: up down build.dist
up:
	docker compose $(shell [ "$(ENV)" != "prod" ] && echo "-f docker-compose.$(ENV).yml" ) up --build

down:
	docker compose down

build.dist:
	docker compose -f docker-compose.build.yml run --rm builder