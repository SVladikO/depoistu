import {Wrapper, ContentWrapper, Item, Picture, Label, PurchaseCounter} from './BottomMenu.style';
import {ReactComponent as Home} from "../../icons/home.svg";
import {ReactComponent as Cart} from "../../icons/cart.svg";
import {ReactComponent as Search} from "../../icons/search.svg";
import {ReactComponent as User} from "../../icons/user.svg";

const BottomMenu = ({purchases}) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Item>
                    <Picture><Home/></Picture>
                    <Label>Home</Label>
                </Item>
                <Item>
                    <Picture><Cart/></Picture>
                    <Label>Cart</Label>
                    <PurchaseCounter>{purchases}</PurchaseCounter>
                </Item>
                <Item>
                    <Picture><Search primary="true"/></Picture>
                    <Label>Search</Label>
                </Item>
                <Item>
                    <Picture><User/></Picture>
                    <Label>Account</Label>
                </Item>
            </ContentWrapper>
        </Wrapper>
    );
};

export default BottomMenu;