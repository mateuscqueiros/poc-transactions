import { Flex, Text } from "@mantine/core";
import { TransactionType } from "../types";
import { IconCategory } from "@tabler/icons-react";

import classes from "./transaction-card.module.css";
import dayjs from "dayjs";
import { formatClass, formatCurrency } from "../lib/format";

export type TransactionCardProps = {
  data: TransactionType;
};

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Flex align="center" justify="space-between">
      <Flex className="left-side" align="center" gap="xs">
        <div className={classes.category}>
          <IconCategory />
        </div>
        <Flex justify="center" className="transaction-info" direction="column">
          <span>{data.description}</span>
          <Flex className="transaction-details">
            <Text size="sm">{dayjs(data.completedAt).format("HH:mm")}</Text>
            <Text>•</Text>
            <Text size="sm">{formatClass(data.class)}</Text>
          </Flex>
        </Flex>
      </Flex>
      <div>
        <Text fw={700}>{formatCurrency(data.value, "pt-BR")}</Text>
      </div>
    </Flex>
  );
}
