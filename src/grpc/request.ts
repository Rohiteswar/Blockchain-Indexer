import { SubscribeRequest, CommitmentLevel } from "@triton-one/yellowstone-grpc";

export function createSubscribeRequest(): SubscribeRequest {
  const tokenMints = [
    "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC mint
    "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDT mint
  ];

  return {
    accounts: {
      token_accounts: { account: tokenMints, owner: [], filters: [] }
    },
    slots: { slot_updates: { filterByCommitment: true, interslotUpdates: false } },
    transactions: { all_transactions: { accountInclude: tokenMints, accountExclude: [], accountRequired: [], vote: false, failed: false } },
    blocks: { relevant_blocks: { accountInclude: [tokenMints[0]], includeTransactions: true, includeAccounts: false, includeEntries: false } },
    transactionsStatus: {},
    entry: {},
    blocksMeta: {},
    commitment: CommitmentLevel.CONFIRMED,
    accountsDataSlice: [],
  };
}
