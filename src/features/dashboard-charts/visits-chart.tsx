import { MetricsCard } from "@/entities/metrics-card";
import { useGetWebsiteVisitsQuery } from "@/redux/services/api";
import type { IntervalType } from "@/types/common";

type VisitsChartProps = {
  trackingCode: string;
  fromDate: Date | null;
  toDate: Date | null;
  intervalType: IntervalType | null;
};

export const VisitsChart: React.FC<VisitsChartProps> = ({
  trackingCode,
  fromDate,
  toDate,
  intervalType,
}) => {
  const { data: visitsData } = useGetWebsiteVisitsQuery({
    trackingCode,
    fromDate: fromDate?.toISOString(),
    toDate: toDate?.toISOString(),
    intervalType: intervalType ?? undefined,
  });

  // TODO: Заменить на Skeleton
  return visitsData ? (
    <MetricsCard
      title="Визиты"
      totalValue={visitsData.totalVisits}
      chartData={visitsData.intervalVisits.map((chartItem) => ({
        startDate: new Date(chartItem.startDate).toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "short",
        }),
        visits: chartItem.visits,
      }))}
      dataKey="visits"
    />
  ) : (
    "Загрузка!"
  );
};
