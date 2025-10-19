import { useFormContext } from "react-hook-form";
import {
  Text,
  Group,
  Avatar,
  Stack,
  Divider,
  Title,
  Paper,
} from "@mantine/core";
import { formatCurrency, formatKeyType } from "../../../lib/format";
import { BasicPixFormType } from "../basic-pix-form";
import { TransactionKeyType } from "../../../types";

export function ConfirmReceiverStep() {
  const { watch } = useFormContext<BasicPixFormType>();

  const key = watch("key");
  const keyType = watch("keyType");
  const amount = watch("amount");

  const Item = ({ label, value }: { label: string; value: string }) => (
    <Group justify="space-between" style={{ fontSize: 14 }}>
      <Text fw={600}>{label}</Text>
      <Text c="gray.8">{value}</Text>
    </Group>
  );

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Confirmar destinatário
      </Text>
      <Group mb="xs">
        <Avatar radius="xl" size="lg" color="indigo">
          JS
        </Avatar>
        <div>
          <Text fw={700}>João da Silva</Text>
          <Text size="sm" c="dimmed">
            CPF: 300.939.996-07
          </Text>
        </div>
      </Group>

      <Divider my="xs" />

      <Stack gap="sm">
        <Item label="Banco" value="Banco Itaú • 341" />
        <Item label="Agência" value="7384" />
        <Item label="Conta" value="519440-4" />
        <Item label="Tipo" value="Conta Corrente" />
      </Stack>

      <Divider my="xs" />

      <Stack gap={2}>
        <Title size="md" mb={8} fw={600}>
          Chave PIX
        </Title>
        <Item
          label={formatKeyType(keyType as TransactionKeyType)}
          value={key}
        />
      </Stack>

      {amount && (
        <>
          <Paper
            withBorder
            p="md"
            radius="md"
            mt="lg"
            style={{ backgroundColor: "#f0f4ff" }}
          >
            <Text size="sm" c="dimmed">
              Valor a ser transferido
            </Text>
            <Text size="xl" fw={700}>
              {formatCurrency(amount)}
            </Text>
          </Paper>
        </>
      )}
    </>
  );
}
