/*
  Warnings:

  - You are about to drop the column `adminUserId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_adminUserId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "adminUserId";
