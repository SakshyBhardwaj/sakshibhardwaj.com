import { motion } from "framer-motion"
import Image from "next/image"
import myImage from '../../public/images/me.jpg'

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

export default function Intro() {
    return (
        <motion.div variants={scrollTriggerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }} className="">
            <motion.div className="w-full h-80 rounded-md relative overflow-hidden flex items-end" variants={scrollTriggerAnimation}>
                <Image placeholder="blur" quality={100} layout="fill" objectFit="cover" objectPosition={"center bottom"} src={myImage} alt="Photo of Sakshi Bhardwaj" priority draggable="false" />
            </motion.div>
            <motion.h1 variants={scrollTriggerAnimation} className="text-accent text-4xl md:text-5xl mt-8 font-medium">I <span className='italic'>design</span> digital interfaces</motion.h1>
            <motion.p variants={scrollTriggerAnimation} className={`mt-4 ${paraStyle}`}>From a young age, I&apos;ve been fascinated by the world of computers and software. Features like copy, paste, and undo seemed magical and touch screens were a joy use. Along the way, I&apos;ve developed a keen interest in visual design, and found my calling to digital Product Design.</motion.p>
        </motion.div>
    )
}