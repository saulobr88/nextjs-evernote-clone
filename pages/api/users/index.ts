import type {
    NextApiRequest, 
    NextApiResponse
} from 'next'

import prisma from '@/lib/prisma';

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const users = await prisma.user.findMany();
  res.json(users);
}
