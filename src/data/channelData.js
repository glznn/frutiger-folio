export const channelData = [
    {
        name:"Contact",
        text: "Contact",
        image: '/images/contact-preview.gif',
        video:'/videos/contact-preview-new.mp4',

        path: '/contact',
        prev:'/',
        next:'/bis-blue',

        status: 'active',
    },
    {
        name:"Bis Blue",
        text: "",
        image: '/images/bis-blue-preview.gif',
        video: '/videos/bis-blue-preview-new.mp4',

        path: '/bis-blue',
        prev:'/contact',
        next:'/exedra',

        status: 'active',

        buttonText: "Visit Site",
        buttonPath: 'https://bisblue.com',
    },
    {
        name: "Exedra",
        text: "",
        image: '/images/exedra-preview.png',
        video: '/videos/exedra-preview-new.mp4',

        path: '/exedra',
        prev:'/bis-blue',
        next:'/promo',

        status: 'active',

        buttonText: "Visit Site",
        buttonPath: 'https://exedra.app',
    },
    {
        name:"Your Name Here!",
        text: "",
        image: '/images/promo-preview.gif',
        video: '/videos/promo-preview-new.mp4',

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
        image: '/images/game-preview.webp',

        path: '/game',
        prev: '/promo',
        next:'/credits',

        status: 'active',

        buttonText: "Coming Soon!",
        buttonPath: '/',
    },
    {
        name:"Credits",
        text: "",
        image: '/images/credits-preview.gif',
        video: '/videos/credits-preview-mobile.mp4',

        path: '/credits',
        prev:'/game',
        next:'/',

        status: 'active',

        buttonText: "Contact",
        buttonPath: '/contact',
    },
    {
        video: '/videos/tv-static.mp4',
        path: '/',

        status: 'inactive',
    },
    {
        video: '/videos/tv-static.mp4',
        path: '/',

        status: 'inactive',
    },
    {
        video: '/videos/tv-static.mp4',
        path: '/',

        status: 'inactive',
    },
    {
        video: '/videos/tv-static.mp4',
        path: '/',

        status: 'inactive',
    },
    {
        video: '/videos/tv-static.mp4',
        path: '/',

        status: 'inactive',
    },
    {
        video: '/videos/tv-static.mp4',
        path: '/',

        status: 'inactive',
    },
]