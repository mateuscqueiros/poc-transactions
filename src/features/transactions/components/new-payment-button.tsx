"use client";

import { Affix, Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function NewPaymentButton() {
  const router = useRouter();

  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <Button
        onClick={() => router.replace("/transactions/pix")}
        radius="xl"
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
    </Affix>
  );
}
