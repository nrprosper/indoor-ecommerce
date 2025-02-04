import {Banknote, Truck, Lock, Phone} from "@/constants/icons";

const links = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Shop',
        path: '/shop'
    },
    {
        label: 'Product',
        path: '/product'
    },
    {
        label: 'Contact us',
        path: '/contact-us'
    }
]

const services = [
    {
        title: 'Free Shipping',
        description: 'Order above $200',
        icon: Truck
    },
    {
        title: 'Money-back',
        description: '30 days guarantee',
        icon: Banknote
    },
    {
        title: 'Secure Payments',
        description: 'Secured by Stripe',
        icon: Lock
    },
    {
        title: '24/7 Support',
        description: 'Phone and Email support',
        icon: Phone
    }
]


export {
    links,
    services
}