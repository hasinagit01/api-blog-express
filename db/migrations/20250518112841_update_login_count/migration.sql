/*
  Warnings:

  - You are about to drop the column `loginCountss` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `loginCountss`,
    ADD COLUMN `loginCount` INTEGER NOT NULL DEFAULT 0;
