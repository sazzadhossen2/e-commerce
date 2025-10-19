    // DUMMY DATA 

import ProductInteraction from "@/component/ProductInteraction";
import { ProductsType } from "@/types";
import Image from "next/image";

    
    const product: ProductsType = {
      id: 8,
      name: "Levi’s Classic Denim",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png",
     green: "/products/8gr.png" },
  
    };

const ProductDetailsPage =async ( {params, searchParams}:{params:Promise<{id:string}>, searchParams:Promise<{color:string;size:string}>} ) => {
 const  {color, size} = await searchParams;
  const selectSize = (size || product.sizes[0] as string);
  const selectColor = (color || product.colors[0] as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE  */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
      <Image src={product.images[selectColor]} alt={product.name} fill className="object-contain rounded-md" />
      </div>
      {/* DETAILS  */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
      <h1 className="text-2xl font-medium">{product.name} </h1>
      <p className="text-gray-500">{product.description}</p>
      <p className="  text-2xl font-semibold">${product.price.toFixed(2)}</p>
      <ProductInteraction product={product} 
      selectSize={selectSize} selectColor={selectColor}
      
      />
      {/* Card Info  */}
      <div className="flex items-center gap-2 mt-4">
            <Image src="/klarna.png" alt="Klarna" width={50} height={25} className="rounded-md"/>
            <Image src="/cards.png" alt="Cards" width={50} height={25} className="rounded-md"/>
            <Image src="/stripe.png" alt="Stripe" width={50} height={25} className="rounded-md"/>
      </div>
      <p className="text-gray-500">Secure payments with Klarna, Visa, and Mastercard.</p>
      </div>
    </div>
  );
};
export default ProductDetailsPage;