import {Wrapper, Title, Description} from "./EmptyBasket.style";

import {ReactComponent as EmptyBasketIcon} from "../../icons/empty_basket.svg";

import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {PrimaryWideButton} from "../Button/Button.style";
import {RowSplitter} from "../index";

function EmptyBasket() {

    return (
        <Wrapper>
            <RowSplitter height='64px'/>
            <EmptyBasketIcon/>
            <RowSplitter height='55px'/>
            <ContentContainer>
                <Title>Your Cart is empty</Title>
                <Description>Looks like you haven't made your</Description>
                <Description>order yet.</Description>

                <PrimaryWideButton>Shop Now</PrimaryWideButton>
            </ContentContainer>
        </Wrapper>
    )
}

export default EmptyBasket;