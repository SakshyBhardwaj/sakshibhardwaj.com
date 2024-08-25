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
                        Lead UI/UX Designer
                    </span>
                    <br />
                    <span className="text-opacity-50 text-accent">
                        @ Gemini Solutions Pvt. Ltd.
                    </span>

                </p>
                <p className={`text-right ${paraStyle}`}>April &apos;20 - Now</p>
            </motion.div>
            <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between py-5 border-t-[0.05rem] border-accent border-opacity-10 font-light">
                <p className={`${paraStyle}`}>
                    <span className="text-highlight">
                        Product Designer
                    </span>
                    <br />
                    <span className="text-opacity-50 text-accent">
                        @ Spark Eighteen
                    </span>
                </p>
                <p className={`text-right ${paraStyle}`}>Jan &apos;19 - Dec &apos;19</p>
            </motion.div>
            <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between py-5 border-y-[0.05rem] border-accent border-opacity-10 font-light">
                <p className={`${paraStyle}`}>
                    <span className="text-highlight">
                        UI/UX Designer
                    </span>
                    <br />
                    <span className="text-opacity-50 text-accent">
                        @ Digital Impressions India
                    </span>
                </p>
                <p className={`text-right ${paraStyle}`}>July &apos;17 - Dec &apos;19</p>
            </motion.div>
            <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between py-5 border-t-[0.05rem] border-accent border-opacity-10 font-light">
            <p className={`${paraStyle}`}>
                <span className="text-highlight">
                    Art Director
                </span>
                <br />
                <span className="text-opacity-50 text-accent">
                    @ Curious Minds
                </span>
            </p>
            <p className={`text-right ${paraStyle}`}>Oct &apos;15 - Jul &apos;17</p>
        </motion.div>
        <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between py-5 border-t-[0.05rem] border-accent border-opacity-10 font-light">
            <p className={`${paraStyle}`}>
                <span className="text-highlight">
                    Graphic Designer
                </span>
                <br />
                <span className="text-opacity-50 text-accent">
                    @ Allied Market Research
                </span>
            </p>
            <p className={`text-right ${paraStyle}`}>July &apos;13 - Sep &apos;15</p>
        </motion.div>
        </motion.div>
 )
}