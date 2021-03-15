import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const allDonations = await prisma.donation.findMany();

console.log(allDonations);
