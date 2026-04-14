import {
  PageViewsChart,
  VisitorsChart,
  VisitsChart,
} from "@/features/dashboard-charts";
import type { TimespanType, IntervalType } from "@/types/common";
import { Flex, Heading } from "@chakra-ui/react";

type DashboardChartsProps = {
  trackingCode: string;
  timespanType: TimespanType | null;
  intervalType: IntervalType | null;
};

export const DashboardCharts: React.FC<DashboardChartsProps> = ({
  trackingCode,
  intervalType,
}) => (
  <Flex direction="column">
    <Heading size="2xl" mb="1.5rem">
      Ключевые метрики
    </Heading>
    <Flex direction="column" gap={7}>
      <PageViewsChart trackingCode={trackingCode} intervalType={intervalType} />
      <VisitsChart trackingCode={trackingCode} intervalType={intervalType} />
      <VisitorsChart trackingCode={trackingCode} intervalType={intervalType} />
    </Flex>
  </Flex>
);
