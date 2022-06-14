import { useEffect, useState } from "react";
import { products } from "../data/products";

export default function useItem(itemId) {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getProduct = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          const itemFounded = products.find((product) => product.id === itemId);
          res(itemFounded);
        }, 2000);
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
  }, [itemId]);

  return { isLoading, item };
}