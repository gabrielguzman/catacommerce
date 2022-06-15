import { useEffect, useState } from "react";
import { products } from "../data/products";

export default function useProducts(id) {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getProducts = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          if (id) {
            const itemsFounded = products.filter((item) => item.categoria.localeCompare(id,undefined,{sensitivity:'base'})===0); /* Utilice esto para que me tome la categoria ya sea si esta Escrito en mayuscula o minusculas, creo que fue lo mas optimo. Podria haberlo hecho directamente con item.categoria === id */
            res(itemsFounded);
          }else{
            res(products);
          }
        },);
      });
    };

    getProducts() 
      .then((result) => {
        setIsLoading(false);
        setItems(result);
      })
      .finally(() => {
        setIsLoading(false);
      });
  },[id]);

  return { isLoading, items };
}