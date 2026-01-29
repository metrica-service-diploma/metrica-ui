import { useGetUserWebsitesQuery } from "@/redux/services/api";
import { createListCollection, Select } from "@chakra-ui/react";

export const ChooseWebsite = () => {
  const { data = [] } = useGetUserWebsitesQuery();

  const websites = createListCollection({
    items: data.map((website) => ({ label: website.name, value: website.id })),
  });

  return (
    <Select.Root collection={websites} width={250} variant="subtle">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Выбрать вебсайт" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {websites.items.map((website) => (
            <Select.Item item={website} key={website.value}>
              {website.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
