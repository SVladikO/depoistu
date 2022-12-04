import React from 'react';
import {Wrapper, Flex, FoodImage, Title} from "./ProductCard.style";
import {Discount, Rating, Price, ProductSizeBar} from "../index";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";

const ProductCard = ({data}) => {
    const {buttons, rating, discont, image} = data;
    const selectedSize = 1;

    function handleClick(m) {
        alert('Clicked on size: ' + m.size + ' with price: ' + m.price)
    }

    return (
        <Wrapper>
            <Flex></Flex>
            <Flex flexDirection='column'>
                <Flex justifyContent={"space-between"}>
                    <Discount>{discont}</Discount>
                    <Rating>{rating}</Rating>
                </Flex>
                <FoodImage src={image} />
                <Title>Chees Bites Pizza</Title>
                <Flex justifyContent={'center'}  margin={'10px 0 0'}>
                    <ProductSizeBar buttons={buttons} handleClick={handleClick} selectedSize={selectedSize}/>
                </Flex>
                <Flex justifyContent={"space-between"} margin={'10px 0 0'}>
                    <Price>{buttons[selectedSize].price}</Price>
                    <BasketIcon/>
                </Flex>
                <Flex></Flex>
            </Flex>
        </Wrapper>
    );
};

export default ProductCard;