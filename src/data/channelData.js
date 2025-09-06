import { metadata } from "framer-motion/client";

export const channelData = [
    {
        name:"Contact",
        text: "Contact",
        image: '/images/contact-preview.gif',

        path: '/contact',
        prev:'/',
        next:'/bis-blue',

        status: 'active',
    },
    {
        name:"Bis Blue",
        text: "",
        image: '/images/bis-blue-preview.gif',

        path: '/bis-blue',
        prev:'/contact',
        next:'/exedra',

        status: 'active',

        buttonText: "Learn more",
        buttonPath: '/',
    },
    {
        name: "Exedra",
        text: "",
        image: '/images/exedra-preview.gif',

        path: '/exedra',
        prev:'/bis-blue',
        next:'/promo',

        status: 'active',

        buttonText: "Learn more",
        buttonPath: '/',
    },
    {
        name:"Your Name Here!",
        text: "",
        image: '/images/promo-preview.gif',

        path: '/promo',
        prev: '/exedra',
        next:'/game',

        status: 'active',

        buttonText: "Contact",
        buttonPath: '/contact',
    },
    {
        name:"Game",
        text: "Game",
        image: '/images/game-preview.png',

        path: '/game',
        prev: '/promo',
        next:'/credits',

        status: 'active',

        buttonText: "Play",
        buttonPath: '/',
    },
    {
        name:"Credits",
        text: "",
        image: '/images/credits-preview.gif',

        path: '/credits',
        prev:'/game',
        next:'/',

        status: 'active',

        buttonText: "Learn more",
        buttonPath: '/',
    },
    {
        image: '/images/tv-static.gif',
        path: '/',

        status: 'inactive',
    },
    {
        image: '/images/tv-static.gif',
        path: '/',

        status: 'inactive',
    },
    {
        image: '/images/tv-static.gif',
        path: '/',

        status: 'inactive',
    },
    {
        image: '/images/tv-static.gif',
        path: '/',

        status: 'inactive',
    },
    {
        image: '/images/tv-static.gif',
        path: '/',

        status: 'inactive',
    },
    {
        image: '/images/tv-static.gif',
        path: '/',

        status: 'inactive',
    },
]