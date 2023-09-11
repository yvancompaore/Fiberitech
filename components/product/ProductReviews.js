import React from 'react';
import ProductReviewCard from "@/components/product/ProductReviewCard";

const ProductReviews = ({product}) => {
    return (
        <div className={'lg:px-40 flex flex-col gap-y-3 py-16'}>
            <h1 className={' font-bold uppercase text-5xl khula-family'}>Reviews</h1>

            <div className={'flex flex-wrap'}>
                {product.reviews.map((review) => <ProductReviewCard review={review} key={review.title}/>)}

            </div>

        </div>
    );
};

export default ProductReviews;