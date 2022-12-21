import {Content, Row, Status, Wrapper, Name, Description, Size, ColoredSize,PriceWrapper,Factor,Price} from './HistoryRow.style';
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg";

const HistoryRow = (props) => {
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
                        <Factor>1x</Factor><Price>{price}.00</Price>
                    </PriceWrapper>
                </Row>
            </Content>
        </Wrapper>
    );
};

export default HistoryRow;