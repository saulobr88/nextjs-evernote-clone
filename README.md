This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

After cloning this repo, some actions may be taken

### .env settings

Copy `.env.example` file in a new `.env` file. Credentiais for docker-compose already exists in `.env.example`

```bash
$ cp .env.example .env
```

### Docker compose PostgreSQL

Bootup Database with PostgreSQL

```bash
$ docker compose up -d
```

### Install Node Deps

```bash
$ npm install
```

### Run Prisma (migrations and seeder)

If database is up running, we can run migrations and seeder for prisma

```bash
$ npm run prisma:deploy
$ npm run prisma:seed
```

### Bootup NextJs App

run the development server:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## References (temp)

https://www.dhiwise.com/post/building-a-full-stack-app-with-nextjs-postgres-and-prisma

https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries

https://v1.tailwindcss.com/components/cards
