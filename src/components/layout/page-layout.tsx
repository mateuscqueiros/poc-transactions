import { Flex, Title } from "@mantine/core";

export type PageLayoutProps = {
  title?: string;
  size?: "sm" | "md" | "lg";
} & React.PropsWithChildren;

export function PageLayout({ title, size = "md", children }: PageLayoutProps) {
  const pageWidth = size === "sm" ? 800 : size === "md" ? 1200 : 1500;
  return (
    <Flex
      direction="column"
      style={{ maxWidth: pageWidth, margin: "0 auto" }}
      className="flex flex-col h-screen"
    >
      {title && (
        <Title style={{ marginBottom: "2rem" }} order={1}>
          {title}
        </Title>
      )}
      {children}
    </Flex>
  );
}
