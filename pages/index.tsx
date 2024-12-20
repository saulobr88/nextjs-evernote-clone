
import prisma from "@/lib/prisma";
import { IPost } from "@/lib/types";

import Head from "next/head";
import Link from "next/link";
import MainLayout from "@/components/layouts";

export async function getServerSideProps() {
  const posts:IPost[] = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    }
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

interface PageProps {
  posts: IPost[];
}

export default function PostList({ posts }: PageProps) {
  return (
    <>
      <Head>
        <title>Posts List</title>
        <meta name="description" content="List of Posts" />
        <meta name="keyworkds" content="NextJs, Tutorial, PrismaORM" />
      </Head>
      <MainLayout>
        <div>
          {posts.map((post:IPost) => (
            <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-1 py-4">
                <Link href={`/posts/${post.id}`} className="font-bold text-xl mb-2">{post.title}</Link>
                <p className="text-gray-300 text-base text-justify">{post.content}</p>
                <p className="font-bold text-sm mb-2 mt-1">
                  When:  {
                    new Date(post.createdAt).toISOString()
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}
