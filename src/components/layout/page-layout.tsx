import { Flex, Title } from "@mantine/core";
import { ReactElement } from "react";

export type PageLayoutProps = {
  title?: string;
  description?: ReactElement;
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
    <Flex
      direction="column"
      style={{ maxWidth: pageWidth, margin: "0 auto" }}
      className="flex flex-col h-screen"
    >
      {title && <Title order={1}>{title}</Title>}
      {description && <p>{description}</p>}
      {children}
    </Flex>
  );
}
