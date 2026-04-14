import { CreateWebsiteButton } from "@/features/create-website/create-website-button";
import { CreateWebsiteDialog } from "@/features/create-website/create-website-dialog";
import { CreateWebsiteForm } from "@/features/create-website/create-website-form";
import type { CreateWebsiteFieldValues } from "@/types/forms";
import { WebsitesTable } from "@/widgets/websites-table";
import { Box, Flex } from "@chakra-ui/react";
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
    <Flex direction="column" padding="1.5rem">
      <Box mb="1.5rem" alignSelf="flex-start">
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
