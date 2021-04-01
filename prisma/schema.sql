CREATE TABLE "app-alpha"."Donation" (
  id SERIAL PRIMARY KEY NOT NULL,
  "donor" TEXT,
  "msg" TEXT,
  "amount" FLOAT NOT NULL,
  "client" TEXT 
);