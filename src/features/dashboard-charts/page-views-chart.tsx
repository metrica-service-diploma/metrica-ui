import { MetricsCard } from "@/entities/metrics-card";
import { useGetWebsitePageViewsQuery } from "@/redux/services/api";
import type { IntervalType } from "@/types/common";

type PageViewsChartProps = {
  trackingCode: string;
  intervalType: IntervalType | null;
};

export const PageViewsChart: React.FC<PageViewsChartProps> = ({
  trackingCode,
  intervalType,
}) => {
  const { data } = useGetWebsitePageViewsQuery({
    trackingCode,
    intervalType,
  });

  return data ? (
    <MetricsCard
      title="Просмотры"
      totalValue={data.totalPageViews}
      chartData={data.intervalPageViews.map((item) => ({
        date: new Date(item.startDate).toLocaleDateString(),
        pageViews: item.pageViews,
      }))}
      dataKey="pageViews"
    />
  ) : (
    "Загрузка!"
  );
};
