/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Release` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Release" ADD COLUMN     "url" TEXT NOT NULL DEFAULT E'https://soundcloud.com/rizzladj/battyjack-club-mix-1';

-- CreateIndex
CREATE UNIQUE INDEX "Release.url_unique" ON "Release"("url");
