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
    ColoredSize,
    Size,
    Image,
    Status, RowLeftSide
} from "./OrderHistoryRow.style";
import CountAccumulator from "../CountAccumulator/CountAccumulator";
import Price from "../Price/Price";
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg";
import {ReactComponent as DeleteIcon} from "../../icons/delete.svg";

const OrderHistoryRow = ({item, isHistory}) => {
    const dispatch = useDispatch();
    const {id, name, ingredients, price, image_url, size, status, amount} = item || {};

    return (
        <Wrapper>
            {image_url ? <Image src={image_url}/> : <AvatarIcon/>}
            <Content>
                <Row>
                    <Title status={status}>{name}</Title>
                    {status ? <Status>{status}</Status> : <DeleteIcon onClick={() => dispatch(deleteOrderItem(id))}/>}
                </Row>
                <Row>
                    <Description>{ingredients.join(', ')}</Description>
                </Row>
                <RowLeftSide>
                    <PriceWrapper>
                        <Factor>{amount}x</Factor><Price smallLineHeight={false}>{price}</Price>
                    </PriceWrapper>
                </RowLeftSide>
                <Row>
                    {
                        isHistory || <CountAccumulator
                                        forHistory
                                        count={amount}
                                        incrementHandler={() => dispatch(addOrderItem(item))}
                                        decrementHandler={() => dispatch(decrementOrderItem(item))}
                                    />
                    }
                </Row>
            </Content>
        </Wrapper>
    );
};
export default OrderHistoryRow;
