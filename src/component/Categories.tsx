'use client';

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";


const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];
export const Categories = () => {
    const searchParams = useSearchParams();
   const router = useRouter();
   const handleChange =(value:string | null)=>{
    router.push(`/?category=${value}`);
   }

    const selectedCategory = searchParams.get("category") ;
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
            {categories.map((category) => (
                <div key={category.name}
                onClick={()=>handleChange(category.slug)}
                className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md ${selectedCategory === category.slug ? "bg-white" : "text-gray-500 "}`}>
                    {category.icon}
                    <span>{category.name}</span>
                </div>
            ))}
        </div>
    );
};



