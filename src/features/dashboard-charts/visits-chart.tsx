import { MetricsCard } from "@/entities/metrics-card";
import { useGetWebsiteVisitsQuery } from "@/redux/services/api";
import type { IntervalType } from "@/types/common";

type VisitsChartProps = {
  trackingCode: string;
  intervalType: IntervalType | null;
};

export const VisitsChart: React.FC<VisitsChartProps> = ({
  trackingCode,
  intervalType,
}) => {
  const { data } = useGetWebsiteVisitsQuery({
    trackingCode,
    intervalType,
  });

  return data ? (
    <MetricsCard
      title="Визиты"
      totalValue={data.totalVisits}
      chartData={data.intervalVisits.map((item) => ({
        date: new Date(item.startDate).toLocaleDateString(),
        visits: item.visits,
      }))}
      dataKey="visits"
    />
  ) : (
    "Загрузка!"
  );
};
