/*
 * Seed DB using Prisma CLI
 * usage:
 * $ npx prisma db seed
 *
 */
import { PrismaClient } from '@prisma/client';
import loremIpsum from './fixedStrings';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'John Doe',
      posts: {
        create: [
          {
            title: 'My first post',
            content: 'Hello World!',
          },
          {
            title: 'Second post',
            content: loremIpsum,
          },
        ],
      },
    },
  });
  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
