"use client";

import { Affix, Button } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { CreateTransactionModal } from "./modals/create-transaction-modal";

export function NewPaymentButton() {
  const [opened, setOpened] = useState(false);

  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <Button
        radius="xl"
        size="lg"
        onClick={() => setOpened(true)}
        leftSection={
          <Image
            width={16}
            height={16}
            alt="Pix Logo"
            src="/pix-logo-white.png"
          />
        }
      >
        Novo Pix
      </Button>

      <CreateTransactionModal opened={opened} setOpened={setOpened} />
    </Affix>
  );
}
