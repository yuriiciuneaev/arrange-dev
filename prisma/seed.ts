import { PrismaClient } from '@prisma/client'
import { activities } from '../data/admin/activities'
const prisma = new PrismaClient()

async function main() {
  await prisma.teacher.create({
    data: {
      name: 'Allan B. Rix'
    }
  })

  await prisma.activity.createMany({
    data: activities
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
