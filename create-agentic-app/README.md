# create-vibe-business-app

Scaffold a new AI-powered business application with Next.js, Better Auth, and AI SDK.

## Usage

Create a new project in the current directory:

```bash
npx create-vibe-business-app@latest .
```

Create a new project in a subdirectory:

```bash
npx create-vibe-business-app@latest my-app
```

### Non-Interactive Mode (for CI/CD and coding agents)

All prompts can be bypassed with CLI flags, enabling fully automated project scaffolding:

```bash
# Full non-interactive setup
npx create-vibe-business-app@latest my-app -y -p pnpm

# Skip install and git init for faster scaffolding
npx create-vibe-business-app@latest my-app -y -p npm --skip-install --skip-git
```

#### Available Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--yes` | `-y` | Auto-confirm non-empty directory prompt |
| `--package-manager <manager>` | `-p` | Package manager to use: `pnpm`, `npm`, or `yarn` |
| `--skip-install` | | Skip dependency installation |
| `--skip-git` | | Skip git repository initialization |

## What's Included

This starter includes:

- **Next.js 16** with App Router and Turbopack
- **Better Auth** for authentication (email/password, OAuth)
- **AI SDK** by Vercel for AI chat functionality
- **Drizzle ORM** with PostgreSQL database
- **Tailwind CSS** with shadcn/ui components
- **TypeScript** for type safety
- **Dark mode** support with next-themes

## Next Steps

After creating your project:

1. **Update environment variables**: Edit `.env` with your API keys and database credentials
2. **Start the database**: `docker compose up -d`
3. **Run migrations**: `pnpm run db:migrate` (or `npm`/`yarn`)
4. **Start dev server**: `pnpm run dev`

Visit `http://localhost:3000` to see your app!

## License

MIT
