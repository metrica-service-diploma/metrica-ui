import { TimespanType } from "@/types/common";

export const getDatesFromTimespanType = (
  timespanType: TimespanType,
): {
  fromDate: Date;
  toDate: Date;
} => {
  const dateNow = new Date(Date.now());
  const fromDate = new Date(dateNow.setHours(0, 0, 0, 0));
  const toDate = new Date(dateNow.setHours(23, 59, 59, 999));

  switch (timespanType) {
    case TimespanType.Today:
      return {
        fromDate: fromDate,
        toDate: toDate,
      };
    case TimespanType.Yesterday:
      return {
        fromDate: new Date(fromDate.setDate(dateNow.getDate() - 1)),
        toDate: new Date(toDate.setDate(dateNow.getDate() - 1)),
      };
    case TimespanType.Week:
      return {
        fromDate: new Date(fromDate.setDate(dateNow.getDate() - 6)),
        toDate: new Date(toDate.setDate(dateNow.getDate())),
      };
    case TimespanType.Month:
      return {
        fromDate: new Date(fromDate.setDate(dateNow.getDate() - 29)),
        toDate: new Date(toDate.setDate(dateNow.getDate())),
      };
    case TimespanType.Quarter:
      return {
        fromDate: new Date(fromDate.setDate(dateNow.getDate() - 89)),
        toDate: new Date(toDate.setDate(dateNow.getDate())),
      };
  }
};
