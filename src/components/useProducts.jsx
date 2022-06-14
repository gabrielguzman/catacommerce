import { useEffect, useState } from "react";
import { products } from "../data/products";

export default function useItem() {
  const [productos, setProductos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getProduct = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(products);
        },);
      });
    };

    getProduct() //
      .then((result) => {
        setIsLoading(false);
        setProductos(result);
      })
      .finally(() => {
        setIsLoading(false);
      });
  },[]);

  return { isLoading, productos };
}