/*
  Warnings:

  - You are about to drop the column `loginCount` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `loginCount`,
    ADD COLUMN `countLogin` INTEGER NOT NULL DEFAULT 0;
