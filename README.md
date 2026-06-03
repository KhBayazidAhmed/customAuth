# customAuth

Demo of a custom authentication and authorization system built in Next.js.

Includes public/private routes, signup, login flows with server-side validation and session handling.

## Features

- Public landing page
- Protected private route (`/private`)
- Signup and sign-in pages
- Custom auth logic (no 3rd party providers)
- Error handling for invalid credentials
- MongoDB persistence

## Tech

- Next.js (App router)
- Server Actions
- MongoDB + Mongoose?
- TypeScript / JS

## Run Locally

```bash
npm install
npm run dev
```

Configure MongoDB connection in env before running.

## Usage Flow

1. Sign up at `/sign-up`
2. Log in at `/sign-in`
3. Access protected content at `/private`

---

_Auth patterns demonstration / learning project._
