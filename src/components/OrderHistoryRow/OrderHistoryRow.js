
import {useDispatch} from "react-redux";

import {deleteOrderItem} from "../../features/order/orderSlice";

import {Wrapper, Content, Row, Title, Description, Factor, PriceWrapper,ColoredSize, Size, Status} from "./OrderHistoryRow.style";
import CountAccumulator from "../CountAccumulator/CountAccumulator";
import Price from "../Price/Price";
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg";
import {ReactComponent as DeleteIcon} from "../../icons/delete.svg";

const OrderHistoryRow = props => {
    const dispatch = useDispatch();
    const {id, name, ingredients, price, size, status} = props.item || {};

    return (
        <Wrapper>
            <AvatarIcon/>
            <Content>
                <Row>
                    <Title status={status}>{name}</Title>
                    {status ? <Status>{status}</Status> : <DeleteIcon onClick={() => dispatch(deleteOrderItem(id))}/>}
                </Row>
                <Row>
                    <Description>{ingredients.join(', ')}</Description>
                </Row>
                <Row>
                    {
                        size ? <Size>Size:<ColoredSize>{size}</ColoredSize></Size> : <CountAccumulator count={3}/>
                    }
                    <PriceWrapper>
                        <Factor>3x</Factor><Price small>{10}.00</Price>
                    </PriceWrapper>
                </Row>
            </Content>
        </Wrapper>
    );
};
export default OrderHistoryRow;
