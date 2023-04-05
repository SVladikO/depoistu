import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import {Divider, Wrapper} from "./SearchDetails.style";

import {BE_DOMAIN} from "../../utils/config";
import {CategoryMenuRow, Company, MenuItem} from "../../components";

const SearchDetailsPage = () => {
    let { companyId } = useParams();
    const [company, setCompany] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

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
                setMenuItems(result)
            });
    },[]);

    return (
        <Wrapper>
            <Company company={company}/>
            <Divider>Menu</Divider>
            <CategoryMenuRow menuItems={menuItems}/>
            {menuItems.map((el) => <MenuItem key={el.ID} item={el}/>)}
        </Wrapper>
    );
};

export default SearchDetailsPage;