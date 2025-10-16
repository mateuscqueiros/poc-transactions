"use client";

import { TransactionList } from "../features/transactions/components/transaction-list";
import { useTransactions } from "../features/transactions/providers/transaction-provider";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const { data: transactions } = useTransactions();
  return (
    <div>
      <h1>Home Page</h1>
      <TransactionList data={transactions} />
    </div>
  );
}
