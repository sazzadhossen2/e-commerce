
import { paymentFormMethods, PaymentFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormType>({
    resolver: zodResolver(paymentFormMethods)
  });

  const router = useRouter();
  const onSubmitPayment = (data: PaymentFormType) => {

  };
    const onBackToShipping = () => {
      router.push("/cart?step=2", { scroll: false });
  }

  return (
  <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmitPayment)}>
 <div className="flex flex-col gap-1">
    <label htmlFor="name" className="text-sm font-medium">Card Number</label>
    <input type="text" placeholder="Enter Card Number" id="name" {...register("cardNumber")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
 </div>
 <div className="flex flex-col gap-1">
    <label htmlFor="name" className="text-sm font-medium">Name on Card</label>
    <input type="text" placeholder="Enter Name" id="name" {...register("cardName")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.cardName && <p className="text-red-500 text-sm">{errors.cardName.message}</p>}
 </div>

    <div className="flex flex-col gap-1">
    <label htmlFor="expiryDate" className="text-sm font-medium">Expiry Date</label>
    <input type="text" placeholder="MM/YY" id="expiryDate" {...register("expiryDate")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>}
 </div>
    <div className="flex flex-col gap-1">
    <label htmlFor="cvv" className="text-sm font-medium">CVV</label>
    <input type="text" placeholder="Enter CVV" id="cvv" {...register("cvv")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
 </div>
 <div className="flex items-center gap-2 mt-4">
  <Image src="/klarna.png" alt="Klarna" width={50} height={25} className="rounded-md"/>
  <Image src="/cards.png" alt="Cards" width={50} height={25} className="rounded-md"/>
  <Image src="/stripe.png" alt="Stripe" width={50} height={25} className="rounded-md"/>
 </div>
 <button className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">Checkout
                <ShoppingCart className="w-3 h-3"/>
            </button>
</form>
  );
};

export default PaymentForm;
