import { MetrcisCard } from "@/entities/metrics-card";
import { ChooseWebsite } from "@/features/choose-website";
import { ChooseSegment, ChooseTimespan } from "@/features/dashboard-settings";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";

export const Dashboard = () => {
  return (
    <Flex direction="column" padding="1.5rem">
      <Box mb="1.5rem" alignSelf="flex-start">
        <ChooseWebsite />
      </Box>
      <Box mb="1.5rem">
        <Flex direction="row" gap="1.5rem">
          <ChooseTimespan />
          <ChooseSegment />
        </Flex>
      </Box>
      <Heading size="2xl" mb="1.5rem">
        Ключевые метрики
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" mb="1.5rem" columnGap={5}>
        <MetrcisCard heading="Посетители" value="34,1 тыс" />
        <MetrcisCard heading="Визиты" value="61 тыс" />
        <MetrcisCard heading="Просмотры" value="68,7 тыс" />
      </Grid>
      <Heading size="2xl" mb="1.5rem">
        Источники трафика
      </Heading>
      <Heading size="2xl" mb="1.5rem">
        Поведение пользователей на сайте
      </Heading>
    </Flex>
  );
};
