.PHONY: build up

build:
	docker compose build --no-cache

up:
	docker compose up -d --build

down:
	docker compose down --remove-orphans