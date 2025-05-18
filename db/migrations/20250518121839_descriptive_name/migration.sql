/*
  Warnings:

  - You are about to drop the column `countLogin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `countLogin`,
    ADD COLUMN `loginCount` INTEGER NOT NULL DEFAULT 0;
