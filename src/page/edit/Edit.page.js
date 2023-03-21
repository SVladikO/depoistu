import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {CategoryMenuRow, Input, PrimaryWideButton} from "../../components";
import {
    Wrapper,
    InstitutionPictures,
    InstitutionBasketButton,
    Divider,
    MenuItemEditor,
    MenuItemPhoto,
    ImagePlace,
    ButtonSection,
    EditButton,
    WideButton,
    BottomSection
} from "./Edit.page.style";
import {InputWrapper} from "../search/Search.page.style";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";


const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const EditPage = () => {
    const [city, setCity] = useState('Київ');
    const [street, setStreet] = useState('Хрещатик 15');
    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            name: '4 Cheese',
            description: 'tomato, sauce, chili, mozzarella',
            image_url: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
            cookingTime: 15,
            price: 170,
            size: 150,
        },
        {
            id: 2,
            name: 'Quatro Formagio',
            description: 'spicy , tomato, sauce',
            image_url: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
            cookingTime: 15,
            price: 160,
            size: 120,
        },
        {
            id: 3,
            name: 'Margarita',
            description: 'sauce, chili, mozzarella',
            image_url: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
            cookingTime: 15,
            price: 110,
            size: 190,
        }]);

    const [pictures, setPictures] = useState([
        "https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg",
        "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]);

    const deleteCompanyImage = (index) => {
        const newPictures = pictures.filter((_,i) => i !== index);
        setPictures(newPictures);
    };
    const cleanCityInput = () => {
        setCity('');
    };
    const onCityInput = (e) => {
        setCity(e.target.value);
    }
    const onStreetInput = (e) => {
        setStreet(e.target.value);
    }
    const clearStreetInput = () => {
        setStreet('');
    }

    const renderCompanyDetails = () => {
        return (
            <>
                <InstitutionPictures>
                    <Swiper
                        className="mySwiper"
                        slidesPerView={2}
                        spaceBetween={10}
                    >
                        {
                            pictures.map((el,index)=> (
                                <SwiperSlide key={Math.random()}>
                                    <img src={el}/>
                                    <InstitutionBasketButton onClick={() => deleteCompanyImage(index)}>
                                        <DeleteBasketIcon/>
                                    </InstitutionBasketButton>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </InstitutionPictures>
                <PrimaryWideButton>+Photo</PrimaryWideButton>
                <Divider/>
                <InputWrapper>
                    <Input withCleaner value={city} placeholder="Місто" onChange={onCityInput}
                           changeHandler={cleanCityInput}/>
                    <Divider/>
                    <Input withCleaner value={street} placeholder="Вулиця" onChange={onStreetInput}
                           changeHandler={clearStreetInput}/>
                </InputWrapper>
                <Divider>Menu</Divider>
                <CategoryMenuRow categories={categories}/>
                <Divider/>
            </>
        )
    }
    const renderMenuItems = () => menuItems.map(item => (
            <Divider key={Math.random()}>
                <MenuItemEditor>
                    <MenuItemPhoto>
                        <ImagePlace/>
                        <ButtonSection>
                            <EditButton>Delete</EditButton>
                            <EditButton>Change</EditButton>
                        </ButtonSection>
                    </MenuItemPhoto>
                    <Input withCleaner placeholder={item.name}/>
                    <Input withCleaner placeholder={item.price}/>
                    <Input withCleaner placeholder={item.description}/>
                    <Input withCleaner placeholder={item.cookingTime}/>
                    <Input withCleaner placeholder={item.size}/>
                    <WideButton>Delete<RemoveIcon/></WideButton>
                </MenuItemEditor>
            </Divider>
        )
    )
    return (
        <Wrapper>
            {renderCompanyDetails()}
            {renderMenuItems()}
            <BottomSection>
                <PrimaryWideButton>+Add menu item</PrimaryWideButton>
                <PrimaryWideButton>Save</PrimaryWideButton>
            </BottomSection>
        </Wrapper>
    );
};

export default EditPage;