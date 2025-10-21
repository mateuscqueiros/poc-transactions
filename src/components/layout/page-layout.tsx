import { Flex, Title, Text } from "@mantine/core";
import { ReactNode } from "react";

export type PageLayoutProps = {
  title?: string;
  description?: ReactNode;
  size?: "sm" | "md" | "lg";
} & React.PropsWithChildren;

export function PageLayout({
  title,
  description,
  size = "md",
  children,
}: PageLayoutProps) {
  const pageWidth = size === "sm" ? 800 : size === "md" ? 1200 : 1500;

  return (
    <Flex direction="column" style={{ maxWidth: pageWidth, margin: "0 auto" }}>
      {title && (
        <Title mb={20} order={1}>
          {title}
        </Title>
      )}
      {description && <Text mb={20}>{description}</Text>}
      {children}
    </Flex>
  );
}
