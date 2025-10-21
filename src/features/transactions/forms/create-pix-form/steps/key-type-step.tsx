import { Card, Container, Grid, Group, Radio, Text } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { TransactionFormType, TransactionKeyType } from "../../../types";

const keyTypes = [
  { name: "CPF", value: TransactionKeyType.CPF },
  { name: "CNPJ", value: TransactionKeyType.CNPJ },
  { name: "Telefone", value: TransactionKeyType.Phone },
  { name: "E-mail", value: TransactionKeyType.Email },
  { name: "Chave aleatória", value: TransactionKeyType.Random },
];

export function KeyTypeStep() {
  const {
    watch,
    setValue,
    resetField,
    formState: { errors },
    register,
  } = useFormContext<TransactionFormType>();

  const keyType = watch("keyType");

  register("keyType", { required: "Selecione um tipo de chave" });

  const handleChange = (value: TransactionKeyType) => {
    setValue("keyType", value);
    resetField("key");
  };

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Escolha o tipo da chave PIX
      </Text>

      <Container p={0}>
        <Radio.Group
          value={keyType}
          onChange={(v: string) => handleChange(v as TransactionKeyType)}
          name="keyType"
        >
          <Grid>
            {keyTypes.map(({ name, value }) => (
              <Grid.Col span={6} key={value}>
                <Card
                  withBorder
                  radius="md"
                  p="md"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleChange(value)}
                >
                  <Group justify="space-between" align="center">
                    <Text fw={keyType === value ? 600 : 400}>{name}</Text>
                    <Radio value={value} />
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Radio.Group>

        {errors.keyType && (
          <Text c="red" size="sm" mt="xs">
            {errors.keyType.message}
          </Text>
        )}
      </Container>
    </>
  );
}
