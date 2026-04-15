import { Flex, Heading } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts";
import type { ChartData } from "recharts/types/state/chartDataSlice";

type MetricsCardProps = {
  title: string;
  totalValue: number;
  chartData: ChartData<unknown>;
  dataKey: string;
};

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  totalValue,
  chartData,
  dataKey,
}) => (
  <Flex
    direction="column"
    gap="1rem"
    padding="0.75rem"
    minHeight="12.5rem"
    backgroundColor="gray.100"
    border="1px solid black"
    borderRadius={15}
  >
    <Heading size="lg">
      {title}: {totalValue}
    </Heading>
    <ResponsiveContainer width="100%">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="startDate" />
        <YAxis />
        <Line type="linear" dataKey={dataKey} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </Flex>
);
