import {Wrapper, Image} from './ImageContent.style';

export const ImageContent = ({imageUrl}) => (
    <div>
        <Wrapper onClick={e => e.stopPropagation()}>
            <Image src={imageUrl}/>
        </Wrapper>
    </div>

);

export default ImageContent;