import { Button, Dialog, Portal } from "@chakra-ui/react";

type CreateWebsiteDialogProps = {
  children: React.ReactNode;
};

export const CreateWebsiteDialog = ({ children }: CreateWebsiteDialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Добавить вебсайт</Button>
    </Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
);
