import { MetricsCard } from "@/entities/metrics-card";
import { useGetWebsiteVisitorsQuery } from "@/redux/services/api";
import type { IntervalType } from "@/types/common";

type VisitorsChartProps = {
  trackingCode: string;
  intervalType: IntervalType | null;
};

export const VisitorsChart: React.FC<VisitorsChartProps> = ({
  trackingCode,
  intervalType,
}) => {
  const { data } = useGetWebsiteVisitorsQuery({
    trackingCode,
    intervalType,
  });

  return data ? (
    <MetricsCard
      title="Посетители"
      totalValue={data.totalVisitors}
      chartData={data.intervalVisitors.map((item) => ({
        date: new Date(item.startDate).toLocaleDateString(),
        visitors: item.visitors,
      }))}
      dataKey="visitors"
    />
  ) : (
    "Загрузка!"
  );
};
