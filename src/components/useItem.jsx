import { useEffect, useState } from "react";
import { products } from "../data/products";

export default function useItem(id) {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getProduct = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          const itemFounded = products.find((product) => product.id == id);
          res(itemFounded);
        }, 1000);
      });
    };

    getProduct() //
      .then((result) => {
        setIsLoading(false);
        setItem(result);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { isLoading, item };
}
