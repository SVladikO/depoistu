import {Link} from "react-router-dom";
import {useState} from "react";
import {Wrapper, FoodImage, Title, Description, AdditionalDetails, InvisibleDivider, EditPicture, LabelEdit} from "./MenuItem.style";

import {Price, Flex, Absolute, Like, Popup} from "../index";
import {ReactComponent as TimeIcon} from "../../icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../icons/sss.svg";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {addOrderItem} from "../../features/order/orderSlice";
import {URL} from "../../utils/config";
import {resolveTranslation} from '../../utils/utils'
import translation from "../../utils/translation.json";



const MenuItem = ({item = {}, withEditIcon = false, onEditClick}) => {
    const {NAME, DESCRIPTION, IMAGE_URL, PRICE, COOKING_TIME, SIZE, isLiked} = item;
    const [imageUrl, setImageUrl] = useState('')

    return (
        <Wrapper className='pm-MenuItem'>
            <Flex justifyContent="stretch">
                <FoodImage src={IMAGE_URL} onClick={() => setImageUrl(IMAGE_URL)} />
                <Flex flexDirection='column' width='80%'>
                    <Flex justifyContent="space-between">
                        <Title>{NAME}</Title>
                        {/*<Like liked={isLiked}/>*/}
                        {withEditIcon && <Link to={URL.EDIT_MENU_ITEM}>
                        <EditPicture onClick={onEditClick}>
                            <EditIcon/>
                            <LabelEdit>{resolveTranslation("PAGE.MENU_ITEM.BUTTON.EDIT")}</LabelEdit>
                        </EditPicture>
                        </Link>}
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
            {imageUrl && <Popup.Image imageUrl={imageUrl} onClose={() => setImageUrl('')}/>}
        </Wrapper>
    );
};

export default MenuItem;