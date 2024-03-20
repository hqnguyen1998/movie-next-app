-- CreateEnum
CREATE TYPE "MovieLang" AS ENUM ('vietsub', 'english', 'thuyetminh', 'longtieng');

-- CreateEnum
CREATE TYPE "MovieQuality" AS ENUM ('SD', 'HD', 'FHD');

-- CreateEnum
CREATE TYPE "MovieStatus" AS ENUM ('ongoing', 'completed');

-- CreateEnum
CREATE TYPE "MovieType" AS ENUM ('single', 'series', 'tvshows', 'hoathinh');

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "origin_name" TEXT,
    "slug" TEXT NOT NULL,
    "poster_url" TEXT NOT NULL,
    "content" TEXT,
    "type" "MovieType" NOT NULL DEFAULT 'single',
    "status" "MovieStatus" NOT NULL DEFAULT 'completed',
    "thumb_url" TEXT,
    "trailer_url" TEXT,
    "time" TEXT,
    "episode_current" TEXT,
    "episode_total" TEXT,
    "is_copyright" BOOLEAN NOT NULL DEFAULT false,
    "chieurap" BOOLEAN NOT NULL DEFAULT false,
    "sub_docquyen" BOOLEAN NOT NULL DEFAULT false,
    "quality" "MovieQuality" NOT NULL DEFAULT 'HD',
    "lang" "MovieLang" NOT NULL DEFAULT 'vietsub',
    "notify" TEXT,
    "showtimes" TEXT,
    "year" INTEGER,
    "view" INTEGER NOT NULL DEFAULT 0,
    "actors" TEXT[],
    "directors" TEXT[],

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "MovieCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieToMovieCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_slug_key" ON "Movie"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MovieCategory_slug_key" ON "MovieCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieCategory_AB_unique" ON "_MovieToMovieCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieCategory_B_index" ON "_MovieToMovieCategory"("B");

-- AddForeignKey
ALTER TABLE "_MovieToMovieCategory" ADD CONSTRAINT "_MovieToMovieCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCategory" ADD CONSTRAINT "_MovieToMovieCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
