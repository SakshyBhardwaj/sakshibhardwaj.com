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
            <motion.h1 variants={scrollTriggerAnimation} className="text-accent text-4xl md:text-5xl mt-4 font-medium">and got a few certifications</motion.h1>
            <div className="">
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pt-5 border-t-[0.05rem] border-accent border-opacity-10 mt-4 font-light">
                    <p className={`${paraStyle}`}>
                        <span className="text-highlight">
                            Google UX Design professional certification
                        </span>
                        <br />
                        <span className="text-opacity-50 text-accent tracking-tighter md:tracking-normal">
                            @ Google UX Design
                        </span>
                    </p>
                    <p className={`text-right ${paraStyle}`}>Nov &apos;22</p>
                </motion.div>
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pb-5 border-b-[0.05rem] border-accent border-opacity-10 mt-4">
                    <p className={`${paraStyle}`}>I completed all the 7 courses;. Check it out <a className="button underline decoration-[0.5px] underline-offset-4" href="https://www.coursera.org/account/accomplishments/specialization/certificate/FVZN4L9U5499" target="_blank" rel="noreferrer">here↗</a></p>
                </motion.div>
            </div>
            <div>
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pt-5 font-light">
                    <p className={`${paraStyle}`}>
                        <span className="text-highlight">
                            Learn to code for web
                        </span>
                        <br />
                        <span className="text-opacity-50 text-accent">
                            @ University of Leeds
                        </span>
                    </p>
                    <p className={`text-right ${paraStyle}`}>Oct &apos;21</p>
                </motion.div>
                <motion.div variants={scrollTriggerAnimation} className="w-full h-fit flex justify-between pb-5 border-b-[0.05rem] border-accent border-opacity-10 mt-4">
                    <p className={`${paraStyle}`}>A course which I took to understand the dev side of the project.</p>
                </motion.div>
            </div>
        </motion.div>
    )
}