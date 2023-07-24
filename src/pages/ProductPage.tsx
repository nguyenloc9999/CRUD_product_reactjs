import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
interface IProps {
    products: IProduct[],
}

const ProductPage = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
  return (
    <div>
        {data.map(item => {
            return (
                <div key={item.id}>
                    <div style={{marginBottom: 10}}><a style={{textDecoration: 'none'}} href={`/products/${item.id}`}>{item.name}</a></div>
                    <div><a style={{textDecoration: 'none'}} href={`/products/${item.id}`}>{item.price}</a></div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductPage