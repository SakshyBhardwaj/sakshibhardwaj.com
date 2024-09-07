import { motion } from "framer-motion"
import { forwardRef } from "react"
import Contact from "../components/global/contact/Contact"
import { workData } from "../data/workData"
import Image from "next/image"
import Layout from '../components/global/Layout'
import Head from 'next/head'

import workImg1 from "../public/images/work/checkout.png"
import workImg2 from "../public/images/work/ryanair.png"
import workImg3 from "../public/images/work/infographic.png"
import workImg4 from "../public/images/work/referral.png"

const workImgArray = [workImg1, workImg2, workImg3, workImg4]

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>Sakshi Bhardwaj | Work</title>
                <meta name="title" content="Sakshi Bhardwaj" />
                <meta name="description" content="Designer. Developer. Creative Coder." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sakshibhardwaj.com/" />
                <meta property="og:title" content="Sakshi Bhardwaj" />
                <meta property="og:description" content="Designer. Developer. Creative Coder." />
                <meta property="og:image" content="https://sakshibhardwaj.com/images/og-image.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://sakshibhardwaj.com/" />
                <meta property="twitter:title" content="Sakshi Bhardwaj" />
                <meta property="twitter:description" content="Designer. Developer. Creative Coder." />
                <meta property="twitter:image" content="https://sakshibhardwaj.com/images/og-image.jpg" />
            </Head>
            <div style={{ scrollbarGutter: `stable both-edges` }} className='fixed left-0 top-0 z-10 w-full h-full overflow-x-hidden overflow-y-auto flex flex-col items-center scrollbar-hide'> {/*fullpage container*/}
                <main className={`px-3 w-full max-w-5xl mt-16 flex flex-col gap-36 md:gap-48`}> {/*content container*/}
                    <motion.h2 className="-mb-32 md:-mb-44 text-accent"
                        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 0.5, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }} viewport={{ once: true, margin: '0px 0px -200px 0px' }}
                    >&#47;&#47; Work</motion.h2>
                    {workData.map((e, i) => <WorkCard key={i} id={i} lastitem={workData.length - i === 1} />)}
                </main>
                <Contact />
            </div>
        </Layout>
    )
}

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

function InitWorkCard(props, ref) {
    return (
        <motion.div ref={ref} className={`${props.lastitem ? 'pb-64' : ''}`}
            variants={scrollTriggerAnimation}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
        >
            <div className="w-full h-fit flex flex-col"> {/*Outermost Box*/}
                <div className={`flex flex-col ${props.id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}  gap-4`}> {/*Image and desc container*/}
                    <motion.div className="w-full h-full" variants={scrollTriggerAnimation}>
                        <Image src={workImgArray[props.id]} placeholder="blur" width={300} height={300} layout="responsive" priority={props.id === 0} alt={`${workData[props.id].title}`} draggable="false" /> {/*Image*/}
                    </motion.div>
                    <div className="w-full flex flex-col justify-between">
                        <div>
                            <motion.h1 variants={scrollTriggerAnimation} className="mt-2 md:mt-0 text-4xl md:text-5xl text-accent"><span className="text-accent text-opacity-50">{workData[props.id].nos}</span> {workData[props.id].title}</motion.h1>
                            <motion.div variants={scrollTriggerAnimation} className="flex items-center mt-2 w-full h-8 md:h-10 border-y border-accent border-opacity-20"> {/*Tags*/}
                                <p className="text-base font-light text-highlight">{workData[props.id].tags}</p>
                            </motion.div>
                        </div>
                        <motion.p variants={scrollTriggerAnimation} className="mt-4 md:text-lg font-light text-accent"> {/*Desc*/}
                            {workData[props.id].desc}
                        </motion.p>
                    </div>
                </div>
                <a href={workData[props.id].link} target="_blank" rel="noreferrer">
                    <motion.button variants={scrollTriggerAnimation} className={`mt-4 w-full h-11 shrink-0 bg-[#191919] hover:bg-[#222222] transition-colors duration-150 rounded-[10px] flex justify-center items-center group border-y-[0.05rem] border-[#404040b1] text-accent`}>
                        <p>Read</p>
                        {/* <img src={`/icons/arrow-up-right.svg`} className={`w-6 h-6 ml-2`} draggable="false" alt='up-right-arrow' /> */}
                        <Image
                            src={`/icons/arrow-up-right.svg`}
                            alt="up-right-arrow"
                            width={24}
                            height={24}
                            className="ml-2"
                        />
                    </motion.button>
                </a>
            </div>
        </motion.div>
    )
}

const WorkCard = forwardRef(InitWorkCard)
