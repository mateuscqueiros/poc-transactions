"use client";

import { Button, Card, Grid, Group, Text, Flex } from "@mantine/core";
import { PageLayout } from "../../components/layout/page-layout";
import { useState } from "react";
import { CreateTransactionModal } from "../../features/transactions/components/modals/create-transaction-modal";
import {
  IconBolt,
  IconArrowUpRight,
  IconArrowDownLeft,
} from "@tabler/icons-react";

export default function CreatePage() {
  const [pixModalOpen, setPixModalOpen] = useState(false);

  const defaultContainerSize = { base: 12, md: 6 };

  return (
    <PageLayout
      title="Área Pix"
      description="Bem-vindo à Área Pix, onde você pode realizar transferências rápidas e gerencia pagamentos."
    >
      <Grid gutter="md" mb="lg">
        <Grid.Col span={defaultContainerSize}>
          <Card
            withBorder
            p="lg"
            style={{ cursor: "pointer" }}
            onClick={() => setPixModalOpen(true)}
          >
            <Flex align="center" gap="md">
              <IconBolt size={32} color="#1E90FF" />
              <div>
                <Text fw={600}>Pix</Text>
                <Text size="sm" c="dimmed">
                  Transferência instantânea
                </Text>
              </div>
            </Flex>
          </Card>
        </Grid.Col>

        <Grid.Col span={defaultContainerSize}>
          <Card withBorder p="lg" style={{ cursor: "pointer" }}>
            <Flex align="center" gap="md">
              <IconArrowUpRight size={32} color="#52C41A" />
              <div>
                <Text fw={600}>Depósito</Text>
                <Text size="sm" c="dimmed">
                  Adicionar saldo à conta
                </Text>
              </div>
            </Flex>
          </Card>
        </Grid.Col>

        <Grid.Col span={defaultContainerSize}>
          <Card withBorder p="lg" style={{ cursor: "pointer" }}>
            <Flex align="center" gap="md">
              <IconArrowDownLeft size={32} color="#FF4D4F" />
              <div>
                <Text fw={600}>Débito/Transferência</Text>
                <Text size="sm" c="dimmed">
                  Enviar dinheiro para outra conta
                </Text>
              </div>
            </Flex>
          </Card>
        </Grid.Col>
      </Grid>

      <CreateTransactionModal
        opened={pixModalOpen}
        setOpened={setPixModalOpen}
      />
    </PageLayout>
  );
}
