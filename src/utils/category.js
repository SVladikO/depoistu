import {translate, TRANSLATION, TRANSLATION as TR} from "./translation";

export const MEASUREMENTS = {
    WEIGHT: TRANSLATION.MEASUREMENTS.WEIGHT,
    LIQUID: TRANSLATION.MEASUREMENTS.LIQUID,
}

// We have all category ids on frontend side
// Position category title in this array responsible by position in horizontal sub categories
//TODO: Migrate category id to db as after moving to another countries we will be unable to support their menu and categories
export const CATEGORY_KITCHEN = [
    // KITCHEN
    {id: 31, title: TR.SUB_CATEGORIES.CHILDREN, measurement: MEASUREMENTS.WEIGHT},
    {id: 32, title: TR.SUB_CATEGORIES.VEGETARIAN, measurement: MEASUREMENTS.WEIGHT},
    {id: 1, title: TR.SUB_CATEGORIES.BREAKFAST, measurement: MEASUREMENTS.WEIGHT},
    {id: 5, title: TR.SUB_CATEGORIES.COLD_APPETIZERS, measurement: MEASUREMENTS.WEIGHT},
    {id: 41, title: TR.SUB_CATEGORIES.HOT_APPETIZERS, measurement: MEASUREMENTS.WEIGHT},
    {id: 18, title: TR.SUB_CATEGORIES.SALADS, measurement: MEASUREMENTS.WEIGHT},
    {id: 35, title: TR.SUB_CATEGORIES.FIRST_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 36, title: TR.SUB_CATEGORIES.SECOND_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 87, title: TR.SUB_CATEGORIES.MAIN_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 94, title: TR.SUB_CATEGORIES.LENTEN_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 33, title: TR.SUB_CATEGORIES.HOME, measurement: MEASUREMENTS.WEIGHT},
    {id: 34, title: TR.SUB_CATEGORIES.SEASONAL, measurement: MEASUREMENTS.WEIGHT},
    {id: 2, title: TR.SUB_CATEGORIES.SOUPS, measurement: MEASUREMENTS.WEIGHT},
    {id: 93, title: TR.SUB_CATEGORIES.DOUGH, measurement: MEASUREMENTS.WEIGHT},
    {id: 4, title: TR.SUB_CATEGORIES.HOT_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 7, title: TR.SUB_CATEGORIES.SPECIALITIES, measurement: MEASUREMENTS.WEIGHT},
    {id: 8, title: TR.SUB_CATEGORIES.BANQUET_MENU, measurement: MEASUREMENTS.WEIGHT},
    {id: 95, title: TR.SUB_CATEGORIES.OWN_SMOKING, measurement: MEASUREMENTS.WEIGHT},
    {id: 88, title: TR.SUB_CATEGORIES.GRILL, measurement: MEASUREMENTS.WEIGHT},
    {id: 37, title: TR.SUB_CATEGORIES.DUMPLING, measurement: MEASUREMENTS.WEIGHT},
    {id: 38, title: TR.SUB_CATEGORIES.PANCAKES, measurement: MEASUREMENTS.WEIGHT},
    {id: 3, title: TR.SUB_CATEGORIES.BUSINESS_LUNCH, measurement: MEASUREMENTS.WEIGHT},
    {id: 39, title: TR.SUB_CATEGORIES.PANS, measurement: MEASUREMENTS.WEIGHT},
    {id: 40, title: TR.SUB_CATEGORIES.FOR_COMPANY, measurement: MEASUREMENTS.WEIGHT},
    {id: 42, title: TR.SUB_CATEGORIES.SNACKS, measurement: MEASUREMENTS.WEIGHT},
    {id: 6, title: TR.SUB_CATEGORIES.SIDE_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 43, title: TR.SUB_CATEGORIES.KHINKALI, measurement: MEASUREMENTS.WEIGHT},
    {id: 44, title: TR.SUB_CATEGORIES.HOT_DOGS, measurement: MEASUREMENTS.WEIGHT},
    {id: 9, title: TR.SUB_CATEGORIES.SANDWITCH, measurement: MEASUREMENTS.WEIGHT},
    {id: 10, title: TR.SUB_CATEGORIES.BURGERS, measurement: MEASUREMENTS.WEIGHT},
    {id: 90, title: TR.SUB_CATEGORIES.STEAK, measurement: MEASUREMENTS.WEIGHT},
    {id: 11, title: TR.SUB_CATEGORIES.SUSHI, measurement: MEASUREMENTS.WEIGHT},
    {id: 12, title: TR.SUB_CATEGORIES.ROLLS, measurement: MEASUREMENTS.WEIGHT},
    {id: 13, title: TR.SUB_CATEGORIES.SUSHI_SETS, measurement: MEASUREMENTS.WEIGHT},
    {id: 45, title: TR.SUB_CATEGORIES.WOC, measurement: MEASUREMENTS.WEIGHT},
    {id: 48, title: TR.SUB_CATEGORIES.BOWLS, measurement: MEASUREMENTS.WEIGHT},
    {id: 14, title: TR.SUB_CATEGORIES.NOODLES, measurement: MEASUREMENTS.WEIGHT},
    {id: 46, title: TR.SUB_CATEGORIES.PASTA, measurement: MEASUREMENTS.WEIGHT},
    {id: 15, title: TR.SUB_CATEGORIES.PIZZA, measurement: MEASUREMENTS.WEIGHT},
    {id: 16, title: TR.SUB_CATEGORIES.SHAWARMA, measurement: MEASUREMENTS.WEIGHT},
    {id: 17, title: TR.SUB_CATEGORIES.SEAFOOD, measurement: MEASUREMENTS.WEIGHT},
    {id: 47, title: TR.SUB_CATEGORIES.OYSTERS, measurement: MEASUREMENTS.WEIGHT},
    {id: 49, title: TR.SUB_CATEGORIES.MUSSELS, measurement: MEASUREMENTS.WEIGHT},
    {id: 50, title: TR.SUB_CATEGORIES.TARTARS, measurement: MEASUREMENTS.WEIGHT},
    {id: 19, title: TR.SUB_CATEGORIES.MEAT_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 20, title: TR.SUB_CATEGORIES.FISH_DISHES, measurement: MEASUREMENTS.WEIGHT},
    {id: 21, title: TR.SUB_CATEGORIES.DISHES_ON_FIRE, measurement: MEASUREMENTS.WEIGHT},
    {id: 77, title: TR.SUB_CATEGORIES.CRAFT_BREAD, measurement: MEASUREMENTS.WEIGHT},
    {id: 22, title: TR.SUB_CATEGORIES.SAUCES, measurement: MEASUREMENTS.WEIGHT},
    {id: 23, title: TR.SUB_CATEGORIES.ADDICTIVES, measurement: MEASUREMENTS.WEIGHT},
];

