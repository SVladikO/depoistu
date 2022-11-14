import {Label, SizeBlock, Wrapper} from "./ProductSizeBar.style";

const mapper = {
    1: 'S',
    2: 'M',
    3: 'L'
}

const ProductSizeBar = ({buttons, selectedSize, handleClick, label}) => {
    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            {buttons.map(b =>
                <SizeBlock
                    key={b.size}
                    active={selectedSize === b.size}
                    onClick={() => handleClick(b)}
                >
                    {mapper[b.size]}
                </SizeBlock>)}
        </Wrapper>
    );
};

export default ProductSizeBar;