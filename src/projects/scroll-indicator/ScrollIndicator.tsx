import { useEffect, useState } from "react";

type ProductsProps = {
  title: string;
};

export const ScrollIndicator = ({ url }: { url: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  async function fetchData(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const responseData = await response.json();

      if (responseData && responseData.products.length > 0) {
        setData(responseData.products);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="fixed bottom-0 left-0 right-0">
        <h1 className="text-3xl text-center bg-lime-950 text-lime-200 p-5">
          Custom Scroll Indicator
        </h1>
        <div className="w-full bg-lime-600">
          <div
            className="h-4 bg-red-600 flex justify-center"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        {data && data.length > 0
          ? data.map((item: ProductsProps) => (
              <p className="text-xl" key={item.title}>
                {item.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};
