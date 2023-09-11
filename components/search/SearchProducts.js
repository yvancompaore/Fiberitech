import React from 'react';
import {categories, products} from "@/utils/constants";
import Product from "@/components/common/Product";

const SearchProducts = ({categorySlug}) => {
    console.log(categorySlug)
    const category=categories.find((cate)=>cate.slug===categorySlug)
    return (
        <div className="lg:px-40 flex flex-col gap-y-3 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {products.filter((product)=>product.category===category.title).map((product) => (
                    <div key={product.id}>
                        <Product {...product} hideRating={true} hidePrice={true} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchProducts;
