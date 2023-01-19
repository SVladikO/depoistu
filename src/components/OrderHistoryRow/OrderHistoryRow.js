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
    Status
} from "./OrderHistoryRow.style";
import CountAccumulator from "../CountAccumulator/CountAccumulator";
import Price from "../Price/Price";
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg";
import {ReactComponent as DeleteIcon} from "../../icons/delete.svg";

const OrderHistoryRow = ({item, isHistory}) => {
    const dispatch = useDispatch();
    const {id, name, description, price, image_url, size, status, amount} = item || {};

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
                <Row>
                    {
                        isHistory
                            ? <Size>Size:<ColoredSize>{size}</ColoredSize></Size>
                            : <CountAccumulator
                                count={amount}
                                incrementHandler={() => dispatch(addOrderItem(item))}
                                decrementHandler={() => dispatch(decrementOrderItem(item))}
                            />
                    }
                    <PriceWrapper>
                        <Factor>{amount}x</Factor><Price small>{price}</Price>
                    </PriceWrapper>
                </Row>
            </Content>
        </Wrapper>
    );
};
export default OrderHistoryRow;
