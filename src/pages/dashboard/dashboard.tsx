import {
  SelectInterval,
  SelectTimespan,
  SelectWebsite,
} from "@/features/dashboard-settings";
import type { IntervalType, TimespanType } from "@/types/common";
import { DashboardCharts } from "@/widgets/dashboard-charts/dashboard-charts";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

// TODO: Вынести настройки в redux, чтобы избежать props-drilling
// TODO: Отображение trackingCode, промежутка и интервала в строке запроса

type DashboardSettings = {
  trackingCode: string | null;
  timespanType: TimespanType | null;
  intervalType: IntervalType | null;
};

export const Dashboard = () => {
  const [dashboardSettings, setDashboardSettings] = useState<DashboardSettings>(
    { trackingCode: null, timespanType: null, intervalType: null },
  );

  return (
    <Flex direction="column" padding="1.5rem">
      <Box mb="1.5rem" alignSelf="flex-start">
        <SelectWebsite
          onChoose={(trackingCode) =>
            setDashboardSettings({ ...dashboardSettings, trackingCode })
          }
        />
      </Box>
      <Box mb="1.5rem">
        <Flex direction="row" gap="1.5rem">
          <SelectTimespan
            onChoose={(timespanType) =>
              setDashboardSettings({ ...dashboardSettings, timespanType })
            }
          />
          <SelectInterval
            onChoose={(intervalType) =>
              setDashboardSettings({ ...dashboardSettings, intervalType })
            }
          />
        </Flex>
      </Box>
      {dashboardSettings.trackingCode && (
        <DashboardCharts
          trackingCode={dashboardSettings.trackingCode}
          timespanType={dashboardSettings.timespanType}
          intervalType={dashboardSettings.intervalType}
        />
      )}
    </Flex>
  );
};
