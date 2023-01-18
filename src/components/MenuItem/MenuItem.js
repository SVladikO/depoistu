import React from 'react';
import {useDispatch} from "react-redux";

import {Wrapper, FoodImage, Title, Description, AdditionalDetails} from "./MenuItem.style";
import {Price, Flex, Absolute, Like} from "../index";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";
import {ReactComponent as TimeIcon} from "../../icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../icons/measure.svg";
import {addOrderItem} from "../../features/order/orderSlice";

const MenuItem = ({item = {}}) => {
    const {id, name, description, image_url, price, cookingTime, size, isLiked} = item;
    const dispatch = useDispatch();

    return (
        <Wrapper className='pm-MenuItem'>
            <Flex justifyContent="space-between">
                <FoodImage src={image_url}/>
                <Flex flexDirection='column' width='80%'>
                    <Flex justifyContent="space-between">
                        <Title>{name}</Title>
                        <Like liked={isLiked}/>
                    </Flex>
                    <Price small>{price}</Price>
                    <Description>{description}</Description>
                    <Absolute bottom={'10px'}>
                        <AdditionalDetails>
                            <TimeIcon/> {cookingTime} m <MeasureIcon/> {size} g
                        </AdditionalDetails>
                    </Absolute>
                    <Absolute bottom={'10px'} right={'10px'}>
                        <BasketIcon onClick={() => dispatch(addOrderItem(item))}/>
                    </Absolute>
                </Flex>
            </Flex>
        </Wrapper>
    );
};

export default MenuItem;