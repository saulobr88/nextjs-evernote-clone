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
    case 'POST': {
      const { title, content, authorId } = req.body;
      const result = await prisma.post.create({
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
      res.status(200).json({ message: 'Work in progress!' });
      break;
    }
    default: { // GET Method
      const posts = await prisma.post.findMany();
      res.json(posts);
      break;
    }
  }
}
