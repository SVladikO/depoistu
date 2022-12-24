import {Wrapper, Content, Row, Name, Description, Factor, PriceWrapper} from "./OrderHistoryRow.style";
import CountAccumulator from "../CountAccumulator/CountAccumulator";
import Price from "../Price/Price";
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg";
import {ReactComponent as DeleteIcon} from "../../icons/delete.svg";
import {ColoredSize, Size, Status} from "../HistotyRow/HistoryRow.style";

export const OrderRow = (props) => {
    const {name, description} = props.item;
    return (
        <Wrapper>
            <AvatarIcon/>
            <Content>
                <Row>
                    <Name>{name}</Name>
                    <DeleteIcon/>
                </Row>
                <Row>
                    <Description>
                        {description.join(', ')}
                    </Description>
                </Row>
                <Row>
                    <CountAccumulator count={3}/>
                    <PriceWrapper>
                        <Factor>3x</Factor><Price>7.00</Price>
                    </PriceWrapper>
                </Row>
            </Content>
        </Wrapper>
    );
};

export const HistoryRow = props => {
    const {name, description, price, size, status} = props.item;

    return (
        <Wrapper>
            <AvatarIcon/>
            <Content>
                <Row>
                    <Name>{name}</Name>
                    <Status>{status}</Status>
                </Row>
                <Row>
                    <Description>{description.join(', ')}</Description>
                </Row>
                <Row>
                    <Size>Size:<ColoredSize>{size}</ColoredSize></Size>
                    <PriceWrapper>
                        <Factor>3x</Factor><Price>{price}.00</Price>
                    </PriceWrapper>
                </Row>
            </Content>
        </Wrapper>
    );
};
