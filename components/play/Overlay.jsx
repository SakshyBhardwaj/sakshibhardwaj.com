import { motion } from "framer-motion"
import Image from "next/image"
import { playData } from "../../data/playData"
const overlayVariant = {
    hidden: {
        opacity: 0,
        scale: 1.075
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
        opacity: 0,
        scale: 1.075,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
}

export default function Overlay(props) {
    return (
        <motion.div className="min-w-full h-full min-h-fit fixed top-0 left-0 bg-black backdrop-blur-md bg-opacity-80 flex items-top justify-center overflow-auto scrollbar-hide items-center"
            variants={overlayVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={props.handleOverlayState}
        > {/*black bg*/}
            <div className="max-w-5xl w-full h-fit min-h-0 border-accent border-opacity-25 border-[1px] p-4 mx-3 my-8 flex flex-col md:flex-row" onClick={(e) => e.stopPropagation()}> {/*play card*/}
                <div className="w-full md:max-w-[50%] h-full" alt="">
                    <Image src={`/${playData[props.id].imgUrl}`} width={300} height={300} layout="responsive" alt={`${playData[props.id].name}`} draggable="false" />
                </div> {/*image*/}
                <div className="flex flex-col min-h-full justify-between md:ml-4 w-full">
                    <div className="w-full h-fit flex flex-col justify-center gap-4 mt-4 md:mt-0" > {/*title*/}
                        <div className="w-full h-fit flex justify-between">
                            <h2 className="text-accent text-4xl md:text-5xl font-medium">{playData[props.id].name}</h2>
                            <button className="" onClick={props.handleOverlayState}>
                                <Image src={`/icons/cancel.svg`} width={24} height={24} alt="cancel" />
                            </button>
                        </div>
                        <div className="w-fit flex">
                            {playData[props.id].tags.map((e, i) => {
                                return (
                                    <div className={`border-[1px] border-accent border-opacity-25 h-full w-fit ${i === 0 ? '' : 'border-l-0'}`} key={i}> {/*play type*/}
                                        <p className="text-accent text-base font-light px-2">{e}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full h-fit mt-4"> {/*description*/}
                        <p className="text-accent text-base font-light">{playData[props.id].desc}</p>
                        {
                            playData[props.id].url &&
                            <a href={playData[props.id].url} target="_blank" rel="noreferrer">
                                <button className={`mt-4 w-full h-11 shrink-0 bg-[#191919] hover:bg-[#222222] transition-colors duration-150 rounded-[10px] flex justify-center items-center group border-y-[0.05rem] border-[#404040b1] text-accent`}>
                                    <p>View</p>
                                    <Image src={`/icons/arrow-up-right.svg`} width={24} height={24} className={`ml-2`} alt="arrow-up-right" />
                                </button>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}