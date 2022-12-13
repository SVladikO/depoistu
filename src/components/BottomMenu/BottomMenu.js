import {Wrapper, MenuItem, Label, PurchaseCounter, HomeLabel} from './BottomMenu.style';
import {ReactComponent as HomeIcon} from "../../icons/home.svg";
import {ReactComponent as CartIcon} from "../../icons/cart.svg";
import {ReactComponent as SearchIcon} from "../../icons/search.svg";
import {ReactComponent as UserIcon} from "../../icons/user.svg";

const BottomMenu = ({basket}) => {
    return (
        <Wrapper>
            <MenuItem>
                <HomeIcon/>
                <HomeLabel>Home</HomeLabel>
            </MenuItem>
            <MenuItem>
                <CartIcon/>
                <Label>Cart</Label>
                {basket ? <PurchaseCounter>{basket}</PurchaseCounter> : null}
            </MenuItem>
            <MenuItem>
                <SearchIcon/>
                <Label>Search</Label>
            </MenuItem>
            <MenuItem>
                <UserIcon/>
                <Label>Account</Label>
            </MenuItem>
        </Wrapper>
    );
};

export default BottomMenu;