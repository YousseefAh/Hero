import FawaterakReturnPage from "@/components/pages/FawaterakReturnPage";

export const metadata = {
  title: "الدفع قيد الانتظار — BePrime",
  description: "اكتمال الدفع قيد الانتظار",
};

export default function PaymentPendingPage() {
  return <FawaterakReturnPage variant="pending" />;
}
