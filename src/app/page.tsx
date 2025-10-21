"use client";

import { FloatingCard } from "../components/card";
import { TransactionList } from "../features/transactions/components/transaction-list";
import { useTransactions } from "../features/transactions/providers/transaction-provider";
import { Grid, GridCol, ScrollArea, Text, Box } from "@mantine/core";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const { data: transactions } = useTransactions();

  const defaultContainerSize = { base: 12, md: 6 };

  const AnimatedCard = ({ title }: { title: string }) => (
    <GridCol span={defaultContainerSize}>
      <FloatingCard
        pb={0}
        title={title}
        pr={0}
        style={{
          cursor: "pointer",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box
          style={{
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text c="dimmed">Exemplo</Text>
        </Box>
      </FloatingCard>
    </GridCol>
  );

  return (
    <div>
      <h1>Home Page</h1>
      <Grid gutter="md">
        <GridCol span={defaultContainerSize}>
          <FloatingCard pb={0} title="Transações" pr={0}>
            <ScrollArea style={{ height: 230 }} offsetScrollbars>
              <TransactionList data={transactions} />
            </ScrollArea>
          </FloatingCard>
        </GridCol>

        <AnimatedCard title="Dashboard" />
        <AnimatedCard title="Relatórios" />
        <AnimatedCard title="Pagamentos" />
        <AnimatedCard title="Configurações" />
        <AnimatedCard title="Estatísticas" />
      </Grid>
    </div>
  );
}
