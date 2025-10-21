import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../lib/theme";
import { Metadata } from "next";
import { Layout } from "../components/layout";
import { TransactionsProvider } from "../features/transactions/providers/transaction-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "POC Pix",
  description: "Aplicativo de demonstração para o POC Pix",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <TransactionsProvider>
            <Layout>{children}</Layout>
            <Toaster richColors />
          </TransactionsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
