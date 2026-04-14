import { Flex, Heading, Text } from "@chakra-ui/react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
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
  <Flex p={3} gap={4} border="1px solid black" borderRadius={15} bg="gray.100">
    <Flex direction="column" width="150px">
      <Heading size="lg">{title}</Heading>
      <Text>{totalValue}</Text>
    </Flex>
    <ResponsiveContainer width="100%">
      <LineChart data={chartData}>
        <Line type="linear" dataKey={dataKey} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </Flex>
);
