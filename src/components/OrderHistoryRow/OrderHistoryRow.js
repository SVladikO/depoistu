import {useDispatch} from "react-redux";

import {deleteOrderItem, addOrderItem, decrementOrderItem} from "../../features/order/orderSlice";

import {
    Wrapper,
    Content,
    Row,
    Title,
    Description,
    Factor,
    PriceWrapper,
    ButtonWrapper,
    WideButton,
    Space,
    Image,
    Status, RowLeftSide
} from "./OrderHistoryRow.style";
import Price from "../Price/Price";
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg";
import {ReactComponent as DeleteIcon} from "../../icons/delete.svg";

const OrderHistoryRow = ({item, isHistory}) => {
    const dispatch = useDispatch();
    const {id, name, description, price, image_url, status, amount} = item || {};

    const getChangeMealCountButtons = () => {
        if (isHistory) {
            return null;
        }

        return (
            <ButtonWrapper>
                <WideButton onClick={() => dispatch(decrementOrderItem(item))}>-</WideButton>
                <Space/>
                <WideButton onClick={() => dispatch(addOrderItem(item))}>+</WideButton>
            </ButtonWrapper>
        )
    }

    return (
        <Wrapper>
            {image_url ? <Image src={image_url}/> : <AvatarIcon/>}
            <Content>
                <Row>
                    <Title status={status}>{name}</Title>
                    {status ? <Status>{status}</Status> : <DeleteIcon onClick={() => dispatch(deleteOrderItem(id))}/>}
                </Row>
                <Row>
                    <Description>{description}</Description>
                </Row>
                <RowLeftSide>
                    <PriceWrapper>
                        <Factor>{amount || 1}x</Factor><Price smallLineHeight={false}>{price}</Price>
                    </PriceWrapper>
                </RowLeftSide>
                <Row>{getChangeMealCountButtons()}</Row>
            </Content>
        </Wrapper>
    );
};
export default OrderHistoryRow;
