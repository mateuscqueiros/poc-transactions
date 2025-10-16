import { Card, CardProps, Flex, Title } from "@mantine/core";

export type FloatingCardProps = {
  title: string;
  icon: React.ReactElement;
} & React.PropsWithChildren &
  CardProps;

export function FloatingCard({
  title,
  icon,
  children,
  ...cardProps
}: FloatingCardProps) {
  return (
    <Card shadow="xl" {...cardProps}>
      <Flex gap="1rem" align="center">
        {icon}
        <Title order={3}>Transações</Title>
      </Flex>
      {children}
    </Card>
  );
}
