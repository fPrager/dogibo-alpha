CREATE TABLE "app-alpha"."Donation" (
  id SERIAL PRIMARY KEY NOT NULL,
  "name" TEXT,
  "message" TEXT,
  "amount" FLOAT NOT NULL,
  "anonym" BOOLEAN 
);