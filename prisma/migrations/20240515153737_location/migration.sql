/*
  Warnings:

  - You are about to drop the column `city` on the `About` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `About` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "About" DROP COLUMN "city",
DROP COLUMN "country",
ADD COLUMN     "location" TEXT;
