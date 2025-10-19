"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

   const handleFilter =(value:string )=>{
    const params =new URLSearchParams(searchParams);
    params.set("sort", value);
router.push(`${pathname}?${params.toString()}`,{scroll:false});
   }

  return (
    <div className="flex items-center gap-2 justify-end text-sm text-gray-600 my-6">
        <span>Sort by:</span>
        <select name="sort" id="sort" className="ring ring-gray-200 rounded-sm p-1 shadow-md" 
        onChange={(e) => handleFilter(e.target.value)}
        >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
     
    </div>
  );
};
export default Filters;