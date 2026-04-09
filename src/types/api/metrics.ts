export enum IntervalType {
  Days = "Days",
  Weeks = "Weeks",
  Months = "Months",
}

export interface GetMetricsParams {
  trackingCode: string;
  from?: string;
  to?: string;
  interval?: IntervalType;
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
