import {translate, TRANSLATION, TRANSLATION as TR} from "./translation";

export const MEASUREMENTS = {
    WEIGHT: translate(TRANSLATION.MEASUREMENTS.WEIGHT),
    LIQUID: translate(TRANSLATION.MEASUREMENTS.LIQUID),
}

// We have all category ids on frontend side
// Position category title in this array responsible by position in horizontal sub categories
//TODO: Migrate category id to db as after moving to another countries we will be unable to support their menu and categories
export const CATEGORY_MAPPER_AS_ARRAY = [
    // KITCHEN
    {id: 31, title: translate(TR.SUB_CATEGORIES.CHILDREN), measurement: MEASUREMENTS.WEIGHT},
    {id: 32, title: translate(TR.SUB_CATEGORIES.VEGETARIAN), measurement: MEASUREMENTS.WEIGHT},
    {id: 1, title: translate(TR.SUB_CATEGORIES.BREAKFAST), measurement: MEASUREMENTS.WEIGHT},
    {id: 33, title: translate(TR.SUB_CATEGORIES.HOME), measurement: MEASUREMENTS.WEIGHT},
    {id: 34, title: translate(TR.SUB_CATEGORIES.SEASONAL), measurement: MEASUREMENTS.WEIGHT},
    {id: 2, title: translate(TR.SUB_CATEGORIES.SOUPS), measurement: MEASUREMENTS.LIQUID},
    {id: 35, title: translate(TR.SUB_CATEGORIES.FIRST_DISHES), measurement: MEASUREMENTS.LIQUID},
    {id: 36, title: translate(TR.SUB_CATEGORIES.SECOND_DISHES), measurement: MEASUREMENTS.LIQUID},
    {id: 7, title: translate(TR.SUB_CATEGORIES.SPECIALITIES), measurement: MEASUREMENTS.WEIGHT},
    {id: 8, title: translate(TR.SUB_CATEGORIES.BANQUET_MENU), measurement: MEASUREMENTS.WEIGHT},
    {id: 37, title: translate(TR.SUB_CATEGORIES.DUMPLING), measurement: MEASUREMENTS.LIQUID},
    {id: 38, title: translate(TR.SUB_CATEGORIES.PANCAKES), measurement: MEASUREMENTS.LIQUID},
    {id: 3, title: translate(TR.SUB_CATEGORIES.BUSINESS_LUNCH), measurement: MEASUREMENTS.LIQUID},
    {id: 4, title: translate(TR.SUB_CATEGORIES.HOT_DISHES), measurement: MEASUREMENTS.WEIGHT},
    {id: 39, title: translate(TR.SUB_CATEGORIES.PANS), measurement: MEASUREMENTS.WEIGHT},
    {id: 40, title: translate(TR.SUB_CATEGORIES.FOR_COMPANY), measurement: MEASUREMENTS.WEIGHT},
    {id: 5, title: translate(TR.SUB_CATEGORIES.COLD_APPETIZERS), measurement: MEASUREMENTS.WEIGHT},
    {id: 41, title: translate(TR.SUB_CATEGORIES.HOT_APPETIZERS), measurement: MEASUREMENTS.WEIGHT},
    {id: 42, title: translate(TR.SUB_CATEGORIES.SNACKS), measurement: MEASUREMENTS.WEIGHT},
    {id: 6, title: translate(TR.SUB_CATEGORIES.SIDE_DISHES), measurement: MEASUREMENTS.WEIGHT},
    {id: 43, title: translate(TR.SUB_CATEGORIES.KHINKALI), measurement: MEASUREMENTS.WEIGHT},
    {id: 44, title: translate(TR.SUB_CATEGORIES.HOT_DOGS), measurement: MEASUREMENTS.WEIGHT},
    {id: 9, title: translate(TR.SUB_CATEGORIES.SANDWITCH), measurement: MEASUREMENTS.WEIGHT},
    {id: 10, title: translate(TR.SUB_CATEGORIES.BURGERS), measurement: MEASUREMENTS.WEIGHT},
    {id: 44, title: translate(TR.SUB_CATEGORIES.STEAK), measurement: MEASUREMENTS.WEIGHT},
    {id: 11, title: translate(TR.SUB_CATEGORIES.SUSHI), measurement: MEASUREMENTS.WEIGHT},
    {id: 12, title: translate(TR.SUB_CATEGORIES.ROLLS), measurement: MEASUREMENTS.WEIGHT},
    {id: 13, title: translate(TR.SUB_CATEGORIES.SUSHI_SETS), measurement: MEASUREMENTS.WEIGHT},
    {id: 45, title: translate(TR.SUB_CATEGORIES.WOC), measurement: MEASUREMENTS.WEIGHT},
    {id: 48, title: translate(TR.SUB_CATEGORIES.BOWLS), measurement: MEASUREMENTS.WEIGHT},
    {id: 14, title: translate(TR.SUB_CATEGORIES.NOODLES), measurement: MEASUREMENTS.WEIGHT},
    {id: 46, title: translate(TR.SUB_CATEGORIES.PASTA), measurement: MEASUREMENTS.WEIGHT},
    {id: 15, title: translate(TR.SUB_CATEGORIES.PIZZA), measurement: MEASUREMENTS.WEIGHT},
    {id: 16, title: translate(TR.SUB_CATEGORIES.SHAWARMA), measurement: MEASUREMENTS.WEIGHT},
    {id: 17, title: translate(TR.SUB_CATEGORIES.SEAFOOD), measurement: MEASUREMENTS.WEIGHT},
    {id: 47, title: translate(TR.SUB_CATEGORIES.OYSTERS), measurement: MEASUREMENTS.WEIGHT},
    {id: 49, title: translate(TR.SUB_CATEGORIES.MUSSELS), measurement: MEASUREMENTS.WEIGHT},
    {id: 18, title: translate(TR.SUB_CATEGORIES.SALADS), measurement: MEASUREMENTS.WEIGHT},
    {id: 50, title: translate(TR.SUB_CATEGORIES.TARTARS), measurement: MEASUREMENTS.WEIGHT},
    {id: 19, title: translate(TR.SUB_CATEGORIES.MEAT_DISHES), measurement: MEASUREMENTS.WEIGHT},
    {id: 20, title: translate(TR.SUB_CATEGORIES.FISH_DISHES), measurement: MEASUREMENTS.WEIGHT},
    {id: 21, title: translate(TR.SUB_CATEGORIES.DISHES_ON_FIRE), measurement: MEASUREMENTS.WEIGHT},
    {id: 22, title: translate(TR.SUB_CATEGORIES.SAUCES), measurement: MEASUREMENTS.WEIGHT},
    {id: 23, title: translate(TR.SUB_CATEGORIES.ADDICTIVES), measurement: MEASUREMENTS.LIQUID},
    // DESSERTS
    {id: 24, title: translate(TR.SUB_CATEGORIES.BAKERY), measurement: MEASUREMENTS.WEIGHT},
    {id: 25, title: translate(TR.SUB_CATEGORIES.DESSERTS), measurement: MEASUREMENTS.WEIGHT},
    {id: 51, title: translate(TR.SUB_CATEGORIES.ICE_CREAM), measurement: MEASUREMENTS.LIQUID},
    // HOT_DRINKS
    {id: 27, title: translate(TR.SUB_CATEGORIES.TEA), measurement: MEASUREMENTS.LIQUID},
    {id: 54, title: translate(TR.SUB_CATEGORIES.PUERH), measurement: MEASUREMENTS.LIQUID},
    {id: 55, title: translate(TR.SUB_CATEGORIES.COFFEE), measurement: MEASUREMENTS.LIQUID},
    {id: 75, title: translate(TR.SUB_CATEGORIES.MULLED_WINE), measurement: MEASUREMENTS.LIQUID},
    // BAR
    {id: 26, title: translate(TR.SUB_CATEGORIES.DRINKS), measurement: MEASUREMENTS.LIQUID},
    {id: 56, title: translate(TR.SUB_CATEGORIES.FRESH), measurement: MEASUREMENTS.LIQUID},
    {id: 28, title: translate(TR.SUB_CATEGORIES.COCKTAILS), measurement: MEASUREMENTS.LIQUID},
    {id: 57, title: translate(TR.SUB_CATEGORIES.BEER), measurement: MEASUREMENTS.LIQUID},
    {id: 58, title: translate(TR.SUB_CATEGORIES.SHOTS), measurement: MEASUREMENTS.LIQUID},
    {id: 59, title: translate(TR.SUB_CATEGORIES.LONGS), measurement: MEASUREMENTS.LIQUID},
    {id: 28, title: translate(TR.SUB_CATEGORIES.WINE_CARD), measurement: MEASUREMENTS.LIQUID},
    {id: 60, title: translate(TR.SUB_CATEGORIES.WINE_GEORGIA), measurement: MEASUREMENTS.LIQUID},
    {id: 61, title: translate(TR.SUB_CATEGORIES.WINE_ITALY), measurement: MEASUREMENTS.LIQUID},
    {id: 62, title: translate(TR.SUB_CATEGORIES.WINE_FRANCE), measurement: MEASUREMENTS.LIQUID},
    {id: 63, title: translate(TR.SUB_CATEGORIES.WINE_SPARKLING), measurement: MEASUREMENTS.LIQUID},
    {id: 29, title: translate(TR.SUB_CATEGORIES.WINE_CHILE), measurement: MEASUREMENTS.LIQUID},
    {id: 65, title: translate(TR.SUB_CATEGORIES.NALUVKU), measurement: MEASUREMENTS.LIQUID},
    {id: 66, title: translate(TR.SUB_CATEGORIES.VERMOUTH), measurement: MEASUREMENTS.LIQUID},
    {id: 67, title: translate(TR.SUB_CATEGORIES.TINCTURE), measurement: MEASUREMENTS.LIQUID},
    {id: 68, title: translate(TR.SUB_CATEGORIES.LIQUEUR), measurement: MEASUREMENTS.LIQUID},
    {id: 69, title: translate(TR.SUB_CATEGORIES.TEQUILA), measurement: MEASUREMENTS.LIQUID},
    {id: 70, title: translate(TR.SUB_CATEGORIES.GIN), measurement: MEASUREMENTS.LIQUID},
    {id: 71, title: translate(TR.SUB_CATEGORIES.RUM), measurement: MEASUREMENTS.LIQUID},
    {id: 72, title: translate(TR.SUB_CATEGORIES.WHISKEY), measurement: MEASUREMENTS.LIQUID},
    {id: 73, title: translate(TR.SUB_CATEGORIES.COGNAC), measurement: MEASUREMENTS.LIQUID},
    {id: 30, title: translate(TR.SUB_CATEGORIES.HORILKA), measurement: MEASUREMENTS.LIQUID},
];

