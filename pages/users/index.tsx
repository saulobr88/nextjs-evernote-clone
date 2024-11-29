
import prisma from "@/lib/prisma";
import { IUser } from "@/lib/types";

import Head from 'next/head';
import MainLayout from "@/components/layouts";

export async function getServerSideProps() {
  const users:IUser[] = await prisma.user.findMany();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

interface PageProps {
  users: IUser[];
}

export default function PostList({ users }: PageProps) {
  return (
    <>
      <Head>
        <title>Posts List</title>
        <meta name="description" content="List of Users" />
        <meta name="keyworkds" content="NextJs, Tutorial, PrismaORM" />
      </Head>
      <MainLayout>
        <div>
          {users.map((user:IUser) => (
            <div key={user.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-1 py-4">
                <h2 className="font-bold text-xl mb-2">{user.name}</h2>
                <p className="text-gray-300 text-base">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}
