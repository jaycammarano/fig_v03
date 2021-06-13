import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
    const rizzla = await prisma.artist.create({
        data: {
            name: 'rizzla',
            releases: {
                create: {
                    name: "Battyjack (Club Mix)",
                    releaseDate: new Date("2013-07-14"),
                    image: "https://i.imgur.com/r2jnjsY.jpg",
                    type: "SINGLE",
                    url: "https://soundcloud.com/rizzladj/battyjack-club-mix-1",
                    tags: {
                        create:{
                            name: "kunq"
                        }
                    },
                }
            }
        }
    })
    const blkAdonis = await prisma.artist.create({
      data: {
        name: "Blk.Adonis",
        releases: {
          connect: {
              url: "https://soundcloud.com/rizzladj/battyjack-club-mix-1",
        }
      }
    }})
  console.log({ rizzla, blkAdonis })
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
export default seed