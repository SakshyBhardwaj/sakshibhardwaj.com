import { motion } from "framer-motion"

const scrollTriggerAnimation = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    },
}
const paraStyle = `text-accent text-base md:text-lg font-light`

export default function Code() {
    return (
        <motion.div variants={scrollTriggerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }} className="">
            <motion.h1 variants={scrollTriggerAnimation} className="text-accent text-4xl md:text-5xl mt-4 font-medium">I also like to code</motion.h1>
            <motion.p variants={scrollTriggerAnimation} className={`${paraStyle} mt-4`}>A few years back, I came across <span className="font-bold">Creative Coding</span>, which is making art with code, and was obsessed with it. Since then, I&apos;ve done a lot of creative coding work, learnt about shaders, and also taught myself frontend development.</motion.p>
        </motion.div>
    )
}