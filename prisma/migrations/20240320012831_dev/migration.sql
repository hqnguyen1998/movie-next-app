/*
  Warnings:

  - The `isAdmin` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('administrator', 'modarator', 'user');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
ADD COLUMN     "isAdmin" "Role" NOT NULL DEFAULT 'user';
