'use client'

import { useEffect, useState } from "react"

export default function ProductList() {
    const [product, setProduct] = useState([])
    useEffect(async () => {
        let data = await fetch('https://dummyjson.com/products');
        data = await data.json();
        console.log(data);
        setProduct(data.products)
    }, [])
    return(
        <div>
            <h1>this is product file</h1>
            {
                product.map((item)=>(
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}