-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "is_recommended" BOOLEAN DEFAULT false,
ADD COLUMN     "is_sensitive_content" BOOLEAN DEFAULT false,
ALTER COLUMN "is_copyright" DROP NOT NULL,
ALTER COLUMN "chieurap" DROP NOT NULL,
ALTER COLUMN "sub_docquyen" DROP NOT NULL,
ALTER COLUMN "view" DROP NOT NULL;

-- CreateTable
CREATE TABLE "MovieCountry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "MovieCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieToMovieCountry" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MovieCountry_slug_key" ON "MovieCountry"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieCountry_AB_unique" ON "_MovieToMovieCountry"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieCountry_B_index" ON "_MovieToMovieCountry"("B");

-- AddForeignKey
ALTER TABLE "_MovieToMovieCountry" ADD CONSTRAINT "_MovieToMovieCountry_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCountry" ADD CONSTRAINT "_MovieToMovieCountry_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieCountry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
