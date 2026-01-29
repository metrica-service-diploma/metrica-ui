import { toaster } from "@/components/ui/toaster";
import { useCreateWebsiteMutation } from "@/redux/services/api";
import type { CreateWebsiteFieldValues } from "@/types/forms";
import { Button } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const CreateWebsiteButton = () => {
  const { handleSubmit } = useFormContext<CreateWebsiteFieldValues>();
  const [createWebsite, { isLoading }] = useCreateWebsiteMutation();

  const handleCreateWebsite = async (data: CreateWebsiteFieldValues) => {
    try {
      await createWebsite(data).unwrap();

      toaster.create({
        title: "Вебсайт успешно добавлен!",
        type: "success",
        closable: true,
        duration: 3000,
      });
    } catch (error) {
      const errorMessage = error?.data?.error;

      toaster.create({
        title: errorMessage ?? "There was an error!",
        type: "error",
        closable: true,
        duration: 3000,
      });
    }
  };

  return (
    <Button onClick={handleSubmit(handleCreateWebsite)} loading={isLoading}>
      Добавить
    </Button>
  );
};
