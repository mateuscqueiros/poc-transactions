import { Container, Flex, Title, Text } from "@mantine/core";
import { IconBarrierBlock } from "@tabler/icons-react";

export function UnderDevelopment() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ alignSelf: "center", justifySelf: "center" }}
    >
      {/* <IconBarrierBlock size={100} /> */}
      <Title order={3} my={10}>
        Under Development
      </Title>
      <Text m={0}>This component is under development.</Text>
    </Flex>
  );
}

export function UnderDevelopmentPage() {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <UnderDevelopment />
    </Container>
  );
}
