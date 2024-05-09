/*
  Warnings:

  - You are about to drop the column `address` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `jobTitle` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Resume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "address",
DROP COLUMN "email",
DROP COLUMN "jobTitle",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "summary",
DROP COLUMN "website",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "About" (
    "id" TEXT NOT NULL,
    "jobTitle" TEXT,
    "summary" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "website" TEXT,
    "resumeId" TEXT NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "About" ADD CONSTRAINT "About_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
