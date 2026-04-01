export enum IntervalType {
  Days = "Days",
  Weeks = "Weeks",
  Months = "Months",
}

export type IntervalPageViews = {
  pageViews: number;
  startDate: string;
  endDate: string;
};

export type PageViewsResponse = {
  websiteId: string;
  totalPageViews: number;
  intervalPageViews: IntervalPageViews[];
};

export interface GetPageViewsParams {
  websiteId: string;
  from?: string;
  to?: string;
  interval?: IntervalType;
}
