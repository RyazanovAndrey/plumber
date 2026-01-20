import { Variants } from "motion";

export const containerStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
            delay: 400
        }
    }
}

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        filter: 'blur(5px)',
        y: 20
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
}

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
        filter: 'blur(5px)',
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
}