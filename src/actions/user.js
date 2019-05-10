import {
    SET_USER_PURCHASES
} from './types';

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
            {
                _id: 8,
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