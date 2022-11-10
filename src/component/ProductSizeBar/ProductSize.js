import React, {useState} from 'react';
import {Label, SizeBlock, Wrapper} from "./ProductSize.style";

const mapper = {
    1: 'S',
    2: 'M',
    3: 'L'
}

const ProductSizeBar = ({buttons, selectedSize, handleClick, label}) => {
    const [itemActiveId, setItemActiveId] = useState(null);
    buttons = [
        {size: 'S', id: 1},
        {size: 'M', id: 2},
        {size: 'L', id: 3},
    ];
    handleClick = (id) => {
        setItemActiveId(id)
    };
    return (
        <Wrapper>
            <Label>{label}</Label>
            { buttons.map((b,id) => <SizeBlock key={id} active={itemActiveId === id} onClick={() => handleClick(id)} > {mapper[b.id]} </SizeBlock>) }
        </Wrapper>
    );
};

export default ProductSizeBar;