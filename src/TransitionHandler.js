import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export const TransitionHandler = ( {children} ) => {
    const location = useLocation();
    const previousLocation = usePreviousRoute();

    const getTransition = (from, to) => {
        if (!from || !to) return 'fade';
        return 'slide-right';
    }

    const transitionType = getTransition(previousLocation, location);

    const transitions = {
        'fade': { 
            initial: { opacity: 0.75 }, 
            animate: { opacity: 1 },
            exit: { opacity: 0.75 }
        },
        'slide-right': {
            initial: { x: '-25%'},
            animate: { x: 0, y:0 },
            exit: { x: '75%'},
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
                transition={{ duration: 0.2 }}
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