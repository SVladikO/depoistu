import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import {Wrapper, BasketButton} from "./image-with-delete.style";

import {ReactComponent as DeleteBasketIcon} from 'assets/icons/delete_basket.svg'

const ImageWithDelete = ({src, onDelete, noHeightRestriction = false}) => {

    return (
        <Wrapper className="ImageWithDelete" noHeightRestriction={noHeightRestriction}>
            <LazyLoadImage src={src} width={'100%'}/>
            <BasketButton onClick={onDelete}>
                <DeleteBasketIcon/>
            </BasketButton>
        </Wrapper>
    )
}

export default ImageWithDelete;