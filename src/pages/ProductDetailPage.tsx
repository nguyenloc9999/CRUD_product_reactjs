import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IProduct } from '../types/product'
interface IProps {
    products: IProduct[],
}

const ProductDetailPage = (props: IProps) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id === Number(id))
        setProduct(currentProduct ?? {})
    }, [id, props.products])
  return (
    <div>
        <h3>{(product as {name: string})?.name}</h3>
        <p>{(product as {price: number})?.price}</p>
    </div>
  )
}

export default ProductDetailPage