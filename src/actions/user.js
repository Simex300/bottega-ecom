import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from './types';

export function signIn({email, password}) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Adonis Almonte',
                address: '1234 Something',
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product, quantity) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: {
            product,
            quantity
        }
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ex, finibus id vehicula eu, tempus non mauris.',
                    price: 1.99,
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ex, finibus id vehicula eu, tempus non mauris.',
                    price: 1.99,
                    belongsTo: [0, 5],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
            {
                _id: 1,
                total: 5.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
            {
                _id: 2,
                total: 8.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
            {
                _id: 3,
                total: 8.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
            {
                _id: 4,
                total: 8.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
            {
                _id: 5,
                total: 8.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
            {
                _id: 6,
                total: 8.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
            {
                _id: 7,
                total: 8.20,
                orderNumber: 'ASGF5618S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adonis Almonte',
                    shippingAddress: '5481 West State Street'
                }
            },
        ]
    })
}