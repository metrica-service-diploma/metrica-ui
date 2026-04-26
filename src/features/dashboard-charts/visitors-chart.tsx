import { MetricsCard } from "@/entities/metrics-card";
import { useGetWebsiteVisitorsQuery } from "@/redux/services/api";
import type { IntervalType } from "@/types/common";

type VisitorsChartProps = {
  trackingCode: string;
  fromDate: Date | null;
  toDate: Date | null;
  intervalType: IntervalType | null;
};

export const VisitorsChart: React.FC<VisitorsChartProps> = ({
  trackingCode,
  fromDate,
  toDate,
  intervalType,
}) => {
  const { data: visitorsData } = useGetWebsiteVisitorsQuery({
    trackingCode,
    fromDate: fromDate?.toISOString(),
    toDate: toDate?.toISOString(),
    intervalType: intervalType ?? undefined,
  });

  // TODO: Заменить на Skeleton
  return visitorsData ? (
    <MetricsCard
      title="Посетители"
      totalValue={visitorsData.totalVisitors}
      chartData={visitorsData.intervalVisitors.map((chartItem) => ({
        startDate: new Date(chartItem.startDate).toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "short",
        }),
        visitors: chartItem.visitors,
      }))}
      dataKey="visitors"
    />
  ) : (
    "Загрузка!"
  );
};
