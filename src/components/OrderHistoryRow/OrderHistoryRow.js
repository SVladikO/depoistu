import {Wrapper, Content, Row, Name, Description, Factor, PriceWrapper} from "./OrderHistoryRow.style";
import CountAccumulator from "../CountAccumulator/CountAccumulator";
import Price from "../Price/Price";
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg";
import {ReactComponent as DeleteIcon} from "../../icons/delete.svg";
import {ColoredSize, Size, Status} from "../HistotyRow/HistoryRow.style";


const OrderHistoryRow = props => {
    const {name, description, price, size, status} = props.item;

    return (
        <Wrapper>
            <AvatarIcon/>
            <Content>
                <Row>
                    <Name status={status}>{name}</Name>
                    {status ? <Status>{status}</Status> : <DeleteIcon/>}
                </Row>
                <Row>
                    <Description>{description.join(', ')}</Description>
                </Row>
                <Row>
                    {
                        size ? <Size>Size:<ColoredSize>{size}</ColoredSize></Size> : <CountAccumulator count={3}/>
                    }
                    <PriceWrapper>
                        <Factor>3x</Factor><Price small>{price}.00</Price>
                    </PriceWrapper>
                </Row>
            </Content>
        </Wrapper>
    );
};
export default OrderHistoryRow;
