import { dashboardSettingsSelector } from "@/redux/modules/dashboard";
import { DashboardCharts } from "@/widgets/dashboard/dashboard-charts/dashboard-charts";
import { DashboardSettings } from "@/widgets/dashboard/dashboard-settings/dashboard-settings";
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
