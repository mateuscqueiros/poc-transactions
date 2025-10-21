"use client";

import { Affix, Button } from "@mantine/core";
import { useState } from "react";
import { IconPix } from "../../../components/icons/icon-pix";
import { CreatePixModal } from "../modals/create-pix-modal";

export function NewPaymentButton() {
  const [opened, setOpened] = useState(false);

  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <Button
        radius="xl"
        size="lg"
        onClick={() => setOpened(true)}
        leftSection={<IconPix />}
      >
        Novo Pix
      </Button>

      <CreatePixModal opened={opened} setOpened={setOpened} />
    </Affix>
  );
}
