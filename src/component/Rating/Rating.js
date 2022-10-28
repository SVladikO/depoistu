import React from 'react';
import {StyledRating} from "./Rating.style";

const Rating = (props) => {
    const {Icon, value} = props;
    return (
       <StyledRating>
           {value}
           {Icon && <Icon/>}
       </StyledRating>
    );
};

export default Rating;