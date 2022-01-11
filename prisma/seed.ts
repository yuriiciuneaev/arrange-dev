import { PrismaClient } from '@prisma/client'
import { events } from '../data/backend/events'
const prisma = new PrismaClient()

async function main() {
  await prisma.teacher.create({
    data: {
      name: 'Allan B. Rix'
    }
  })

  await prisma.event.createMany({
    data: events
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
