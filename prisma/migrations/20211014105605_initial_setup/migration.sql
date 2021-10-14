-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "donor" TEXT,
    "msg" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "client" TEXT,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donation_client_key" ON "Donation"("client");
