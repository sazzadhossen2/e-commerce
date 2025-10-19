    // DUMMY DATA 

import { ProductsType } from "@/types";

    
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

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE  */}
      <div className="w-full lg:w-5/12">
      
      </div>
      {/* DETAILS  */}
      <div className="w-full lg:w-7/12"></div>
    </div>
  );
};
export default ProductDetailsPage;