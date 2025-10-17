"use client";

import { Card, Grid, GridCol, Title } from "@mantine/core";
import { PageLayout } from "../../../components/layout/page-layout";
import Link from "next/link";

const operations = [
  {
    name: "Digite a chave",
    url: "/transactions/pix/transfer",
  },
  {
    name: "Programar",
    url: "/transactions/pix/schedule",
  },
  {
    name: "Escanear QR Code",
    url: "/transactions/pix/scan",
  },
];

export default function CreatePage() {
  return (
    <PageLayout title="Área Pix">
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
