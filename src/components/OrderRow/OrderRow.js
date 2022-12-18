import {Wrapper, Content, Row, Name, Description, Factor, PriceWrapper} from "./OrderRow.style";
import CountAccumulator from "../CountAccumulator/CountAccumulator";
import Price from "../Price/Price";
import {ReactComponent as Avatar} from "../../icons/avatar.svg";
import {ReactComponent as Delete} from "../../icons/delete.svg";

const OrderRow = (props) => {
    const {name, description} = props.item;
    return (
        <Wrapper>
            <Avatar/>
            <Content>
                <Row>
                    <Name>{name}</Name>
                    <Delete/>
                </Row>
                <Row>
                    <Description>
                        {description.join(', ')}
                    </Description>
                </Row>
                <Row>
                    <CountAccumulator count={3}/>
                    <PriceWrapper>
                        <Factor>1x</Factor><Price>7.00</Price>
                    </PriceWrapper>
                </Row>
            </Content>
        </Wrapper>
    );
};

export default OrderRow;