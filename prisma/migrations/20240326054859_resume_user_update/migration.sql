/*
  Warnings:

  - You are about to drop the column `userId` on the `Resume` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[resumeId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `resumeId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Resume" DROP CONSTRAINT "Resume_userId_fkey";

-- DropIndex
DROP INDEX "Resume_userId_key";

-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resumeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_resumeId_key" ON "User"("resumeId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
