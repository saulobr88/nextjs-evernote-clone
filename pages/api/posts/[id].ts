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
        const postId = req.query.id;
        const { title, content, authorId } = req.body;
        const result = await prisma.post.update({
            where: { id: Number(postId) },
            data: {
                title,
                content,
                authorId
            },
        });
        
        res.status(201).json(result);
        
        break;
    }
    case 'DELETE': {
        const postId = req.query.id;
        const result = await prisma.post.delete({
            where: { id: Number(postId) },
        });
        res.status(200).json(result);
        
        break;
    }
    case 'GET': {
        const postId = req.query.id;
        const post = await prisma.post.findUnique({
            where: {
              id: Number(postId),
            },
            include: {
                author: true
            }
        });

        if (!post) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.json(post);
        }

        break;
    }
    default: { // Any other method
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  }
}
