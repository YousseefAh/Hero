import FawaterakReturnPage from "@/components/pages/FawaterakReturnPage";

export const metadata = {
  title: "لم يكتمل الدفع — BePrime",
  description: "لم تكتمل عملية الدفع",
};

export default function PaymentFailPage() {
  return <FawaterakReturnPage variant="fail" />;
}
