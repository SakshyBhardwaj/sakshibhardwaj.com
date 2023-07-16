import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from '../components/global/Layout'
import Head from 'next/head'

import MotionTile from "../components/play/MotionTile"
import Contact from "../components/global/contact/Contact"
import Overlay from "../components/play/Overlay"
import { playData } from "../data/playData"

const scrollTriggerAnimation = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

export default function Play() {
    const [showOverlay, setShowOverlay] = useState(99) //0-23 = true, 99 = false
    function handleOverlayState(id) {
        showOverlay === 99 ? setShowOverlay(id) : setShowOverlay(99)
    }
    return (
        <Layout>
            <Head>
                <title>Sakshi Bhardwaj | Play</title>
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
            <div style={{ scrollbarGutter: `stable both-edges` }} className={`fixed left-0 top-0 z-10 w-full h-full overflow-x-hidden overflow-y-auto flex flex-col items-center ${showOverlay === 99 ? 'z-10' : 'z-30'} scrollbar-hide`}> {/*fullpage container*/}
                <main className={`max-w-5xl w-full mt-16 flex flex-col gap-36`}> {/*content container*/}
                    <motion.h2 className="-mb-32 ml-3 text-accent opacity-50"
                        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 0.5, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
                    >
                    &#47;&#47; Play
                    </motion.h2>
                    <div className="h-fit flex flex-col md:flex-row pb-36">
                        <div className="h-fit w-full grid grid-cols-2 gap-6 justify-around px-3"> {/*left column*/}
                            {playData.slice(0, 12).map((e, i) => {
                                return <MotionTile
                                    variants={scrollTriggerAnimation}
                                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }}
                                    imgUrl={e.imgUrl}
                                    big={i % 3 === 0}
                                    id={i}
                                    key={i}
                                    handleOverlayState={handleOverlayState}
                                    alt={e.name}
                                />
                            })}
                        </div>
                        <div className="h-fit w-full grid grid-cols-2 gap-6 mt-6 md:mt-0 justify-around px-3"> {/*right column*/}
                            {playData.slice(12, 24).map((e, i) => {
                                return <MotionTile
                                    variants={scrollTriggerAnimation}
                                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }}
                                    imgUrl={e.imgUrl}
                                    big={(i + 1) % 3 === 0}
                                    id={i + 12}
                                    key={i}
                                    handleOverlayState={handleOverlayState}
                                    alt={e.name}
                                />
                            })}
                        </div>
                    </div>
                </main>
                <Contact />
                <AnimatePresence>
                    {showOverlay !== 99 && <Overlay id={showOverlay} handleOverlayState={handleOverlayState} />}
                </AnimatePresence>
            </div>
        </Layout>
    )
}

