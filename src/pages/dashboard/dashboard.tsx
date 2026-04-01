import { ChooseWebsite } from "@/features/choose-website";
import { ChooseSegment, ChooseTimespan } from "@/features/dashboard-settings";
import { Charts } from "@/widgets/charts/charts";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

export const Dashboard = () => {
  const [selectedWebsiteId, setSelectedWebsiteId] = useState<string | null>(
    null,
  );

  return (
    <Flex direction="column" padding="1.5rem">
      <Box mb="1.5rem" alignSelf="flex-start">
        <ChooseWebsite onChoose={setSelectedWebsiteId} />
      </Box>
      <Box mb="1.5rem">
        <Flex direction="row" gap="1.5rem">
          <ChooseTimespan />
          <ChooseSegment />
        </Flex>
      </Box>
      {selectedWebsiteId && <Charts selectedWebsiteId={selectedWebsiteId} />}
    </Flex>
  );
};
