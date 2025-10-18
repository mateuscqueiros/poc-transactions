import { Card, Grid, Group, Radio, Text } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { BasicPixFormType } from "../basic-pix-form";

const keyTypes = [
  { name: "CPF", value: "cpf" },
  { name: "CNPJ", value: "cnpj" },
  { name: "Telefone", value: "phone" },
  { name: "E-mail", value: "email" },
  { name: "Chave aleatória", value: "random" },
];

export function KeyTypeStep() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    resetField,
  } = useFormContext<BasicPixFormType>();
  const keyType = watch("keyType");

  register("keyType", { required: "Selecione um tipo de chave" });

  const handleChange = (v: string) => {
    setValue("keyType", v);
    resetField("key");
  };

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Escolha o tipo da chave PIX
      </Text>

      <Radio.Group value={keyType} onChange={handleChange} name="keyType">
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
    </>
  );
}
