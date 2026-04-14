import type { TimespanType } from "@/types/common";
import { createListCollection, Select } from "@chakra-ui/react";

const timespans = createListCollection({
  items: [
    { label: "Сегодня", value: "today" },
    { label: "Вчера", value: "yesterday" },
    { label: "Неделя", value: "week" },
    { label: "Месяц", value: "month" },
    { label: "Квартал", value: "quarter" },
  ],
});

type SelectTimespanProps = {
  onChoose: (timespanType: TimespanType) => void;
};

export const SelectTimespan: React.FC<SelectTimespanProps> = ({ onChoose }) => {
  const handleValueChange = (details: { value: string[] }) => {
    if (details.value.length > 0) {
      onChoose(details.value[0] as TimespanType);
    }
  };

  return (
    <Select.Root
      collection={timespans}
      width={160}
      variant="subtle"
      onValueChange={handleValueChange}
    >
      <Select.Label>Промежуток</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Неделя" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {timespans.items.map((timespan) => (
            <Select.Item item={timespan} key={timespan.value}>
              {timespan.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
