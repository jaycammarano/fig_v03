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
  const blogPostOne = await prisma.blog.create({
    data: {
      title: "rizzla + blk.adonis - Battyjack EP",
      content: "Bringing back 90s club culture and dancehall with this slick Lisa Hyper sample.",
      tags: {
        create:[{
          name: "rizzla"
        }],
      }
    }
  })
  console.log({ battyjack, blogPostOne })
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