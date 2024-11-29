/**
 * TODO: Implementação Futura, adicionar o Form de criar post aqui. Para criar a atualizar.
 */
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormProps {
    inputPostId: string|number
};

export function DeletePostForm({inputPostId}:FormProps) {
    const [postId, setPostId] = useState('');
    const [posting, setPosting] = useState(false);
    const [postingMsg, setPostingMsg] = useState('');
    const router = useRouter();

    useEffect(() => {
        setPostId( String(inputPostId) );
    }, [inputPostId]);

    const submitData = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          setPosting(true);
          setPostingMsg('deleting...');
          const url = `/api/posts/${postId}`;
          await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          });
          router.push('/');
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <form onSubmit={submitData}>
            {
            posting ?
            (<div>{postingMsg}</div>)
            :
            (
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Delete Post
            </button>
            )
            }
        </form>
    );
}

