import {Link} from "react-router-dom";
import {useState} from "react";
import {Wrapper, FoodImage, Title, Description, AdditionalDetails, InvisibleDivider, EditWrapper, EditLabel, ImagesWrapper} from "./MenuItem.style";

import {Price, Flex, Absolute, Popup} from "../index";
import {ReactComponent as TimeIcon} from "../../icons/time.svg";
import {ReactComponent as MeasureIcon} from "../../icons/sss.svg";
import {ReactComponent as BasketIcon} from "../../icons/basket.svg";
import {ReactComponent as ZoomIcon} from "../../icons/zoom.svg";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";
import {URL} from "../../utils/config";



const MenuItem = ({item = {}, withEditIcon = false, onEditClick}) => {
    const {NAME, DESCRIPTION, IMAGE_URL, PRICE, COOKING_TIME, SIZE, isLiked} = item;
    const [imageUrl, setImageUrl] = useState('')



    return (
        <Wrapper className='pm-MenuItem'>
            <Flex justifyContent="stretch">
                <ImagesWrapper>
                    <FoodImage src={IMAGE_URL} onClick={() => setImageUrl(IMAGE_URL)} />
                    <ZoomIcon onClick={() => alert('zoom')}/>
                </ImagesWrapper>
                <Flex flexDirection='column' width='80%'>
                    <Flex justifyContent="space-between">
                        <Title>{NAME}</Title>
                        {/*<Like liked={isLiked}/>*/}
                        {withEditIcon && <Link to={URL.EDIT_MENU_ITEM}>
                        <EditWrapper onClick={onEditClick}>
                            <EditIcon/>
                            <EditLabel>Edit</EditLabel>
                        </EditWrapper>
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