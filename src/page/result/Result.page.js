import {Institution, CategoryMenuRow, MenuItem} from "../../components";
import {Wrapper, Divider} from "./Result.page.style";

const company = {
    PHOTOS: `https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg,
                 https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg,
                 https://afisha.bigmir.net/i/23/51/30/9/2351309/gallery/15b8175dc297f8a58d9de22e77b7b256-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg`,
    NAME: 'Domono',
    CITY: 'Kyiv',
    STREET: 'Davidusk 15.'
};
const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const item = {
    id: 10,
    name: '4 Cheese',
    description: 'spicy , tomato, sauce, chili, mozzarella, spicy , tomato, sauce, chili, mozzarella',
    image_url: 'https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png',
    cookingTime: 15,
    price: 170,
    size: 150,
}

const ResultPage = () => {

    return (
        <Wrapper>
            <Institution company={company}/>
            <Divider>Menu</Divider>
            <CategoryMenuRow menuItems={[{CATEGORY_ID: 1}, {CATEGORY_ID: 2}, {CATEGORY_ID: 3}]}/>
            <MenuItem item={item}/>
            <MenuItem item={item}/>
            <MenuItem item={item}/>
            <MenuItem item={item}/>
        </Wrapper>
    );
};

export default ResultPage;