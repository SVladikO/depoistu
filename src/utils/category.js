import {resolveTranslation, TRANSLATION as TR} from "./translation";

const MEASUREMENTS = {
    WEIGHT: 'g',
    LIQUID: 'ml',
}

export const CATEGORY_MAPPER = {
    1: {id: 1, title: resolveTranslation(TR.SUB_CATEGORIES.BREAKFAST), measurement: MEASUREMENTS.WEIGHT},
    2: {id: 2, title: resolveTranslation(TR.SUB_CATEGORIES.SOUPS), measurement: MEASUREMENTS.LIQUID},
    3: {id: 3, title: resolveTranslation(TR.SUB_CATEGORIES.BUSINESS_LUNCH), measurement: MEASUREMENTS.LIQUID},
    4: {id: 4, title: resolveTranslation(TR.SUB_CATEGORIES.HOT_DISHES), measurement: MEASUREMENTS.WEIGHT},
    5: {id: 5, title: resolveTranslation(TR.SUB_CATEGORIES.COLD_APPETIZERS), measurement: MEASUREMENTS.WEIGHT},
    6: {id: 6, title: resolveTranslation(TR.SUB_CATEGORIES.SIDE_DISHES), measurement: MEASUREMENTS.WEIGHT},
    7: {id: 7, title: resolveTranslation(TR.SUB_CATEGORIES.SPECIALITIES), measurement: MEASUREMENTS.WEIGHT},
    8: {id: 8, title: resolveTranslation(TR.SUB_CATEGORIES.BANQUET_MENU), measurement: MEASUREMENTS.WEIGHT},
    9: {id: 9, title: resolveTranslation(TR.SUB_CATEGORIES.SANDWITCH), measurement: MEASUREMENTS.WEIGHT},
    10: {id: 10, title: resolveTranslation(TR.SUB_CATEGORIES.BURGERS), measurement: MEASUREMENTS.WEIGHT},
    11: {id: 11, title: resolveTranslation(TR.SUB_CATEGORIES.SUSHI), measurement: MEASUREMENTS.WEIGHT},
    12: {id: 12, title: resolveTranslation(TR.SUB_CATEGORIES.ROLLS), measurement: MEASUREMENTS.LIQUID},
    13: {id: 13, title: resolveTranslation(TR.SUB_CATEGORIES.SUSHI_SETS), measurement: MEASUREMENTS.LIQUID},
    14: {id: 14, title: resolveTranslation(TR.SUB_CATEGORIES.NOODLES), measurement: MEASUREMENTS.WEIGHT},
    15: {id: 15, title: resolveTranslation(TR.SUB_CATEGORIES.PIZZA), measurement: MEASUREMENTS.WEIGHT},
    16: {id: 16, title: resolveTranslation(TR.SUB_CATEGORIES.SHAWARMA), measurement: MEASUREMENTS.WEIGHT},
    17: {id: 17, title: resolveTranslation(TR.SUB_CATEGORIES.SEAFOOD), measurement: MEASUREMENTS.WEIGHT},
    18: {id: 18, title: resolveTranslation(TR.SUB_CATEGORIES.SALADS), measurement: MEASUREMENTS.WEIGHT},
    19: {id: 19, title: resolveTranslation(TR.SUB_CATEGORIES.MEAT_DISHES), measurement: MEASUREMENTS.WEIGHT},
    20: {id: 20, title: resolveTranslation(TR.SUB_CATEGORIES.FISH_DISHES), measurement: MEASUREMENTS.WEIGHT},
    21: {id: 21, title: resolveTranslation(TR.SUB_CATEGORIES.DISHES_ON_FIRE), measurement: MEASUREMENTS.WEIGHT},
    22: {id: 22, title: resolveTranslation(TR.SUB_CATEGORIES.SAUCES), measurement: MEASUREMENTS.WEIGHT},
    23: {id: 23, title: resolveTranslation(TR.SUB_CATEGORIES.ADDICTIVES), measurement: MEASUREMENTS.LIQUID},
    24: {id: 24, title: resolveTranslation(TR.SUB_CATEGORIES.BAKERY), measurement: MEASUREMENTS.WEIGHT},
    25: {id: 25, title: resolveTranslation(TR.SUB_CATEGORIES.DESSERTS), measurement: MEASUREMENTS.WEIGHT},
    26: {id: 26, title: resolveTranslation(TR.SUB_CATEGORIES.DRINKS), measurement: MEASUREMENTS.LIQUID},
    27: {id: 27, title: resolveTranslation(TR.SUB_CATEGORIES.HOT_DRINKS), measurement: MEASUREMENTS.LIQUID},
    28: {id: 28, title: resolveTranslation(TR.SUB_CATEGORIES.COCKTAILS), measurement: ''},
    29: {id: 29, title: resolveTranslation(TR.SUB_CATEGORIES.WINE_CARD), measurement: MEASUREMENTS.LIQUID},
    30: {id: 30, title: resolveTranslation(TR.SUB_CATEGORIES.ALCOHOL), measurement: MEASUREMENTS.LIQUID},
};

export const TOP_CATEGORIES = {
    KITCHEN: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    DESSERTS: [24, 25],
    BAR: [26, 27, 28, 29, 30],
}

export const getTopCategories = (menuCategoryIds = []) => {
    const topCategories = {
        KITCHEN: {ids: [], translationKey: TR.TOP_CATEGORIES.KITCHEN},
        DESSERTS: {ids: [], translationKey: TR.TOP_CATEGORIES.DESSERTS},
        BAR: {ids: [], translationKey: TR.TOP_CATEGORIES.BAR},
    }

    menuCategoryIds.forEach(id => {
        if (TOP_CATEGORIES.KITCHEN.includes(id)) {
            topCategories.KITCHEN.ids.push(id)
        }
        if (TOP_CATEGORIES.DESSERTS.includes(id)) {
            topCategories.DESSERTS.ids.push(id)
        }
        if (TOP_CATEGORIES.BAR.includes(id)) {
            topCategories.BAR.ids.push(id)
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
