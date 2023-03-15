import React from "react";
import {
    Wrapper,
    Pictures,
    BasketButton,
    Divider,
    MenuItemEditor,
    IconSide,
    ImagePlace,
    ButtonSection,
    EditButton,
    WideButton,
    BottomSection
} from "./Edit.page.style";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {CategoryMenuRow, Input, PrimaryWideButton} from "../../components";
import {InputWrapper} from "../search/Search.page.style";

const pictures = [
    {
        src: "https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg",
        id: 1
    },
    {
        src: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1600",
        id: 2
    },
    {
        src: "https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1600",
        id: 3
    },
    {
        src: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1600",
        id: 4
    },
    {
        src: "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1600",
        id: 5
    },
];

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


const EditPage = () => {
    const deleteHandler = () => {
        alert('deleted picture');
    }
    const cleanInput = () => {
        alert('input cleaned');
    }
    return (
        <Wrapper>
            <Pictures>
                <Swiper
                    className="mySwiper"
                    slidesPerView={2}
                    spaceBetween={10}
                >
                    {pictures.map(el => <SwiperSlide key={el.id}>
                        <img src={el.src}/>
                        <BasketButton onClick={deleteHandler}>
                            <DeleteBasketIcon/>
                        </BasketButton>
                    </SwiperSlide>)}
                </Swiper>
            </Pictures>
            <PrimaryWideButton>+Photo</PrimaryWideButton>
            <Divider/>
            <InputWrapper>
                <Input withCleaner placeholder="Kyiv" onClick={cleanInput}/>
                <Divider/>
                <Input withCleaner placeholder="Kyiv, Davidusk 15." onClick={cleanInput}/>
            </InputWrapper>
            <Divider>Menu</Divider>
            <CategoryMenuRow categories={categories}/>
            <Divider/>
            <MenuItemEditor>
                <IconSide>
                    <ImagePlace/>
                    <ButtonSection>
                        <EditButton>Delete</EditButton>
                        <EditButton>Change</EditButton>
                    </ButtonSection>
                </IconSide>
                <Input withCleaner placeholder="Cheese Bites Pizza" onClick={cleanInput}/>
                <Input withCleaner placeholder="$50" onClick={cleanInput}/>
                <Input withCleaner placeholder="spicy , tomato, sauce" onClick={cleanInput}/>
                <Input withCleaner placeholder="40m" onClick={cleanInput}/>
                <Input withCleaner placeholder="150g" onClick={cleanInput}/>
                <WideButton>Delete<RemoveIcon/></WideButton>
            </MenuItemEditor>
            <BottomSection>
                <PrimaryWideButton>+Add</PrimaryWideButton>
                <PrimaryWideButton>Save</PrimaryWideButton>
            </BottomSection>
        </Wrapper>
    );
};

export default EditPage;