
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Database Used
DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "games";
DROP TABLE IF EXISTS "connections";

CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"address" varchar(255) NOT NULL,
	"lat" DECIMAL(10) NOT NULL,
	"lng" DECIMAL(10) NOT NULL,
	"game_id" int NOT NULL REFERENCES games,
	"noob_or_master" varchar(6) NOT NULL
	);
	
CREATE TABLE "games" (
	"id" serial PRIMARY KEY,
	"title" VARCHAR(255) NOT NULL
	);
	
CREATE TABLE "connections" (
	"id" serial PRIMARY KEY,
	"noob_id" int REFERENCES users,
	"master_id" int REFERENCES users,
	"noob_message" VARCHAR(255) NOT NULL,
	"master_message" VARCHAR(255) DEFAULT NULL,
	"status" VARCHAR(9) DEFAULT 'pending',
	"master_rating" int DEFAULT NULL,
	"noob_message_counter" int DEFAULT 1
	);