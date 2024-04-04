/*
  Warnings:

  - Made the column `origin_name` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `thumb_url` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `trailer_url` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `episode_current` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `episode_total` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `quality` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lang` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `notify` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `showtimes` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `year` on table `Movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "MovieStatus" ADD VALUE 'incoming';

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "origin_name" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "thumb_url" SET NOT NULL,
ALTER COLUMN "trailer_url" SET NOT NULL,
ALTER COLUMN "time" SET NOT NULL,
ALTER COLUMN "episode_current" SET NOT NULL,
ALTER COLUMN "episode_total" SET NOT NULL,
DROP COLUMN "quality",
ADD COLUMN     "quality" TEXT NOT NULL,
DROP COLUMN "lang",
ADD COLUMN     "lang" TEXT NOT NULL,
ALTER COLUMN "notify" SET NOT NULL,
ALTER COLUMN "showtimes" SET NOT NULL,
ALTER COLUMN "year" SET NOT NULL;

-- DropEnum
DROP TYPE "MovieLang";

-- DropEnum
DROP TYPE "MovieQuality";
