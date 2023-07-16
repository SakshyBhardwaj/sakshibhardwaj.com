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

export default function Work() {
    return (
        <motion.div variants={scrollTriggerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }} className="">
            <motion.h1 variants={scrollTriggerAnimation} className="text-accent text-4xl md:text-5xl mt-4 font-medium">I’ve worked <span className='tracking-widest font-thin'>across</span> domains</motion.h1>
            <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between py-5 border-t-[0.05rem] border-accent border-opacity-10 mt-4 font-light">
                <p className={`${paraStyle}`}>
                    <span className="text-highlight">
                        UX Designer
                    </span>
                    <br />
                    <span className="text-opacity-50 text-accent">
                        @ Accenture
                    </span>

                </p>
                <p className={`text-right ${paraStyle}`}>Summer &apos;22 - Now</p>
            </motion.div>
            <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between py-5 border-t-[0.05rem] border-accent border-opacity-10 font-light">
                <p className={`${paraStyle}`}>
                    <span className="text-highlight">
                        Creative Developer
                    </span>
                    <br />
                    <span className="text-opacity-50 text-accent">
                        @ IIT Gandhinagar
                    </span>
                </p>
                <p className={`text-right ${paraStyle}`}>Summer &apos;22</p>
            </motion.div>
            <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between py-5 border-y-[0.05rem] border-accent border-opacity-10 font-light">
                <p className={`${paraStyle}`}>
                    <span className="text-highlight">
                        Product Designer
                    </span>
                    <br />
                    <span className="text-opacity-50 text-accent">
                        @ Sezzle
                    </span>
                </p>
                <p className={`text-right ${paraStyle}`}>Mid &apos;21 - &apos;22</p>
            </motion.div>
        </motion.div>
    )
}