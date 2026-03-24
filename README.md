# Solana Indexer

A Solana indexer using Yellowstone gRPC to subscribe to token accounts, transactions, and slot updates for USDC and USDT. Persisting data with Prisma and PostgreSQL.

## Set up

```bash
git clone <repo-url>
cd solana-indexer
npm install
```

## Configuration

Create a `.env` file with your Postgres URL:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

## Database Migration

```bash
npx prisma migrate dev --name init
```

## Running the Indexer

```bash
npm run dev
```

## What It Tracks

- Account updates (USDC, USDT)
- Transactions (success/failure)
- Slot updates
