import ProductFilter from "./ProductFilter";
import ProductCarousel from "./ProductCarousel";
import { useState } from "react";
import { useFetchProduct } from "../../hooks/useFetchProduct";

export default function ProductSection({ filter = false }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const { data, error, isFetching } = useFetchProduct({
    queryKey: [query],
  });
  console.log("cat", category);
  return (
    <>
      {isFetching && <div>Loading...</div>}

      {filter && data && (
        <ProductFilter
          setFilter={setCategory}
          category={data}
          setQuery={setQuery}
        />
      )}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ProductCarousel
          isFetching={isFetching}
          category={category}
          products={data}
        />
      )}
    </>
  );
}
