import FawaterakReturnPage from "@/components/pages/FawaterakReturnPage";

export const metadata = {
  title: "تم الدفع — BePrime",
  description: "تم إتمام الدفع بنجاح",
};

export default function PaymentSuccessPage() {
  return <FawaterakReturnPage variant="success" />;
}
