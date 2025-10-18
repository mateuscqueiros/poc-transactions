import { Card, Text } from "@mantine/core";
import { useFormContext } from "react-hook-form";

export const ReviewStepFields = [] as const;

export function ReviewStep() {
  const { watch } = useFormContext();
  const keyType = watch("keyType");
  const key = watch("key");
  const receiverName = watch("receiverName");
  const amount = watch("amount");

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Resumo do PIX
      </Text>
      <Card withBorder p="md">
        <Text>
          <b>Tipo de chave:</b> {keyType}
        </Text>
        <Text>
          <b>Chave:</b> {key}
        </Text>
        <Text>
          <b>Destinatário:</b> {receiverName}
        </Text>
        <Text>
          <b>Valor:</b> R$ {amount.toFixed(2)}
        </Text>
      </Card>
    </>
  );
}
