import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {BE_DOMAIN} from "../../utils/config";
import {CategoryMenuRow, Institution, MenuItem} from "../../components";
import {Divider, Wrapper} from "./Result.page.style";


const ResultPage = () => {
    let { companyId } = useParams();
    const [categories, setCategories] = useState([]);
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
                setCategories([...new Set(result.map(el => el.CATEGORY_ID))]);
                setMenuItems(result)
            });
    },[]);

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