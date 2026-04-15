import { IntervalType } from "@/types/common";
import { createListCollection, Select } from "@chakra-ui/react";

const segments = createListCollection({
  items: [
    { label: "По дням", value: IntervalType.Days },
    { label: "По неделям", value: IntervalType.Weeks },
    { label: "По месяцам", value: IntervalType.Months },
  ],
});

type SelectIntervalProps = {
  onChoose: (intervalType: IntervalType) => void;
};

export const SelectInterval: React.FC<SelectIntervalProps> = ({ onChoose }) => {
  const handleValueChange = (details: { value: string[] }) => {
    if (details.value.length > 0) {
      onChoose(details.value[0] as IntervalType);
    }
  };

  return (
    <Select.Root
      collection={segments}
      width={160}
      variant="subtle"
      defaultValue={[IntervalType.Days]}
      onValueChange={handleValueChange}
    >
      <Select.Label>Интервал</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="По дням" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {segments.items.map((segment) => (
            <Select.Item item={segment} key={segment.value}>
              {segment.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
