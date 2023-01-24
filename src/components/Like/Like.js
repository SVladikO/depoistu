import {ReactComponent as LikeIcon} from "../../icons/like.svg";
import {ReactComponent as EmptyLikeIcon} from "../../icons/empty_like.svg";

const Like = ({liked = false, clickHandler = () => {}}) =>
    liked
        ? <LikeIcon onClick={clickHandler}/>
        : <EmptyLikeIcon onClick={clickHandler}/>;

export default Like;