import { createListCollection, Select } from "@chakra-ui/react";

const segments = createListCollection({
  items: [
    { label: "По дням", value: "days" },
    { label: "По неделям", value: "weeks" },
    { label: "По месяцам", value: "months" },
  ],
});

export const ChooseSegment = () => {
  return (
    <Select.Root collection={segments} width={160} variant="subtle">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Сегмент" />
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
