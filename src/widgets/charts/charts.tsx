import { MetrcisCard } from "@/entities/metrics-card";
import { useGetWebsitePageViewsQuery } from "@/redux/services/api";
import { Grid, Heading } from "@chakra-ui/react";

// TODO: добавить отображение количества по типу 68,7 тыс

type ChartsProps = {
  selectedWebsiteId: string;
};

export const Charts: React.FC<ChartsProps> = ({ selectedWebsiteId }) => {
  const { data } = useGetWebsitePageViewsQuery({
    websiteId: selectedWebsiteId,
  });

  return data ? (
    <>
      <Heading size="2xl" mb="1.5rem">
        Ключевые метрики
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" mb="1.5rem" columnGap={5}>
        <MetrcisCard heading="Просмотры" value={data.totalPageViews} />
        <MetrcisCard heading="Визиты" value={61} />
        <MetrcisCard heading="Посетители" value={34} />
      </Grid>
      <Heading size="2xl" mb="1.5rem">
        Источники трафика
      </Heading>
      <Heading size="2xl" mb="1.5rem">
        Поведение пользователей на сайте
      </Heading>
    </>
  ) : (
    "Загрузка!"
  );
};