export const CATEGORY_DESSERTS = [
    {id: 24, title: TR.SUB_CATEGORIES.BAKERY, measurement: MEASUREMENTS.WEIGHT},
    {id: 25, title: TR.SUB_CATEGORIES.DESSERTS, measurement: MEASUREMENTS.WEIGHT},
    {id: 51, title: TR.SUB_CATEGORIES.ICE_CREAM, measurement: MEASUREMENTS.WEIGHT},
];
//
export const CATEGORY_HOT_DRINKS = [
    {id: 80, title: TR.SUB_CATEGORIES.HOME_TEA, measurement: MEASUREMENTS.LIQUID},
    {id: 81, title: TR.SUB_CATEGORIES.BREWED_TEA, measurement: MEASUREMENTS.LIQUID},
    {id: 27, title: TR.SUB_CATEGORIES.TEA, measurement: MEASUREMENTS.LIQUID},
    {id: 54, title: TR.SUB_CATEGORIES.PUERH, measurement: MEASUREMENTS.LIQUID},
    {id: 82, title: TR.SUB_CATEGORIES.TEA_ADDITION, measurement: MEASUREMENTS.LIQUID},
    {id: 55, title: TR.SUB_CATEGORIES.COFFEE, measurement: MEASUREMENTS.LIQUID},
    {id: 75, title: TR.SUB_CATEGORIES.MULLED_WINE, measurement: MEASUREMENTS.LIQUID},
];
// BAR
export const CATEGORY_BAR = [
    {id: 26, title: TR.SUB_CATEGORIES.DRINKS, measurement: MEASUREMENTS.LIQUID},
    {id: 56, title: TR.SUB_CATEGORIES.FRESH, measurement: MEASUREMENTS.LIQUID},
    {id: 79, title: TR.SUB_CATEGORIES.MORSES_AND_UZVAR, measurement: MEASUREMENTS.LIQUID},
    {id: 89, title: TR.SUB_CATEGORIES.HOMEMADE_LEMONADE, measurement: MEASUREMENTS.LIQUID},
    {id: 78, title: TR.SUB_CATEGORIES.COCKTAILS, measurement: MEASUREMENTS.LIQUID},
    {id: 28, title: TR.SUB_CATEGORIES.COCKTAILS_ALCOHOL, measurement: MEASUREMENTS.LIQUID},
    {id: 58, title: TR.SUB_CATEGORIES.SHOTS, measurement: MEASUREMENTS.LIQUID},
    {id: 59, title: TR.SUB_CATEGORIES.LONGS, measurement: MEASUREMENTS.LIQUID},
    {id: 29, title: TR.SUB_CATEGORIES.WINE_CARD, measurement: MEASUREMENTS.LIQUID},
    {id: 60, title: TR.SUB_CATEGORIES.WINE_GEORGIA, measurement: MEASUREMENTS.LIQUID},
    {id: 61, title: TR.SUB_CATEGORIES.WINE_ITALY, measurement: MEASUREMENTS.LIQUID},
    {id: 62, title: TR.SUB_CATEGORIES.WINE_FRANCE, measurement: MEASUREMENTS.LIQUID},
    {id: 76, title: TR.SUB_CATEGORIES.WINE_CHILE, measurement: MEASUREMENTS.LIQUID},
    {id: 63, title: TR.SUB_CATEGORIES.WINE_SPARKLING, measurement: MEASUREMENTS.LIQUID},
    {id: 83, title: TR.SUB_CATEGORIES.WHITE_WINE, measurement: MEASUREMENTS.LIQUID},
    {id: 84, title: TR.SUB_CATEGORIES.RED_WINE, measurement: MEASUREMENTS.LIQUID},
    {id: 86, title: TR.SUB_CATEGORIES.PING_WINE, measurement: MEASUREMENTS.LIQUID},
    {id: 85, title: TR.SUB_CATEGORIES.NO_ALCOHOL_WINE, measurement: MEASUREMENTS.LIQUID},
    {id: 65, title: TR.SUB_CATEGORIES.NALUVKU, measurement: MEASUREMENTS.LIQUID},
    {id: 66, title: TR.SUB_CATEGORIES.VERMOUTH, measurement: MEASUREMENTS.LIQUID},
    {id: 68, title: TR.SUB_CATEGORIES.LIQUEUR, measurement: MEASUREMENTS.LIQUID},
    {id: 69, title: TR.SUB_CATEGORIES.TEQUILA, measurement: MEASUREMENTS.LIQUID},
    {id: 70, title: TR.SUB_CATEGORIES.GIN, measurement: MEASUREMENTS.LIQUID},
    {id: 71, title: TR.SUB_CATEGORIES.RUM, measurement: MEASUREMENTS.LIQUID},
    {id: 72, title: TR.SUB_CATEGORIES.WHISKEY, measurement: MEASUREMENTS.LIQUID},
    {id: 92, title: TR.SUB_CATEGORIES.BOURBON, measurement: MEASUREMENTS.LIQUID},
    {id: 73, title: TR.SUB_CATEGORIES.COGNAC, measurement: MEASUREMENTS.LIQUID},
    {id: 91, title: TR.SUB_CATEGORIES.BRANDY, measurement: MEASUREMENTS.LIQUID},
    {id: 96, title: TR.SUB_CATEGORIES.CHACHA, measurement: MEASUREMENTS.LIQUID},
    {id: 30, title: TR.SUB_CATEGORIES.HORILKA, measurement: MEASUREMENTS.LIQUID},
    {id: 67, title: TR.SUB_CATEGORIES.TINCTURE, measurement: MEASUREMENTS.LIQUID},
    {id: 57, title: TR.SUB_CATEGORIES.BEER, measurement: MEASUREMENTS.LIQUID},
];

