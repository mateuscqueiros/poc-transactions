import { Modal } from "@mantine/core";
import { toast } from "sonner";
import { createTransaction } from "../api";
import { TransactionClass, TransactionFormType } from "../types";
import { CreatePixForm } from "../forms/create-pix-form";

export type CreatePixModalProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CreatePixModal({ opened, setOpened }: CreatePixModalProps) {
  const onSubmit = (values: TransactionFormType) => {
    createTransaction({
      ...values,
      class: TransactionClass.Pix,
    })
      .then((response) => {
        toast.success(response.data.message);
        setOpened(false);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <Modal
      size="lg"
      title="Transferir via PIX"
      opened={opened}
      onClose={() => setOpened(false)}
      styles={{
        body: { overflow: "hidden" },
      }}
    >
      <CreatePixForm onSubmitAction={onSubmit} />
    </Modal>
  );
}
