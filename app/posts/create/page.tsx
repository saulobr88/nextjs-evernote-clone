'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import defaultUserId from '@/lib/defaultUser';

export default function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId] = useState(defaultUserId);
    const [posting, setPosting] = useState(false);
    const [postingMsg, setPostingMsg] = useState('');
    const router = useRouter();

    const submitData = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          const body = { title, content, authorId };
          setPosting(true);
          setPostingMsg('posting...');
          await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          router.push('/');
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <div className="w-full max-w-xs">
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={submitData}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="title"
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
                        placeholder="Content"
                        rows={5}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    {
                        posting ?
                        (<div>{postingMsg}</div>)
                        :
                        (<button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            >
                                Create Post
                            </button>)
                    }
                </div>
            </form>
        </div>
    );
}