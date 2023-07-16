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

export default function Awards() {
    return (
        <motion.div variants={scrollTriggerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }} className="">
            <motion.h1 variants={scrollTriggerAnimation} className="text-accent text-4xl md:text-5xl mt-4 font-medium">and won some awards</motion.h1>
            <div className="">
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pt-5 border-t-[0.05rem] border-accent border-opacity-10 mt-4 font-light">
                    <p className={`${paraStyle}`}>
                        <span className="text-highlight">
                            Best Capstone Project
                        </span>
                        <br />
                        <span className="text-opacity-50 text-accent tracking-tighter md:tracking-normal">
                            @ Anant National University
                        </span>
                    </p>
                    <p className={`text-right ${paraStyle}`}>Nov &apos;22</p>
                </motion.div>
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pb-5 border-b-[0.05rem] border-accent border-opacity-10 mt-4">
                    <p className={`${paraStyle}`}>My project was titled &apos;If Code then Art&apos;. Read it <a className="button underline decoration-[0.5px] underline-offset-4" href="https://issuu.com/aamirshaikh95/docs/if_code_then_art" target="_blank" rel="noreferrer">here↗</a></p>
                </motion.div>
            </div>
            <div>
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pt-5 font-light">
                    <p className={`${paraStyle}`}>
                        <span className="text-highlight">
                            Rank 1
                        </span>
                        <br />
                        <span className="text-opacity-50 text-accent">
                            @ Upraised Embark
                        </span>
                    </p>
                    <p className={`text-right ${paraStyle}`}>Oct &apos;21</p>
                </motion.div>
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pb-5 border-b-[0.05rem] border-accent border-opacity-10 mt-4">
                    <p className={`${paraStyle}`}>A national design contest, in which half a million students participated</p>
                </motion.div>
            </div>
        </motion.div>
    )
}