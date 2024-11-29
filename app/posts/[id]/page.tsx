'use client';

import { useState, useEffect, FormEvent } from 'react';
import { 
    // useRouter,
    useParams 
} from 'next/navigation';
import defaultUserId from '@/lib/defaultUser';

import MainLayout from "@/components/layouts";
import { DeletePostForm } from "@/components/postForm";

export default function UpdatePostPage() {
    const params = useParams<{ id: string }>();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId] = useState(defaultUserId);
    const [posting, setPosting] = useState(false);
    const [postingMsg, setPostingMsg] = useState('');
    // const router = useRouter();

    useEffect(() => {
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            pageTitle.innerHTML = 'UPDATE POST';
        }
    }, []);

    useEffect(() => {
        const getPost = async () => {
            const res = await fetch(`/api/posts/${params?.id}`);
            const post = await res.json();
            setTitle(post.title);
            setContent(post.content);
        };
        if (params?.id) getPost();
    }, [params]);

    const submitData = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          const body = { title, content, authorId };
          setPosting(true);
          setPostingMsg('posting...');
          const url = `/api/posts/${params?.id ?? ''}`;
          await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          // router.push(`/posts/${params?.id ?? ''}`);
          // router.refresh();
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <MainLayout>
            <div className="w-full max-w-xs">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form 
                        onSubmit={submitData}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="title"
                                id="title"
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                                Content
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="content"
                                id="content"
                                placeholder="Content"
                                rows={5}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between gap-1">
                            {
                                posting ?
                                (<div>{postingMsg}</div>)
                                :
                                (
                                <>
                                    <button 
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        >
                                            Update Post
                                    </button>
                                </>
                                )
                            }
                        </div>
                    </form>
                    <div className="mt-2">
                        <DeletePostForm inputPostId={params?.id ?? ''} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}