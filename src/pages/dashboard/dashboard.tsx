import { dashboardSettingsSelector } from "@/redux/modules/dashboard";
import { DashboardCharts, DashboardSettings } from "@/widgets/dashboard";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const { trackingCode } = useSelector(dashboardSettingsSelector);

  return (
    <Flex direction="column" gap="1.5rem" padding="1.5rem">
      <DashboardSettings />
      {trackingCode && <DashboardCharts />}
    </Flex>
  );
};
