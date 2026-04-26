import {
  CreateWebsiteForm,
  CreateWebsiteDialog,
  CreateWebsiteButton,
} from "@/features/create-website";
import type { CreateWebsiteFieldValues } from "@/types/forms";
import { WebsitesTable } from "@/widgets/websites-table";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

const defaultCreateWebsiteFormValues: CreateWebsiteFieldValues = {
  name: "",
  domain: "",
};

export const Websites = () => {
  const createWebsiteFormMethods = useForm<CreateWebsiteFieldValues>({
    defaultValues: defaultCreateWebsiteFormValues,
    reValidateMode: "onBlur",
  });

  return (
    <Flex direction="column" gapY="1.5rem" padding={5}>
      <Heading size="3xl">Список вебсайтов</Heading>
      <Box alignSelf="flex-start">
        <FormProvider {...createWebsiteFormMethods}>
          <CreateWebsiteDialog>
            <CreateWebsiteForm>
              <CreateWebsiteButton />
            </CreateWebsiteForm>
          </CreateWebsiteDialog>
        </FormProvider>
      </Box>
      <Box maxWidth={750}>
        <WebsitesTable />
      </Box>
    </Flex>
  );
};
