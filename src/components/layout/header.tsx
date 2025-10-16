import { AppShell, Burger, Container, Group } from "@mantine/core";

export type HeaderProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ opened, setOpened }: HeaderProps) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger
          opened={opened}
          onClick={() => setOpened(() => !opened)}
          size="sm"
        />
      </Group>
    </AppShell.Header>
  );
}
