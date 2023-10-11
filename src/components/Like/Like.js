import {ReactComponent as LikeIcon} from "assets/icons/like.svg";
import {ReactComponent as EmptyLikeIcon} from "assets/icons/empty_like.svg";

const Like = ({liked = false, clickHandler = () => {}}) =>
    liked
        ? <LikeIcon onClick={clickHandler}/>
        : <EmptyLikeIcon onClick={clickHandler}/>;

export default Like;