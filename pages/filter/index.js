import React from 'react'
import ProductCard from "./product-card"
import { products } from "../../data/products"

const Filter = () => {
    return (
        <div className='grid grid-cols-12 h-full'>
            <div className='col-span-2'>
                {/*filters*/}
                Filter
            </div>
            <div className='col-span-10'>
                <div className='grid grid-cols-12 gap-4'>
                    {products.map((product) => (
                        <div key={product.id} className='col-span-3'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Filter