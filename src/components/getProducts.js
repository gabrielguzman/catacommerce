import { useEffect, useState } from 'react'
import { products } from '../data/products';

export default function GetProducts(){
    const [resultado, setResultado] = useState([]);
    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      const getProd = new Promise((res, rej) => {
        setTimeout(() => {
          res(products); 
        },);
      });
  
      getProd
      .then((result)=>{
        setResultado(result); //[result[0]]
      })
      .catch((error) => {
        setError(true);
      })
      .finally(()=>{
        setLoading(false);
      })
    }, [])

    return (resultado)
}
