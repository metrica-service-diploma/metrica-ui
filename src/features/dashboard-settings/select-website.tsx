import { useGetUserWebsitesQuery } from "@/redux/services/api";
import { createListCollection, Select } from "@chakra-ui/react";

type SelectWebsiteProps = {
  onChoose: (trackingCode: string) => void;
};

export const SelectWebsite: React.FC<SelectWebsiteProps> = ({ onChoose }) => {
  const { data = [] } = useGetUserWebsitesQuery();

  const websites = createListCollection({
    items: data.map((website) => ({
      label: website.name,
      value: website.trackingCode,
    })),
  });

  const handleValueChange = (details: { value: string[] }) => {
    if (details.value.length > 0) {
      onChoose(details.value[0]);
    }
  };

  return (
    <Select.Root
      collection={websites}
      width={200}
      variant="subtle"
      onValueChange={handleValueChange}
    >
      <Select.Label>Вебсайт</Select.Label>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Интернет-магазин" />
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
