import React from 'react';
import {useDispatch} from "react-redux";

import {Wrapper, Flex, FoodImage, Title} from "./ProductCard.style";
import {Discount, Rating, Price, ProductSizeBar} from "../index";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";
import {addOrderItem} from "../../features/order/orderSlice";

const ProductCard = ({item = {}}) => {
    const {name, buttons, rating, discont, image} = item;
    const selectedSize = 1;
    const dispatch = useDispatch();

    function handleClick(m) {
        console.log('Clicked on size: ' + m.size + ' with price: ' + m.price)
    }

    return (
        <Wrapper className='pm-ProductCard'>
            <Flex></Flex>
            <Flex flexDirection='column'>
                <Flex justifyContent="space-between">
                    <Discount>{discont}</Discount>
                    <Rating>{rating}</Rating>
                </Flex>
                <FoodImage src={image}/>
                <Title>{name}</Title>
                <Flex justifyContent={'center'} margin={'10px 0 0'}>
                    <ProductSizeBar buttons={buttons} handleClick={handleClick} selectedSize={selectedSize}/>
                </Flex>
                <Flex justifyContent={"space-between"} margin={'10px 0 0'}>
                    <Price>{buttons[selectedSize].price}</Price>
                    <BasketIcon onClick={() => dispatch(addOrderItem(item))}/>
                </Flex>
                <Flex></Flex>
            </Flex>
        </Wrapper>
    );
};

export default ProductCard;