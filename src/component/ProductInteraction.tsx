"use client"

import { ProductsType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ProductInteraction = ({product, selectSize, selectColor}: {product: ProductsType, selectSize: string, selectColor: string}) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

  const handleTypeChange = (type: string, value: string) => {
  
    const params = new URLSearchParams(searchParams.toString())
    params.set(type, value)
    router.replace(`${pathname}?${params.toString()}` , { scroll: false })

  }

    return( 
   <div className="w-full flex flex-col gap-4">
    {/* SIZES  */}
    <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">
       Size </span>
       <div className="flex items-center gap-2">
        {product.sizes.map((size) => (
         <div className={`border-1 p-[2px] cursor-pointer ${selectSize === size ? "border-gray-600": "border-gray-300"} `} key={size}
          onClick={()=>handleTypeChange("size",size)}>
            <div className={`h-6 w-6 text-center flex items-center justify-center ${selectSize === size ? "bg-black text-white": "bg-white text-black"}`} key={size}>
             {size.toUpperCase()}
            </div>
         </div>
        ))}
       </div>
    </div>
  </div>);
};

export default ProductInteraction;