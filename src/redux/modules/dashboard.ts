import { IntervalType, TimespanType } from "@/types/common";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type DashboardState = {
  trackingCode: string | null;
  timespanType: TimespanType | null;
  intervalType: IntervalType | null;
};

export const initialState: DashboardState = {
  trackingCode: null,
  timespanType: TimespanType.Month,
  intervalType: IntervalType.Days,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardSettings: (
      state,
      {
        payload: { trackingCode, timespanType, intervalType },
      }: PayloadAction<DashboardState>,
    ) => {
      state.trackingCode = trackingCode;
      state.timespanType = timespanType;
      state.intervalType = intervalType;
    },
  },
  selectors: {
    dashboardSettingsSelector: (state) => state,
  },
});

export const { dashboardSettingsSelector } = dashboardSlice.selectors;
export const { setDashboardSettings } = dashboardSlice.actions;
