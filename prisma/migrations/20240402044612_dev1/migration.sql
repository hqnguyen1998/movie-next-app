/*
  Warnings:

  - The `type` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "content" DROP NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT,
ALTER COLUMN "trailer_url" DROP NOT NULL,
ALTER COLUMN "time" DROP NOT NULL,
ALTER COLUMN "episode_current" DROP NOT NULL,
ALTER COLUMN "episode_total" DROP NOT NULL,
ALTER COLUMN "notify" DROP NOT NULL,
ALTER COLUMN "showtimes" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "quality" DROP NOT NULL,
ALTER COLUMN "lang" DROP NOT NULL;

-- DropEnum
DROP TYPE "MovieStatus";

-- DropEnum
DROP TYPE "MovieType";
