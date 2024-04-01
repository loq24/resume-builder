/*
  Warnings:

  - A unique constraint covering the columns `[resumeId]` on the table `About` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "About_resumeId_key" ON "About"("resumeId");
