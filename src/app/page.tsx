import ProductList from "@/component/ProductList"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured" fill />
      </div>
      <ProductList />
    </div>
  )
}

export default Homepage