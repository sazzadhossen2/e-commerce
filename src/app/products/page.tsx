import ProductList from "@/component/ProductList";

const ProductsPage  =async ({searchParams}:{searchParams: Promise<{category: string}>}) => {
  const category = (await searchParams).category;
  return (
    <div>
      <ProductList category={category} />
    </div>
  );
};

export default ProductsPage;
