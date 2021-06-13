/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ArtistsOnReleases` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ArtistsOnReleases" DROP COLUMN "createdAt";

-- CreateTable
CREATE TABLE "_ArtistToRelease" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistToRelease_AB_unique" ON "_ArtistToRelease"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistToRelease_B_index" ON "_ArtistToRelease"("B");

-- AddForeignKey
ALTER TABLE "_ArtistToRelease" ADD FOREIGN KEY ("A") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToRelease" ADD FOREIGN KEY ("B") REFERENCES "Release"("id") ON DELETE CASCADE ON UPDATE CASCADE;
