import { Card, Text } from "@mantine/core";
import { useFormContext } from "react-hook-form";

export function ConfirmReceiverStep() {
  const { watch } = useFormContext();

  const receiverName = watch("receiverName");
  const key = watch("key");

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Confirmar destinatário
      </Text>
      <Card withBorder p="md">
        <Text>
          Nome: <b>João da Silva</b>
        </Text>
        <Text>Chave: {key}</Text>
      </Card>
    </>
  );
}
