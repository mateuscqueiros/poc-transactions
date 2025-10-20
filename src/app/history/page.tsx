"use client";

import { PageLayout } from "../../components/layout/page-layout";
import { TransactionList } from "../../features/transactions/components/transaction-list";
import { useTransactions } from "../../features/transactions/providers/transaction-provider";
import { Flex, Text, Box, Card } from "@mantine/core";
import { formatCurrency } from "../../features/transactions/lib/format";
import { TransactionClass } from "../../features/transactions/types";

export default function HistoryPage() {
  const { data: transactions } = useTransactions();

  const totalAmount = transactions.reduce((acc, t) => acc + t.amount, 0);
  const totalTransactions = transactions.length;
  const totalCredits = transactions
    .filter((t) => t.class === TransactionClass.Credit)
    .reduce((acc, t) => acc + t.amount, 0);
  const totalDebits = transactions
    .filter((t) => t.class === TransactionClass.Debit)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <PageLayout size="sm" title="Histórico">
      <Card
        withBorder
        p="md"
        mb="lg"
        style={{
          borderRadius: 6,
        }}
      >
        <Flex justify="space-between" align="center">
          <Box>
            <Text size="sm" color="dimmed">
              Total de transações
            </Text>
            <Text fw={700}>{totalTransactions}</Text>
          </Box>
          <Box>
            <Text size="sm" c="dimmed">
              Créditos
            </Text>
            <Text fw={700}>{formatCurrency(totalCredits, "pt-BR")}</Text>
          </Box>
          <Box>
            <Text size="sm" c="dimmed">
              Débitos
            </Text>
            <Text fw={700}>{formatCurrency(totalDebits, "pt-BR")}</Text>
          </Box>
          <Box>
            <Text size="sm" c="dimmed">
              Saldo total
            </Text>
            <Text fw={700}>{formatCurrency(totalAmount, "pt-BR")}</Text>
          </Box>
        </Flex>
      </Card>

      {/* Lista de transações */}
      <TransactionList data={transactions} />
    </PageLayout>
  );
}
