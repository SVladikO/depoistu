import React from 'react';

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

const categories = [
    {title: "Bakery", icon: BakeryIcon},
    {title: "Beverage", icon: BeverageIcon},
    {title: "Burger", icon: BurgerIcon},
    {title: "Noodles", icon: NoodlesIcon},
    {title: "Pizza", icon: PizzaIcon},
    {title: "Sandwitch", icon: SandwitchIcon},
    {title: "Sea_food", icon: Sea_foodIcon},
    {title: "Vagetable", icon: VagetableIcon},
]

const CategoryPage = () => {
    return (
        <Content>
            <Flex>
                {categories.map(c => <CategoryItem key={c.title} title={c.title}>{<c.icon/>}</CategoryItem>)}
            </Flex>
        </Content>
    );
};

export default CategoryPage;