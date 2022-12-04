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

INSERT INTO "games" ("title", "logo")
VALUES 
	('Overwatch', 'images/overwatch.png'), 
	('Modern Warfare 2', 'images/modern_warfare_2.png'), 
	('Starcraft II', 'images/starcraft_ii.png'), 
	('Valorant', 'images/valorant.png'), 
	('Fortnite', 'images/fortnite.png'), 
	('Counter Strike: Global Offensive', 'images/csgo.png'), 
	('Rocket League', 'images/rocket_league.png'), 
	('Dota 2', 'images/dota_2.png'), 
	('League of Legends', 'iimages/league_of_legends.png'), 
	('Apex Legends', 'images/apex_legends.png');