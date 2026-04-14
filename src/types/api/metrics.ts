import type { IntervalType } from "../common";

export interface GetMetricsParams {
  trackingCode: string;
  fromDate?: string | null;
  toDate?: string | null;
  intervalType?: IntervalType | null;
}

export type PageViewsResponse = {
  totalPageViews: number;
  intervalPageViews: IntervalPageViews[];
};

export type IntervalPageViews = {
  pageViews: number;
  startDate: string;
  endDate: string;
};

export type VisitsResponse = {
  totalVisits: number;
  intervalVisits: IntervalVisits[];
};

export type IntervalVisits = {
  visits: number;
  startDate: string;
  endDate: string;
};

export type VisitorsResponse = {
  totalVisitors: number;
  intervalVisitors: IntervalVisitors[];
};

export type IntervalVisitors = {
  visitors: number;
  startDate: string;
  endDate: string;
};