export const CATEGORY_MAPPER_AS_ARRAY = [
    ...CATEGORY_KITCHEN,
    ...CATEGORY_DESSERTS,
    ...CATEGORY_HOT_DRINKS,
    ...CATEGORY_BAR
]

export const TOP_CATEGORIES = {
    KITCHEN: CATEGORY_KITCHEN.map(category => category.id),
    DESSERTS: CATEGORY_DESSERTS.map(category => category.id),
    HOT_DRINKS: CATEGORY_HOT_DRINKS.map(category => category.id),
    BAR: CATEGORY_BAR.map(category => category.id),
}

// Get category title is simpler from object.
// That's why we convert array to object.
// Index is crucial for us as he handls position in sub category
// All subcategories should be grouped
// It will be bad if half of bur in start of menu and in the end
const convertCategoryArrayToObject = () => {
    const result = {}
    CATEGORY_MAPPER_AS_ARRAY
        .map(category => ({...category, title: translate(category.title), measurement: translate(category.measurement)}))
        .forEach(
            (category, index) => result[category.id] = {...category, index}
        )
    return result;
}
export const CATEGORY_ID_MAPPER_AS_OBJECT = convertCategoryArrayToObject()

export const getSortedUniqueCategoryIds = (menuItems = []) => {
    const categoryIds = menuItems.map(mi => mi.categoryId);
    const uniqueCategories = [...new Set([...categoryIds])];
    uniqueCategories.sort((categoryId1, categoryId2) =>
        CATEGORY_ID_MAPPER_AS_OBJECT[categoryId1].index - CATEGORY_ID_MAPPER_AS_OBJECT[categoryId2].index
    )
    return uniqueCategories;
}

export const sortMenuItemPosition = (menuItems = []) =>
    menuItems.sort((menuItem1, menuItem2) => {
        return CATEGORY_ID_MAPPER_AS_OBJECT[menuItem1.categoryId].index - CATEGORY_ID_MAPPER_AS_OBJECT[menuItem2.categoryId].index;
    })

