import React from 'react';
import almond from '../aasets/almond.jpg'
import litchi from '../aasets/litchi.jpg'
import tropicana from '../aasets/tropicana.jpg'
import Product from './Product';

const PopularProducts = () => {
    const products = [
        { id: 1, name: "Almond Milk", img: almond, flavour: "cacao" },
        { id: 2, name: "B Natural litchi", img: litchi, flavour: "litchi" },
        { id: 3, name: "Tropicana ", img: tropicana, flavour: "Mixed Fruit" },


    ]
    return (
        <div>
            <h1 style={{ color: '#609FA7' }} className='text-3xl font-bold text-center my-7'>Popular Products</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-3 content-center justify-items-center ' style={{ backgroundColor: '#609FA7' }}>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </div>
        </div>

    );
};

export default PopularProducts;