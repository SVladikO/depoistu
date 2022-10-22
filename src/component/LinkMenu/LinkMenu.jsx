import {Link} from "react-router-dom";

import {Wrapper} from "./LinkMenu.style";

function LinkMenu({items}) {
    return (
       <Wrapper>
           {items.map(i => <Link to={i.to}>{i.title}</Link>)}
       </Wrapper>
    )
}

export default LinkMenu;