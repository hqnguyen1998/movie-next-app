-- CreateEnum
CREATE TYPE "Role" AS ENUM ('administrator', 'modarator', 'user');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "Role" NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "origin_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "poster_url" TEXT NOT NULL,
    "thumb_url" TEXT NOT NULL,
    "content" TEXT,
    "type" TEXT,
    "status" TEXT,
    "trailer_url" TEXT,
    "time" TEXT,
    "episode_current" TEXT,
    "episode_total" TEXT,
    "chieurap" BOOLEAN DEFAULT false,
    "sub_docquyen" BOOLEAN DEFAULT false,
    "is_copyright" BOOLEAN DEFAULT false,
    "is_sensitive_content" BOOLEAN DEFAULT false,
    "is_recommended" BOOLEAN DEFAULT false,
    "quality" TEXT,
    "lang" TEXT,
    "notify" TEXT,
    "showtimes" TEXT,
    "year" INTEGER,
    "view" INTEGER DEFAULT 0,
    "actors" TEXT[],
    "directors" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieCatalog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "per_page" INTEGER,
    "value" TEXT,
    "seo_title" TEXT,
    "seo_description" TEXT,
    "seo_keyword" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "MovieCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "MovieCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieCountry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "MovieCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieToMovieCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MovieToMovieCountry" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_slug_key" ON "Movie"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MovieCatalog_id_key" ON "MovieCatalog"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieCategory_slug_key" ON "MovieCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MovieCountry_slug_key" ON "MovieCountry"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieCategory_AB_unique" ON "_MovieToMovieCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieCategory_B_index" ON "_MovieToMovieCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieToMovieCountry_AB_unique" ON "_MovieToMovieCountry"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieToMovieCountry_B_index" ON "_MovieToMovieCountry"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCategory" ADD CONSTRAINT "_MovieToMovieCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCategory" ADD CONSTRAINT "_MovieToMovieCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCountry" ADD CONSTRAINT "_MovieToMovieCountry_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieCountry" ADD CONSTRAINT "_MovieToMovieCountry_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieCountry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
