"use client"

import useCartStore from "@/stores/cartStores";
import { ProductsType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({product, selectSize, selectColor}: {product: ProductsType, selectSize: string, selectColor: string}) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [quantity, setQuantity] = useState(1)
    const {addToCart} =useCartStore()

  const handleTypeChange = (type: string, value: string) => {
  
    const params = new URLSearchParams(searchParams.toString())
    params.set(type, value)
    router.replace(`${pathname}?${params.toString()}` , { scroll: false })

  }

const handleQuantityChange=(type: "increment" | "decrement")=> {
    if(type === "increment") {
        setQuantity((prev) => prev + 1)
    } else {
        if(quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }
}
const handleAddToCart =()=>{
    addToCart({
        ...product,
        quantity,
        selectedColor: selectColor,
        selectedSize: selectSize,
    });
  toast.success("Product added to cart", {position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"}); 
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
    {/* COLORS  */}
    <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">
       Color </span>
       <div className="flex items-center gap-2">
        {product.colors.map((color) => (
         <div className={`border-1 p-[2px] cursor-pointer ${selectColor === color ? "border-gray-300": "border-white"} `} key={color}
          onClick={()=>handleTypeChange("color",color)}>
            <div className={`h-6 w-6 }`} style={{backgroundColor:color}} key={color}>
             {/* {color.toUpperCase()} */}
            </div>
         </div>
        ))}
       </div>
    </div>
    {/* QUANTITY  */}
    <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">
       Quantity </span>
       <div className="flex items-center gap-2">
        <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={() => handleQuantityChange("decrement")}><Minus/></button>
        <span className="w-6 text-center">{quantity}</span>
       <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={() =>  handleQuantityChange("increment")}><Plus/></button>
       </div>
    </div>


    {/* BUTTONS  */}
    <button onClick={handleAddToCart} className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer"><Plus className="h-4 w-4"/> Add to Cart</button>
    <button className="ring-1 ring-gray-300 p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer"><ShoppingCart className="h-4 w-4"/> Buy Now</button>
  </div>);
};

export default ProductInteraction;