import { PageLayout } from "../../../../components/layout/page-layout";
import { BasicPixForm } from "../../../../features/transactions/forms/basic-pix-form/basic-pix-form";

export default function TransferPage() {
  return (
    <PageLayout size="sm" title="Qual a chave pix?">
      <BasicPixForm />
    </PageLayout>
  );
}
