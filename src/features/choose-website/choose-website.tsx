import { useGetUserWebsitesQuery } from "@/redux/services/api";
import { createListCollection, Select } from "@chakra-ui/react";

type ChooseWebsiteProps = {
  onChoose: (websiteId: string) => void;
};

export const ChooseWebsite: React.FC<ChooseWebsiteProps> = ({ onChoose }) => {
  const { data = [] } = useGetUserWebsitesQuery();

  const websites = createListCollection({
    items: data.map((website) => ({ label: website.name, value: website.id })),
  });

  const handleValueChange = (details: { value: string[] }) => {
    if (details.value.length > 0) {
      onChoose(details.value[0]);
    }
  };

  return (
    <Select.Root
      collection={websites}
      width={250}
      variant="subtle"
      onValueChange={handleValueChange}
    >
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
