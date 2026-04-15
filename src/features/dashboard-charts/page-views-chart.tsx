import { MetricsCard } from "@/entities/metrics-card";
import { useGetWebsitePageViewsQuery } from "@/redux/services/api";
import type { IntervalType } from "@/types/common";

type PageViewsChartProps = {
  trackingCode: string;
  fromDate: Date | null;
  toDate: Date | null;
  intervalType: IntervalType | null;
};

export const PageViewsChart: React.FC<PageViewsChartProps> = ({
  trackingCode,
  fromDate,
  toDate,
  intervalType,
}) => {
  const { data: pageViewsData } = useGetWebsitePageViewsQuery({
    trackingCode,
    fromDate: fromDate?.toISOString(),
    toDate: toDate?.toISOString(),
    intervalType: intervalType ?? undefined,
  });

  // TODO: Заменить на Skeleton
  return pageViewsData ? (
    <MetricsCard
      title="Просмотры"
      totalValue={pageViewsData.totalPageViews}
      chartData={pageViewsData.intervalPageViews.map((chartItem) => ({
        startDate: new Date(chartItem.startDate).toLocaleDateString("ru-RU"),
        pageViews: chartItem.pageViews,
      }))}
      dataKey="pageViews"
    />
  ) : (
    "Загрузка!"
  );
};
