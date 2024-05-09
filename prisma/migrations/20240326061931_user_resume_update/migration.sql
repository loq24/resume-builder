/*
  Warnings:

  - You are about to drop the column `resumeId` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_resumeId_fkey";

-- DropIndex
DROP INDEX "User_resumeId_key";

-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "resumeId";

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
