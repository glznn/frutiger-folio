import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { channelData } from './data/channelData'

export const TransitionHandler = ( {children} ) => {
    const location = useLocation();
    const previousLocation = usePreviousRoute();

    const getTransition = (from, to) => {
        if (!from || !to) return 'none';
        if (from.pathname === '/') return 'none';
        if (to.pathname === '/') return 'fade-into';
        
        const channelDataIndex = channelData.findIndex(channel => channel.path === from.pathname);
        if (channelDataIndex === -1) return 'none';

        if (channelData[channelDataIndex].next === to.pathname) return 'slide-left';
        if (channelData[channelDataIndex].prev === to.pathname) return 'slide-right';
        if (to.pathname === '/contact' && from.pathname === '/promo') return 'slide-right';
        if (to.pathname === '/contact' && from.pathname === '/credits') return 'slide-right';
        return 'none';
    }

    const transitionType = getTransition(previousLocation, location);

    const transitions = {
        'fade-into': { 
            initial: { opacity: 0.75 }, 
            animate: { opacity: 1 },
            exit: { opacity: 0.75 },
            transition: { duration: 0.25, easeInOut }
        },
        'slide-right': {
            initial: { x: '-100%' },
            animate: { x: 0 },
            exit: { x: '0%' },
            transition: { duration: 0.75, easeInOut }
        },
        'slide-left': {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "0%" },
            transition: { duration: 0.75, easeInOut }
            },
        'none': {
            initial: { x: 0 },
            animate: { x: 0 },
            exit: { x: 0 },
            transition: { duration: 0.75 }
            }
        }
        
    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="transition-container"
                key={location.pathname}
                initial={transitions[transitionType].initial}
                animate={transitions[transitionType].animate}
                exit={transitions[transitionType].exit}
                transition={transitions[transitionType].transition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

// Keeps track of current page, sets previous equal to 
// current location whenever the route is swapped.
// Feeds this info to the handler to decide what transition
// will be used between two specific pages. 
function usePreviousRoute() {
    const location = useLocation();
    const previous = useRef(null);

    useEffect(() => {
        previous.current = location;
    }, [location]);

    return previous.current;
}