import React, {useState, useEffect} from 'react';

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

const default_categories = {
    1: {title: "Bakery", icon: BakeryIcon},
    2: {title: "Beverage", icon: BeverageIcon},
    3: {title: "Burger", icon: BurgerIcon},
    4: {title: "Noodles", icon: NoodlesIcon},
    5: {title: "Pizza", icon: PizzaIcon},
    6: {title: "Sandwitch", icon: SandwitchIcon},
    7: {title: "Sea_food", icon: Sea_foodIcon},
    8: {title: "Vagetable", icon: VagetableIcon},
}

const fetchData = async () => {
    const url = 'https://pizza-mobile-api-develop.onrender.com/company/1/menu';

    const responce = await fetch(url);
    debugger;
    if (responce.ok) {
        return responce.json();
    }

    throw new Error('Data coud not be fetched!')
}


// [].map(menu_item => categories[menu_item.category_id].items.push(menu_item))

const CategoryPage = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchData()
            .then(res => console.log(1111, res))
            .catch(e => console.log(e))

    }, [])

    return (
        <Content>
            <Flex>
                {categories
                    .filter(category => category.items)
                    .map(c => <CategoryItem key={c.title} title={c.title}>{<c.icon/>}</CategoryItem>)}
            </Flex>
        </Content>
    );
};

export default CategoryPage;