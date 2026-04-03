# Vibe Business Starter

A full-stack starter for building AI-powered business applications with authentication, PostgreSQL database, AI chat functionality, and modern UI components.

## Features

- **Authentication**: Better Auth with Google OAuth integration
- **Database**: Drizzle ORM with PostgreSQL
- **AI Integration**: Vercel AI SDK with OpenRouter (access to 100+ AI models)
- **File Storage**: Automatic local/Vercel Blob storage with seamless switching
- **UI Components**: shadcn/ui with Tailwind CSS
- **Modern Stack**: Next.js 16, React 19, TypeScript
- **Responsive**: Mobile-first design approach

## Quick Setup

1. **Update environment variables**: Edit `.env` with your API keys and database credentials
2. **Start the database**: `docker compose up -d`
3. **Run migrations**: `pnpm run db:migrate`
4. **Start dev server**: `pnpm run dev`

Visit `http://localhost:3000` to see your app!

## Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run database migrations
npm run db:push      # Push schema changes to database
npm run db:studio    # Open Drizzle Studio (database GUI)
npm run db:dev       # Push schema for development
npm run db:reset     # Reset database (drop all tables)
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── chat/          # AI chat endpoint
│   ├── chat/              # AI chat page
│   ├── dashboard/         # User dashboard
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── auth/             # Authentication components
│   └── ui/               # shadcn/ui components
└── lib/                  # Utilities and configurations
    ├── auth.ts           # Better Auth configuration
    ├── auth-client.ts    # Client-side auth utilities
    ├── db.ts             # Database connection
    ├── schema.ts         # Database schema
    ├── storage.ts        # File storage abstraction
    └── utils.ts          # General utilities
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
