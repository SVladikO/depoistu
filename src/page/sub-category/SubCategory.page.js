import React from 'react';

import {
    Content,
    Flex
} from "./SubCategory.style";

import {ProductCard} from "../../components";

const SubCategoryPage = () => {
    return (
        <Content>
            <Flex>
                {[1, 3, 4, 5, 6].map(c => <ProductCard
                    data={{
                        image: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
                        discont: '-10',
                        rating: '4.5',
                        buttons: [
                            {price: 20, size: 1},
                            {price: 20, size: 2},
                            {price: 30, size: 3},
                        ],
                    }}
                />)}
            </Flex>
        </Content>
    );
};

export default SubCategoryPage;