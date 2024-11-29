import type {
    NextApiRequest, 
    NextApiResponse
} from 'next'

import prisma from '@/lib/prisma';

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
  switch(req.method) {
    case 'PUT': {
        const userId = req.query.id;
        const { name, email } = req.body;
        const result = await prisma.user.update({
            where: { id: Number(userId) },
            data: {
                name,
                email,
            },
        });
        
        res.status(201).json(result);
        
        break;
    }
    case 'GET': {
        const userId = req.query.id;
        const user = await prisma.user.findUnique({
            where: {
              id: Number(userId),
            },
            include: {
                posts: true
            }
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(user);
        }

        break;
    }
    default: { // Any other method
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  }
}
