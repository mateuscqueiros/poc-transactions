import { Card, CardProps, Flex, Title } from "@mantine/core";

export type FloatingCardProps = {
  title?: string;
  icon?: React.ReactElement;
} & React.PropsWithChildren &
  CardProps;

export function FloatingCard({
  title,
  icon,
  children,
  style,
  ...cardProps
}: FloatingCardProps) {
  return (
    <Card
      shadow="xl"
      withBorder
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: 300,
        ...style,
      }}
      {...cardProps}
    >
      {(icon || title) && (
        <Flex gap="1rem" align="center" mb="md">
          {icon}
          {title && <Title order={3}>{title}</Title>}
        </Flex>
      )}
      <Flex direction="column" style={{ flex: 1 }}>
        {children}
      </Flex>
    </Card>
  );
}
