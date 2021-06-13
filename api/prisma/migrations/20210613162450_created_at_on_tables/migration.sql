/*
  Warnings:

  - You are about to drop the `_ArtistToRelease` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ArtistToRelease" DROP CONSTRAINT "_ArtistToRelease_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArtistToRelease" DROP CONSTRAINT "_ArtistToRelease_B_fkey";

-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Release" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_ArtistToRelease";
