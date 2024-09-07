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
        <motion.div variants={scrollTriggerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }} className="w-full flex">
            <motion.div className="flex" variants={scrollTriggerAnimation}>
                {<Image placeholder="blur" variants={scrollTriggerAnimation} objectFit="cover" src={myImage} alt="Photo of Sakshi" /> }
            </motion.div>
            <motion.div style={{ padding: '16px 32px'}}>
                <motion.h1 variants={scrollTriggerAnimation} className="text-accent text-4xl md:text-5xl mb-4 font-medium">I <span className='italic'>design</span> digital interfaces</motion.h1>
                <motion.p variants={scrollTriggerAnimation} className={`mt-4 ${paraStyle}`}>My journey into the world of design began as a fascination with pixels and colors, which has evolved into a deep appreciation for the power of user-centric design. Over the years, I&apos;ve honed my skills in the art of user research, wireframing, and interactive prototyping to sculpt experiences that captivate and engage. My learning journey has been intertwined with cartoons, and I&apos;m proud to have initiated it by contributing to India&apos;s Leading Children&apos;s Magazine, Champak, for approximately 2 years. Outside of the design universe, you might find me immersed in a good book, exploring vibrant cityscapes, or indulging in the world&apos;s finest cup of tea.</motion.p>
            </motion.div>
        </motion.div>
    )
}
