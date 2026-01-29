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

export const ChooseTimespan = () => {
  return (
    <Select.Root collection={timespans} width={160} variant="subtle">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Промежуток" />
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
