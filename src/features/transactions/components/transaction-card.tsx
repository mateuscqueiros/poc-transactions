import { Flex, Group, Text } from "@mantine/core";
import { TransactionType } from "../types";
import { IconCategory } from "@tabler/icons-react";

import classes from "./transaction-card.module.css";
import dayjs from "dayjs";
import {
  formatClass,
  formatCurrency,
  getCategoryColor,
  getCategoryIcon,
} from "../lib/format";

export type TransactionCardProps = {
  data: TransactionType;
};

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="nowrap"
      style={{ width: "100%" }}
    >
      <Flex align="center" gap="xs" style={{ flex: 1, overflow: "hidden" }}>
        <Flex
          align="center"
          justify="center"
          w={40}
          h={40}
          style={{
            borderRadius: "50%",
            backgroundColor: getCategoryColor(data.class),
            color: "white",
          }}
        >
          {getCategoryIcon(data.class)}
        </Flex>

        <Flex direction="column" style={{ flex: 1, overflow: "hidden" }}>
          <Text
            fw={500}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.description}
          </Text>

          <Group align="center" gap={2} mt={2}>
            <Text size="sm" c="dimmed" truncate>
              {dayjs(data.completedAt).format("HH:mm")}
            </Text>
            <Text size="sm" c="dimmed">
              •
            </Text>
            <Text size="sm" c="dimmed" truncate>
              {formatClass(data.class)}
            </Text>
          </Group>
        </Flex>
      </Flex>

      {/* Valor */}
      <Text fw={700} ml="sm" style={{ whiteSpace: "nowrap" }}>
        {formatCurrency(data.amount, "pt-BR")}
      </Text>
    </Flex>
  );
}
