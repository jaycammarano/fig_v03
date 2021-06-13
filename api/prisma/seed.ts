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
                    type: "SINGLE",
                    tags: {
                        create:{
                            name: "kunq"
                        }
                    }
                }
            }
        }
    })

  console.log({ rizzla })
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