/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MovieCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MovieCategory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `A` on the `_MovieToMovieCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_MovieToMovieCategory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_MovieToMovieCategory" DROP CONSTRAINT "_MovieToMovieCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToMovieCategory" DROP CONSTRAINT "_MovieToMovieCategory_B_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MovieCategory" DROP CONSTRAINT "MovieCategory_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MovieCategory_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_MovieToMovieCategory" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieCategory_AB_unique" ON "_MovieToMovieCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieCategory_B_index" ON "_MovieToMovieCategory"("B");

-- AddForeignKey
ALTER TABLE "_MovieToMovieCategory" ADD CONSTRAINT "_MovieToMovieCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCategory" ADD CONSTRAINT "_MovieToMovieCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
