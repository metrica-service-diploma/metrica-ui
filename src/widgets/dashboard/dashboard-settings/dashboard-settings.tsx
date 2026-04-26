import {
  SelectInterval,
  SelectTimespan,
  SelectWebsite,
} from "@/features/dashboard-settings";
import {
  dashboardSettingsSelector,
  setDashboardSettings,
} from "@/redux/modules/dashboard";
import { useAppDispatch } from "@/redux/store";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

// TODO: Отображение trackingCode, промежутка и интервала в строке запроса

export const DashboardSettings = () => {
  const dispatch = useAppDispatch();
  const dashboardSettings = useSelector(dashboardSettingsSelector);

  return (
    <Flex direction="column" gap="1.5rem">
      <SelectWebsite
        trackingCode={dashboardSettings.trackingCode}
        onChoose={(trackingCode) =>
          dispatch(setDashboardSettings({ ...dashboardSettings, trackingCode }))
        }
      />
      <Flex direction="row" gap="1.5rem">
        <SelectTimespan
          onChoose={(timespanType) =>
            dispatch(
              setDashboardSettings({ ...dashboardSettings, timespanType }),
            )
          }
        />
        <SelectInterval
          onChoose={(intervalType) =>
            dispatch(
              setDashboardSettings({ ...dashboardSettings, intervalType }),
            )
          }
        />
      </Flex>
    </Flex>
  );
};
