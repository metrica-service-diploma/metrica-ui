import { MetrcisCard } from "@/entities/metrics-card";
import {
  useGetWebsitePageViewsQuery,
  useGetWebsiteVisitorsQuery,
  useGetWebsiteVisitsQuery,
} from "@/redux/services/api";
import { Grid, Heading } from "@chakra-ui/react";

// TODO: добавить отображение количества по типу 68,7 тыс

type ChartsProps = {
  selectedWebsiteId: string;
};

export const Charts: React.FC<ChartsProps> = ({ selectedWebsiteId }) => {
  const { data: pageViews } = useGetWebsitePageViewsQuery({
    trackingCode: selectedWebsiteId,
  });
  const { data: visits } = useGetWebsiteVisitsQuery({
    trackingCode: selectedWebsiteId,
  });
  const { data: visitors } = useGetWebsiteVisitorsQuery({
    trackingCode: selectedWebsiteId,
  });

  return (
    <>
      <Heading size="2xl" mb="1.5rem">
        Ключевые метрики
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" mb="1.5rem" columnGap={5}>
        {pageViews && (
          <MetrcisCard heading="Просмотры" value={pageViews.totalPageViews} />
        )}
        {visits && <MetrcisCard heading="Визиты" value={visits.totalVisits} />}
        {visitors && (
          <MetrcisCard heading="Посетители" value={visitors.totalVisitors} />
        )}
      </Grid>
      <Heading size="2xl" mb="1.5rem">
        Источники трафика
      </Heading>
      <Heading size="2xl" mb="1.5rem">
        Поведение пользователей на сайте
      </Heading>
    </>
  );
};
