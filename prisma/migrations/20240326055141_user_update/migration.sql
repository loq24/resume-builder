-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_resumeId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "resumeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE SET NULL ON UPDATE CASCADE;
