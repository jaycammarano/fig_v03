-- CreateEnum
CREATE TYPE "ReleaseType" AS ENUM ('DJMIX', 'ALBUM', 'MINIALBUM', 'SINGLE', 'EP', 'MIXTAPE', 'PROMO', 'UNOFFICIAL', 'COMPILATION', 'CONCERT', 'UNKNOWN');

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Release" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "type" "ReleaseType" NOT NULL DEFAULT E'UNKNOWN',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtistToRelease" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ReleaseToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistToRelease_AB_unique" ON "_ArtistToRelease"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistToRelease_B_index" ON "_ArtistToRelease"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ReleaseToTag_AB_unique" ON "_ReleaseToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ReleaseToTag_B_index" ON "_ReleaseToTag"("B");

-- AddForeignKey
ALTER TABLE "_ArtistToRelease" ADD FOREIGN KEY ("A") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToRelease" ADD FOREIGN KEY ("B") REFERENCES "Release"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReleaseToTag" ADD FOREIGN KEY ("A") REFERENCES "Release"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReleaseToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
