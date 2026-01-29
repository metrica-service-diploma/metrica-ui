import { Box, Flex, Heading, Text } from "@chakra-ui/react";

type MetrcisCardProps = {
  heading: string;
  value: string;
};

export const MetrcisCard: React.FC<MetrcisCardProps> = ({ heading, value }) => {
  return (
    <Flex
      p={3}
      gap={4}
      border="1px solid black"
      borderRadius={15}
      bg="gray.100"
    >
      <Flex direction="column">
        <Heading size="lg">{heading}</Heading>
        <Text>{value}</Text>
      </Flex>
      <Box background="black" width="100%"></Box>
    </Flex>
  );
};
