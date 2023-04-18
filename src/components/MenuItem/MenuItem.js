import {useDispatch} from "react-redux";

import {Wrapper, FoodImage, Title, Description, AdditionalDetails, InvisibleDivider} from "./MenuItem.style";

import {Price, Flex, Absolute, Like} from "../index";
import {ReactComponent as TimeIcon} from "../../icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../icons/sss.svg";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";

import {addOrderItem} from "../../features/order/orderSlice";
import {showImagePopup} from "../../features/imagePopup/imagePopupSlice";

const MenuItem = ({item = {}}) => {
    const {NAME, DESCRIPTION, IMAGE_URL, PRICE, COOKING_TIME, SIZE, isLiked} = item;
    const dispatch = useDispatch();

    return (
        <Wrapper className='pm-MenuItem'>
            <Flex justifyContent="stretch">
                <FoodImage src={IMAGE_URL} onClick={() => dispatch(showImagePopup(IMAGE_URL))}/>
                <Flex flexDirection='column' width='80%'>
                    <Flex justifyContent="space-between">
                        <Title>{NAME}</Title>
                        {/*<Like liked={isLiked}/>*/}
                    </Flex>
                    <Price>{PRICE}</Price>
                    <Description>{DESCRIPTION}</Description>
                    <InvisibleDivider/>
                    <Absolute bottom={'10px'}>
                        <AdditionalDetails>
                            <TimeIcon/> {COOKING_TIME} m <MeasureIcon/> {SIZE} g
                        </AdditionalDetails>
                    </Absolute>
                    {/*<Absolute bottom={'10px'} right={'10px'}>*/}
                    {/*    <BasketIcon onClick={() => dispatch(addOrderItem(item))}/>*/}
                    {/*</Absolute>*/}
                </Flex>
            </Flex>
        </Wrapper>
    );
};

export default MenuItem;