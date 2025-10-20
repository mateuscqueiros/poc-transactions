import { Button, Divider, Group } from "@mantine/core";

export type StepControlsProps = {
  active: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
};

export function StepControls({
  active,
  total,
  onNext,
  onPrev,
}: StepControlsProps) {
  const isFirstStep = active === 0;
  const isLastStep = active === total - 1;

  return (
    <div style={{ marginTop: "2rem" }}>
      <Divider />
      <Group justify="space-between" mt="md">
        <div>
          {!isFirstStep && (
            <Button type="button" disabled={isFirstStep} onClick={onPrev}>
              Voltar
            </Button>
          )}
        </div>

        <div>
          {!isLastStep ? (
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onNext();
              }}
            >
              Continuar
            </Button>
          ) : (
            <Button type="submit">Finalizar</Button>
          )}
        </div>
      </Group>
    </div>
  );
}
