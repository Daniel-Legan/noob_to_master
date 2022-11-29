-- Database Name: noob_to_master
CREATE TABLE "games" (
	"id" serial PRIMARY KEY,
	"title" VARCHAR(255) NOT NULL,
	"logo" VARCHAR(255) NOT NULL
	);

CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"address" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"lat" DECIMAL(10, 7) NOT NULL,
	"lng" DECIMAL(10, 7) NOT NULL,
	"game_id" int NOT NULL REFERENCES games,
	"noob_or_master" varchar(6) NOT NULL
	);
	
CREATE TABLE "connections" (
	"id" serial PRIMARY KEY,
	"noob_id" int REFERENCES users,
	"master_id" int REFERENCES users,
	"noob_message" VARCHAR(255) DEFAULT NULL,
	"status" VARCHAR(14) DEFAULT 'pending',
	"game_logo" VARCHAR(255) NOT NULL,
	"game_title" VARCHAR(255) NOT NULL
	);