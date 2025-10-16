"use client";

import { AppShell, Burger, Drawer, Group, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "./navbar";

export function Navigation() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <AppShell.Header hiddenFrom="sm">
        <Group h="100%" px="md" justify="space-between">
          <Burger
            opened={opened}
            onClick={toggle}
            size="xs"
            aria-label="Abrir menu"
          />
          <span style={{ fontWeight: 600, fontSize: rem(18) }}>Meu App</span>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p={0} visibleFrom="sm">
        <Navbar />
      </AppShell.Navbar>

      <Drawer
        opened={opened}
        onClose={close}
        size={250}
        hiddenFrom="sm"
        withCloseButton={true}
        overlayProps={{ opacity: 0.55, blur: 3 }}
        styles={{ body: { padding: 0, height: "calc(100% - 60px)" } }}
        title="Meu App"
      >
        <Navbar isMobile />
      </Drawer>
    </>
  );
}