// It's simpler to get data from object than from array
// That's why we create object from array.
// Where we will be able to get all info by key and even position. Index is responsible by position.
export const CATEGORY_ID_MAPPER_AS_OBJECT = (() => {
    const result = {}
    CATEGORY_MAPPER_AS_ARRAY.forEach(((category, index) => result[category.id] = {...category, index}))
    return result;
})();

export const TOP_CATEGORIES = {
    KITCHEN: [31, 32, 1, 33, 34, 2, 35, 36, 7, 8, 37, 38, 3, 4, 39, 40, 5, 41, 42, 6, 43, 44, 9, 10, 44, 11, 12, 13, 45, 48, 14, 46, 15, 16, 17, 47, 49, 18, 50, 19, 20, 21, 22, 23],
    DESSERTS: [24, 25, 51],
    HOT_DRINKS: [27, 54, 55, 75],
    BAR: [26, 56, 28, 57, 58, 59, 28, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
}

export const getSortedUniqueCategoryIds = (menuItems = []) => {
    const categoryIds = menuItems.map(mi => mi.categoryId);
    const uniqueCategories = [...new Set([...categoryIds])];
    return uniqueCategories;
}

export const sortMenuItemPosition = (menuItems = []) =>
    menuItems.sort((menuItem1, menuItem2) => {
        return CATEGORY_ID_MAPPER_AS_OBJECT[menuItem1.categoryId].index - CATEGORY_ID_MAPPER_AS_OBJECT[menuItem2.categoryId].index;
    })

export const getTopCategoryId = (categoryId, topCategories) => {
    let topCategoryName = '';

    if (TOP_CATEGORIES.KITCHEN.includes(categoryId)) {
        topCategoryName = 'KITCHEN'
    }

    if (TOP_CATEGORIES.DESSERTS.includes(categoryId)) {
        topCategoryName = 'DESSERTS'
    }

    if (TOP_CATEGORIES.BAR.includes(categoryId)) {
        topCategoryName = 'BAR'
    }

    let topCategoryIndex = 0;

    topCategories.forEach((tp, index) => {
        if (tp.key === topCategoryName) {
            topCategoryIndex = index;
        }
    })

    return topCategoryIndex;
}

export const getTopCategories = (categoryIds = []) => {
    const topCategories = {
        KITCHEN: {ids: [], translationKey: TR.TOP_CATEGORIES.KITCHEN},
        DESSERTS: {ids: [], translationKey: TR.TOP_CATEGORIES.DESSERTS},
        HOT_DRINKS: {ids: [], translationKey: TR.TOP_CATEGORIES.HOT_DRINKS},
        BAR: {ids: [], translationKey: TR.TOP_CATEGORIES.BAR},
    }

    categoryIds.forEach(categoryId => {
        if (TOP_CATEGORIES.KITCHEN.includes(categoryId)) {
            topCategories.KITCHEN.ids.push(categoryId)
        }
        if (TOP_CATEGORIES.DESSERTS.includes(categoryId)) {
            topCategories.DESSERTS.ids.push(categoryId)
        }
        if (TOP_CATEGORIES.HOT_DRINKS.includes(categoryId)) {
            topCategories.HOT_DRINKS.ids.push(categoryId)
        }
        if (TOP_CATEGORIES.BAR.includes(categoryId)) {
            topCategories.BAR.ids.push(categoryId)
        }
    })

    const t = Object.keys(topCategories)
        .map(key => {
            if (topCategories[key].ids.length > 0) {
                return {
                    ...topCategories[key],
                    key
                }
            }

            return false;

        })

    return t.filter(Boolean)
}
