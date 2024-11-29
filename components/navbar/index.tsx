import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Posts
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/posts/create"
            >
              <Image
                aria-hidden
                src="/create-svgrepo-com.svg"
                alt="Create icon"
                width={16}
                height={16}
              />
              Create
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/users"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Users
            </Link>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/saulobr88/nextjs-evernote-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Github →
            </a>
          </header>
    );
}