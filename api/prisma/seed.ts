import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  const battyjack = await prisma.release.create({
    data: {
        name: "Battyjack (Club Mix)",
        releaseDate: new Date("2013-07-14"),
        image: "https://i.imgur.com/r2jnjsY.jpg",
        type: "SINGLE",
        url: "https://soundcloud.com/rizzladj/battyjack-club-mix-1",
        artists: {
          create: [{ name: 'rizzla', artistsOnReleases: {
            create: {
              role: "MAIN",
              releaseId: 1
            }
          } } , { name: 'Blk.Adonis',  artistsOnReleases: {
            create: {
              role: "MAIN",
              releaseId: 1
            }
          }
          }]
        },
        tags: {
            create:[{
                name: "kunq"
            }]
        },
    }
  })

  console.log({ battyjack })
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