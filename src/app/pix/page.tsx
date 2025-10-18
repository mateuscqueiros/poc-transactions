"use client";

import {
  Button,
  Card,
  Grid,
  GridCol,
  Title,
  Modal,
  Group,
  Text,
  ScrollArea,
} from "@mantine/core";
import { PageLayout } from "../../components/layout/page-layout";
import Link from "next/link";
import { useState } from "react";
import { BasicPixForm } from "../../features/transactions/forms/basic-pix-form/basic-pix-form";

const operations = [
  {
    name: "Digite a chave",
    url: "/pix/transfer",
  },
  {
    name: "Programar",
    url: "/pix/schedule",
  },
  {
    name: "Escanear QR Code",
    url: "/pix/scan",
  },
];

export default function CreatePage() {
  const [pixModalOpen, setPixModalOpen] = useState(false);
  return (
    <PageLayout
      title="Área Pix"
      description={
        <>Bem vindo ao Área Pix, onde você pode realizar transferências.</>
      }
    >
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Selecione a operação
      </Title>
      <Grid>
        {operations.map((props) => (
          <GridCol key={props.name} span={6}>
            <OperationCard {...props} />
          </GridCol>
        ))}
      </Grid>
      <Group mt="xl">
        <Button size="sm" onClick={() => setPixModalOpen(true)}>
          Abrir modal
        </Button>
      </Group>

      <Modal
        size="lg"
        mih={800}
        title="Transferir via PIX"
        opened={pixModalOpen}
        onClose={() => setPixModalOpen(false)}
        styles={{
          root: {
            height: 800,
          },
        }}
      >
        <BasicPixForm />
      </Modal>
    </PageLayout>
  );
}

function OperationCard({ name, url }: { name: string; url: string }) {
  return (
    <Card withBorder component={Link} href={url}>
      <div>{name}</div>
    </Card>
  );
}
