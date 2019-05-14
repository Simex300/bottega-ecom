import {
    SET_SHOP_CATEGORIES,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    SET_SHOP_PRODUCTS
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    products: [],
    selectedCategoryId: 0,
    productsSelected: []
}

export default function (state = INITIAL_STATE, action){
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            return {
                ...state,
                selectedCategoryId: action.payload
            }
            
        default:
            return state;
    }
}