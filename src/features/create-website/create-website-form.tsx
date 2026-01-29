import { Flex, Heading } from "@chakra-ui/react";
import { NameField, DomainField } from "./create-website-form-fields";

type CreateWebsiteFormProps = {
  children: React.ReactNode;
};

export const CreateWebsiteForm = ({ children }: CreateWebsiteFormProps) => (
  <Flex
    direction="column"
    borderRadius="xl"
    backgroundColor="white"
    padding="4"
  >
    <Heading alignSelf="center" marginBottom="4">
      Добавить вебсайт
    </Heading>
    <Flex direction="column" gapY="2" marginBottom="4">
      <NameField />
      <DomainField />
    </Flex>
    {children}
  </Flex>
);
