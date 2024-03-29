import { useEffect, useState } from "react";

type ProductProps = {
  id: number;
  title: string;
  thumbnail: string;
};

export const LoadMoreData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [count, setCount] = useState<number>(0);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const result = await response.json();

        if (result && result.products && result.products.length) {
          setProducts((prevData) => [...prevData, ...result.products]);
          setIsLoading(false);

          console.log(result);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product: ProductProps) => (
          <div className="border-2 border-black" key={product.id}>
            <img
              className="object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <p className="p-2 text-center">{product.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-10">
        {disableButton ? (
          <p>All Products Loaded</p>
        ) : (
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className="py-4 px-8 bg-slate-400 text-slate-950 rounded-lg hover:bg-slate-300 active:scale-90"
          >
            Load More Products
          </button>
        )}
      </div>
    </div>
  );
};
