import {NavLink } from "react-router-dom";

import {Wrapper} from "./LinkMenu.style";
import {COLOR} from "../../utils/theme";

let activeStyle = {
    textDecoration: "underline",
    color: COLOR.PRIMARY,
};

function LinkMenu({items}) {
    return (
       <Wrapper>
           {items.map(i =>
               <NavLink
                   key={i.to}
                   to={i.to}
                   style={({ isActive }) =>
                       isActive ? activeStyle : undefined
                   }
               >
                   {i.title}
               </NavLink >)}
       </Wrapper>
    )
}

export default LinkMenu;