import {Institution, CategoryMenuRow, MenuItem} from "../../components";
import {Wrapper, Divider} from "./Result.page.style";
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import {BE_DOMAIN} from "../../utils/config";
import data from "../category/data";

const company = {
    PHOTOS: `https://topclub.ua/uploads/images/places/371-200/_0H8l4_aCp-LNAn-Z-0IzeGKpoRn2Qd-.jpg,
                 https://afisha.bigmir.net/i/49/23/90/7/4923907/gallery/a9f2cb111d1abe2b2b8fe5b46db2ac54-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg,
                 https://afisha.bigmir.net/i/23/51/30/9/2351309/gallery/15b8175dc297f8a58d9de22e77b7b256-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg`,
    NAME: 'Domono',
    CITY: 'Kyiv',
    STREET: 'Davidusk 15.'
};


const ResultPage = () => {
    let { companyId } = useParams();
    const [categories, setCategories] = useState([]);
    const [company, setCompany] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    console.log(companyId);

    useEffect(()=>{
        fetch(`${BE_DOMAIN}/companies/by/id/${companyId}`)
            .then(res => res.json())
            .then(data => setCompany(data[0]));
    },[]);

    useEffect(() => {
        fetch(`${BE_DOMAIN}/menu/${companyId}`)
            .then(res => res.json())
            .then(data => data.sort((a,b) => a.CATEGORY_ID - b.CATEGORY_ID))
            .then(result => {
                setCategories([...new Set(result.map(el => el.CATEGORY_ID))]);
                setMenuItems(result)
            });
    },[]);

    /**
     *  1. Request menuItems by company id and set response in menuItems. Sort by categoryId before setMenuItems
     *  2. Prepare data for categories from menuItems
     *  - create categories array of numbers from array of objets (categoryId)
     *  - avoid duplication in categories
     *  - send categories number array to Categories component
     *  3. render menu items.
    * */
    return (
        <Wrapper>
            <Institution company={company}/>
            <Divider>Menu</Divider>
            <CategoryMenuRow categories={categories}/>
            {menuItems.map((el) => <MenuItem key={el.ID} item={el}/>)}
        </Wrapper>
    );
};

export default ResultPage;