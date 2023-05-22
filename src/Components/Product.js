import React from 'react';

const Product = ({ product }) => {
    const { name, img, flavour } = product;
    return (

        <div className="card w-96 bg-base-100 shadow-xl my-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{flavour}</p>

            </div>
        </div>


    );
};

export default Product;