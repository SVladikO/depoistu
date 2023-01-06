import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import {BE_API, ROUTER} from '../../utils/config';
import {fetchData} from '../../fetch'
import {
    Content,
    Flex
} from "./Category.style";

import {
    CategoryItem,
} from "../../components";

import {ReactComponent as BakeryIcon} from "../../icons/category/bakery.svg";
import {ReactComponent as BeverageIcon} from "../../icons/category/beverage.svg";
import {ReactComponent as BurgerIcon} from "../../icons/category/burger.svg";
import {ReactComponent as NoodlesIcon} from "../../icons/category/noodles.svg";
import {ReactComponent as PizzaIcon} from "../../icons/category/pizza.svg";
import {ReactComponent as SandwitchIcon} from "../../icons/category/sandwitch.svg";
import {ReactComponent as Sea_foodIcon} from "../../icons/category/sea_food.svg";
import {ReactComponent as VagetableIcon} from "../../icons/category/vagetable.svg";

const CATEGORY_MAPPER = {
    1: {title: "Bakery", icon: BakeryIcon},
    2: {title: "Beverage", icon: BeverageIcon},
    3: {title: "Burger", icon: BurgerIcon},
    4: {title: "Noodles", icon: NoodlesIcon},
    5: {title: "Pizza", icon: PizzaIcon},
    6: {title: "Sandwitch", icon: SandwitchIcon},
    7: {title: "Sea_food", icon: Sea_foodIcon},
    8: {title: "Vagetable", icon: VagetableIcon},
}

const CategoryPage = () => {
    const [menu_items, setMenuItems] = useState([])

    useEffect(() => {
        fetchData(BE_API.GET_ALL_CATEGORIES_ID_FOR_COMPANY(1))
            .then(res => setMenuItems(res))
            .catch(e => console.log(e))
    }, [])

    const getCategoryItem = category => <CategoryItem key={category.title} title={category.title}>{<category.icon/>}</CategoryItem>;

    return (
        <Content>
            <Flex>
                {
                    menu_items.map(category_id => (
                        <Link to={'/' + ROUTER.SUB_CATEGORY.URL + '/' + category_id}>
                            {getCategoryItem(CATEGORY_MAPPER[category_id])}
                        </Link>
                    ))
                }
            </Flex>
        </Content>
    );
};

export default CategoryPage;