import {Wrapper, Image, ImageWrapper} from './ImageContent.style';

export const ImageContent = (props) => (
    <Wrapper>
        <ImageWrapper onClick={e => e.stopPropagation()}>
            <Image src={props.imageUrl}/>
        </ImageWrapper>
        <div>
            {props.children}
        </div>
    </Wrapper>

);

export default ImageContent;