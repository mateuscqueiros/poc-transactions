import { Flex } from "@mantine/core";
import { TransactionType } from "../types";
import { TransactionCard } from "./transaction-card";
import { FloatingCard } from "../../../components/card";
import { IconMoneybag } from "@tabler/icons-react";

export type TransactionListProps = { data: TransactionType[] };

export function TransactionList({ data }: TransactionListProps) {
  return (
    <FloatingCard title="Transações" icon={<IconMoneybag />}>
      <Flex direction="column" gap="md">
        {data.map((item) => (
          <TransactionCard key={item.id} data={item} />
        ))}
      </Flex>
    </FloatingCard>
  );
}
