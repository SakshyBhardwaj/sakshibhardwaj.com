import { motion } from "framer-motion"
import { forwardRef } from "react"
import Image from "next/image"

import playImg1 from "../../public/images/play/otaku-quiz.png"
import playImg2 from "../../public/images/play/fabric.png"
import playImg3 from "../../public/images/play/threads.png"
import playImg4 from "../../public/images/play/kunai.png"
import playImg5 from "../../public/images/play/flob.png"
import playImg6 from "../../public/images/play/loose-threads.png"
import playImg7 from "../../public/images/play/alien-threads.png"
import playImg8 from "../../public/images/play/dark-flower.png"
import playImg9 from "../../public/images/play/invertorii.png"
import playImg10 from "../../public/images/play/bezier-flowers.png"
import playImg11 from "../../public/images/play/circle-wrap.png"
import playImg12 from "../../public/images/play/perlin-tower.png"
import playImg13 from "../../public/images/play/metal-threads.png"
import playImg14 from "../../public/images/play/cubes.png"
import playImg15 from "../../public/images/play/sezzle.png"
import playImg16 from "../../public/images/play/kunai-0.png"
import playImg17 from "../../public/images/play/void.png"
import playImg18 from "../../public/images/play/cutout.png"
import playImg19 from "../../public/images/play/four-towers.png"
import playImg20 from "../../public/images/play/torus-knot.png"
import playImg21 from "../../public/images/play/blaze-flower.png"
import playImg22 from "../../public/images/play/donut.png"
import playImg23 from "../../public/images/play/tower-of-cool.png"
import playImg24 from "../../public/images/play/metatorii.png"

const playImgArray = [playImg1, playImg2, playImg3, playImg4, playImg5, playImg6, playImg7, playImg8, playImg9, playImg10, playImg11, playImg12, playImg13, playImg14, playImg15, playImg16, playImg17, playImg18, playImg19, playImg20, playImg21, playImg22, playImg23, playImg24]

const imgVariant = {
    hidden: {
        scale: 1.05
    },
    hover: {
        scale: 1.0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

function InitTile(props, ref) {
    return (
        <div className={`pt-[100%] relative overflow-hidden button ${props.big ? 'col-span-2' : ''} ${props.additionalStyles}`}
            ref={ref}
            onClick={() => props.handleOverlayState(props.id)}
        >
            <motion.div variants={imgVariant} initial='hidden' whileHover='hover' className="absolute top-0 w-full h-full">
                <Image src={playImgArray[props.id]} placeholder="blur" width={300} height={300} layout="responsive" priority={imgPriority(props.id)} alt={props.alt} draggable="false" />
            </motion.div>
        </div>
    )
}

const Tile = forwardRef(InitTile)

function imgPriority(id) {
    switch (id) {
        case 0:
            return true
        case 1:
            return true
        case 2:
            return true
        case 12:
            return true
        case 13:
            return true
        case 14:
            return true
        default:
            return false
    }
}

const MotionTile = motion(Tile, { forwardMotionProps: true })
export default MotionTile