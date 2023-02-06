import React,{useRef} from 'react';
import {useDispatch} from "react-redux";

import {Wrapper, FoodImage, Title, Description, AdditionalDetails, InvisibleDivider} from "./MenuItem.style";
import {Price, Flex, Absolute, Like} from "../index";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";
import {ReactComponent as TimeIcon} from "../../icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../icons/sss.svg";
import {addOrderItem} from "../../features/order/orderSlice";


const MenuItem = ({item = {}, onClick, popUpRef}) => {
    const {name, description, image_url, price, cooking_time, size, isLiked} = item;
    const dispatch = useDispatch();
    const ref = useRef();
    return (
        <Wrapper className='pm-MenuItem' ref={popUpRef}>
            <Flex justifyContent="stretch">
                <FoodImage src={image_url} onClick={onClick}/>
                <Flex flexDirection='column' width='80%'>
                    <Flex justifyContent="space-between">
                        <Title>{name}</Title>
                        <Like liked={isLiked}/>
                    </Flex>
                    <Price>{price}</Price>
                    <Description>{description}</Description>
                    <InvisibleDivider/>
                    <Absolute bottom={'10px'}>
                        <AdditionalDetails>
                            <TimeIcon/> {cooking_time} m <MeasureIcon/> {size} g
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