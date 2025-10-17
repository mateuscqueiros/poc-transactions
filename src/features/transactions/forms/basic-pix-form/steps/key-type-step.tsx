import { Button, Card, Grid, Group, Radio, Text } from "@mantine/core";
import { useFormContext } from "react-hook-form";

const keyTypes = [
  { name: "CPF/CNPJ", value: "cpf" },
  { name: "Celular", value: "telefone" },
  { name: "E-mail", value: "email" },
  { name: "Chave aleatória", value: "aleatoria" },
];

function KeyTypeCard({
  name,
  value,
  selected,
}: (typeof keyTypes)[0] & { selected: boolean }) {
  const { setValue } = useFormContext();
  return (
    <Card
      withBorder
      radius="md"
      p="md"
      onClick={() => setValue("keyType", value)}
      style={{
        cursor: "pointer",
        borderColor: selected
          ? "var(--mantine-color-itau-orange-6)"
          : "var(--mantine-color-gray-3)",
        backgroundColor: selected
          ? "var(--mantine-primary-color-light)"
          : "transparent",
      }}
    >
      <Group justify="space-between" align="center">
        <Text fw={selected ? 600 : 400}>{name}</Text>
        <Radio
          value={value}
          checked={selected}
          onChange={() => setValue("keyType", value)}
        />
      </Group>
    </Card>
  );
}

export function KeyTypeStep() {
  const { watch, setValue } = useFormContext();
  const keyType = watch("keyType");

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Escolha o tipo da chave PIX
      </Text>

      <Radio.Group
        value={keyType}
        onChange={(v) => setValue("keyType", v)}
        name="keyType"
      >
        <Grid>
          {keyTypes.map(({ name, value }) => {
            const selected = keyType === value;
            return (
              <Grid.Col span={6} key={value}>
                <KeyTypeCard name={name} value={value} selected={selected} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Radio.Group>
    </>
  );
}
