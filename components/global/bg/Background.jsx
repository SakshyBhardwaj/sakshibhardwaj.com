import Script from 'next/script'
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from 'framer-motion'

var grainOptions = {
    animate: true,
    patternWidth: 100,
    patternHeight: 100,
    grainOpacity: 0.04,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1,
}

export default function Background() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => { setIsClient(true) }, [])

    return (
        <div className="w-screen h-screen fixed top-0 -z-10 flex justify-center" id="background"
            style={{ backgroundImage: `radial-gradient(50% 50% at 50% 50%, #1A1A1A 0%, #000000 100%)` }}
        >
            {<Script src="/grained.js" onLoad={() => grained("#background", grainOptions)} />}
            <motion.div className="w-full h-auto opacity-[10%] relative"
                initial={{ scale: 1.2 }} animate={{ scale: 1, transition: { ease: [0.83, 0, 0.17, 1], duration: 1.5 } }}
            >
                <Image src='/images/cloud-bg.jpg' layout="fill" objectFit="cover" priority alt="Background Image" /> {/*Image*/}
            </motion.div>
            <div className='fixed top-0 w-[101%] h-full max-w-5xl flex justify-between'>
                {isClient && linesAndCrosses()}
            </div>
        </div>
    )
}

const lineVariant = {
    hidden: {
        scaleY: 0
    },
    visible: {
        scaleY: 1,
        transition: { ease: [0.83, 0, 0.17, 1], duration: 1.5 }
    }
}

function linesAndCrosses() {
    let columns = []
    for (let i = 0; i < 5; i++) {
        let mt = Math.random()
        columns.push(
            <motion.div className={`bg-accent bg-opacity-10 h-full w-[1px]`}
                style={{ transformOrigin: `${i % 2 === 0 ? 'top center' : 'bottom center'}` }}
                variants={lineVariant}
                initial='hidden'
                animate='visible'
                key={i}
            >
                <motion.div
                    initial={{ y: `calc(100vh * ${mt})`, x: -12, rotate: 45 }}
                    animate={{ opacity: [0, 0, 0.1], transition: { duration: 3 } }}
                    className={`w-6 h-[1px] bg-accent`}
                >
                </motion.div>
                <motion.div
                    initial={{ y: `calc(100vh * ${mt})`, x: -12, rotate: -45 }}
                    animate={{ opacity: [0, 0, 0.1], transition: { duration: 3 } }}
                    className={`w-6 h-[1px] bg-accent`}
                >
                </motion.div>
            </motion.div> //This is one group of line and cross
        )
    }
    return columns
}

// lighter: radial-gradient(50% 50% at 50% 50%, #262626 0%, #000000 100%)
//darker: radial-gradient(50% 50% at 50% 50%, #1A1A1A 0%, #000000 100%)