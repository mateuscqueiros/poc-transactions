import { Flex, Box } from "@mantine/core";
import { TransactionType } from "../types";
import { TransactionCard } from "./transaction-card";

export type TransactionListProps = { data: TransactionType[] };

export function TransactionList({ data }: TransactionListProps) {
  return (
    <div style={{ position: "relative" }}>
      <Box
        style={{
          position: "absolute",
          top: 20,
          bottom: 20,
          left: 20,
          width: 2,
          backgroundColor: "rgba(0,0,0,0.1)",
          zIndex: 0,
        }}
      />
      <Flex direction="column" gap="xl">
        {data.map((item) => (
          <Flex
            key={item.id}
            align="flex-start"
            style={{ width: "100%", position: "relative", zIndex: 1 }}
          >
            <TransactionCard data={item} />
          </Flex>
        ))}
      </Flex>
    </div>
  );
}
