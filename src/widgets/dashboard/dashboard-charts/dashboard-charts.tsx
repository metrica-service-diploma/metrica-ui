import {
  PageViewsChart,
  VisitorsChart,
  VisitsChart,
} from "@/features/dashboard-charts";
import { dashboardSettingsSelector } from "@/redux/modules/dashboard";
import { getDatesFromTimespanType } from "@/utils/dashboard";
import { Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const DashboardCharts = () => {
  const { trackingCode, timespanType, intervalType } = useSelector(
    dashboardSettingsSelector,
  );

  const dates = timespanType
    ? getDatesFromTimespanType(timespanType)
    : { fromDate: null, toDate: null };

  return (
    <Flex direction="column">
      <Heading size="2xl" mb="1.5rem">
        Ключевые метрики
      </Heading>
      <Flex direction="column" gap="1.5rem">
        {trackingCode && (
          <>
            <PageViewsChart
              trackingCode={trackingCode}
              intervalType={intervalType}
              {...dates}
            />
            <VisitsChart
              trackingCode={trackingCode}
              intervalType={intervalType}
              {...dates}
            />
            <VisitorsChart
              trackingCode={trackingCode}
              intervalType={intervalType}
              {...dates}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};
