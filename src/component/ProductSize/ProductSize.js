import React, {useState} from 'react';
import {Label, SizeBlock, Wrapper} from "./ProductSize.style";

const ProductSize = ({label}) => {
    const [itemActiveId, setItemActiveId] = useState(null);
    const items = [
        {size: 'S', id: 1},
        {size: 'M', id: 2},
        {size: 'L', id: 3},
    ];
    const handleClick = (id) => {
        setItemActiveId(id)
    };
    return (
        <Wrapper>
            <Label>{label}</Label>
            {items.map((el, id) =>
                <SizeBlock
                    key={id}
                    onClick={() => handleClick(id)}
                    active={itemActiveId === id}>
                    {el.size}
                </SizeBlock>)}
        </Wrapper>
    );
};

export default ProductSize;