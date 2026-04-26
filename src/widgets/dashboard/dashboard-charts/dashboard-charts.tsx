import {
  PageViewsChart,
  VisitorsChart,
  VisitsChart,
} from "@/features/dashboard-charts";
import { dashboardSettingsSelector } from "@/redux/modules/dashboard";
import { getDatesFromTimespanType } from "@/utils/dashboard";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const DashboardCharts = () => {
  const { trackingCode, timespanType, intervalType } = useSelector(
    dashboardSettingsSelector,
  );

  const dates = timespanType
    ? getDatesFromTimespanType(timespanType)
    : { fromDate: null, toDate: null };

  return (
    <Flex direction="column" gapY={5}>
      <Heading size="2xl">
        Ключевые метрики
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {trackingCode && (
          <>
            <GridItem>
              <PageViewsChart
                trackingCode={trackingCode}
                intervalType={intervalType}
                {...dates}
              />
            </GridItem>
            <GridItem>
              <VisitsChart
                trackingCode={trackingCode}
                intervalType={intervalType}
                {...dates}
              />
            </GridItem>
            <GridItem>
              <VisitorsChart
                trackingCode={trackingCode}
                intervalType={intervalType}
                {...dates}
              />
            </GridItem>
          </>
        )}
      </Grid>
      {/* <Heading size="2xl" mb="1.5rem">
        Кастомные метрики
      </Heading> */}
    </Flex>
  );
};
