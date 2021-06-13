-- CreateEnum
CREATE TYPE "Role" AS ENUM ('COMPOSER', 'CONDUCTOR', 'MAIN', 'GUEST', 'REMIXER', 'DJ', 'PRODUCER');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ReleaseType" ADD VALUE 'ANTHOLOGY';
ALTER TYPE "ReleaseType" ADD VALUE 'INTERVIEW';
ALTER TYPE "ReleaseType" ADD VALUE 'LIVEALBUM';
ALTER TYPE "ReleaseType" ADD VALUE 'SOUNDTRACK';

-- CreateTable
CREATE TABLE "ArtistsOnReleases" (
    "artistId" INTEGER NOT NULL,
    "releaseId" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'MAIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("artistId","releaseId")
);

-- AddForeignKey
ALTER TABLE "ArtistsOnReleases" ADD FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistsOnReleases" ADD FOREIGN KEY ("releaseId") REFERENCES "Release"("id") ON DELETE CASCADE ON UPDATE CASCADE;
