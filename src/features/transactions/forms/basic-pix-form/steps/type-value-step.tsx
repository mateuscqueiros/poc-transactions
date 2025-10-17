import { Text } from "@mantine/core";
import { useFormContext, Controller } from "react-hook-form";
import { CurrencyInput } from "../../../../../components/forms/inputs/currency-input";

export function TypeValueStep() {
  const { control } = useFormContext();

  return (
    <>
      <Text size="lg" fw={500} mb="sm">
        Digite o valor do PIX
      </Text>

      <Controller
        name="amount"
        control={control}
        rules={{ required: true, min: 1 }}
        render={({ field }) => (
          <CurrencyInput
            {...field}
            onChange={(val: any) => field.onChange(val)}
            placeholder="R$ 0,00"
          />
        )}
      />
    </>
  );
}
