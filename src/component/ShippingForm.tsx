import { ShippingFormSchema, ShippingFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormType) => void}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormType>({
    resolver: zodResolver(ShippingFormSchema)
  });

  const router = useRouter();
  const onSubmit = (data: ShippingFormType) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false }); 
  }

  return (
  <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
 <div className="flex flex-col gap-1">
    <label htmlFor="name" className="text-sm font-medium">Name</label>
    <input type="text" placeholder="Enter Name" id="name" {...register("name")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
 </div>
  <div className="flex flex-col gap-1">
    <label htmlFor="email" className="text-sm font-medium">Email</label>
    <input type="email" placeholder="Enter Email" id="email" {...register("email")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
  </div>
  <div className="flex flex-col gap-1">
    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
    <input type="tel" placeholder="Enter Phone" id="phone" {...register("phone")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
  </div>
  <div className="flex flex-col gap-1">
    <label htmlFor="address" className="text-sm font-medium">Address</label>
    <input type="text" placeholder="Enter Address" id="address" {...register("address")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
  </div>
  <div className="flex flex-col gap-1">
    <label htmlFor="city" className="text-sm font-medium">City</label>
    <input type="text" placeholder="Enter City" id="city" {...register("city")} className="border border-gray-300 py-2 outline-none text-sm rounded-md p-2" />
    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
  </div>
  {/* <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">Submit</button> */}
 <button className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">Continue
                <ArrowRight className="w-3 h-3"/>
            </button>
</form>
  );
};

export default ShippingForm;
