import { motion, useAnimationControls, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Contact() {
    const animation = useAnimationControls()
    async function copy() {
        navigator.clipboard.writeText('etchiitch@gmail.com')
        await animation.start({ y: -40, opacity: [0, 1, 1, 1, 0], transition: { duration: 2, ease: 'easeOut' } })
        animation.start({ y: -40, opacity: 0 })
    }
    return (
        <footer className="w-screen h-fit shrink-0 flex justify-center items-end">
            <div className="w-full h-fit m-3 rounded-3xl flex flex-col items-center justify-end px-3 pb-2 relative overflow-hidden border border-px border-accent border-opacity-10" id='contact'
                style={{ backgroundImage: `radial-gradient(50% 100% at 50% 100%, #262626 0%, #141414 100%)` }}
            >
                <AnimatePresence>
                    <p className='text-highlight font-light mt-7'>Get in touch</p>
                </AnimatePresence>
                <div className="flex gap-1.5"> {/*Social Links*/}
                    <motion.div onClick={copy} className='relative flex justify-start sm:justify-center items-center'>
                        <motion.div initial={{ y: -40, opacity: 0 }} animate={animation} className='w-fit h-fit px-2 py-0.5 bg-[#222222] pointer-events-none rounded-md absolute border border-px border-accent border-opacity-10'>
                            <p className={`whitespace-nowrap text-sm font-light font-Spline_Sans_Mono text-accent text-center`}>
                                ✓ Email copied to clipboard
                            </p>
                        </motion.div>
                        <ContactButton name='Em' />
                    </motion.div>
                    <a href="https://www.linkedin.com/in/sakshi-bhardwaj/" target="_blank" rel="noreferrer">
                        <ContactButton name='Li' />
                    </a>
                    <a href="https://www.instagram.com/etch.itch/" target="_blank" rel="noreferrer">
                        <ContactButton name='Ig' />
                    </a>
                    <a href="https://twitter.com/etch_itch" target="_blank" rel="noreferrer">
                        <ContactButton name='Tw' />
                    </a>
                    <a href="https://discord.com/channels/1146057816864464936/1146057816864464938" target="_blank" rel="noreferrer">
                        <ContactButton name='Di' />
                    </a>
                </div>
                <div className="w-full max-w-lg h-px mt-7"
                    style={{ backgroundImage: `linear-gradient(270deg, rgba(159, 159, 173, 0) 0%, rgba(159, 159, 173, 0.25) 48.68%, rgba(159, 159, 173, 0) 100%)` }}
                /> {/*Divider*/}
                {/* 
                <p className='text-accent font-light text-xs md:text-sm text-center mt-7'>
                    <span className='text-opacity-50 text-accent'>:: colophon ::</span>
                    <br />
                    Designed and engineered by Sakshi.<br />Built with Music, love & Lot's of coffee.
                    <br /><br />
                    <span className='text-opacity-50 text-accent font-light'>© Aamir Shaikh. All rights reserved</span>
                </p>
                */}
                <div className="h-[66.4px] w-full flex justify-center mt-7"> {/*Dock Clamp*/}
                    <div className="w-full h-full flex items-center relative">
                        <div className="w-full h-px mr-px" style={{ backgroundImage: `linear-gradient(270deg, rgba(159, 159, 173, 0.25) 0%, rgba(159, 159, 173, 0) 100%)` }}></div>
                        <div className="w-px h-7 bg-accent opacity-25 absolute right-0"></div>
                    </div>
                    <div className="w-80 h-full shrink-0"></div>
                    <div className="w-full h-full flex items-center relative">
                        <div className="w-full h-px ml-px" style={{ backgroundImage: `linear-gradient(270deg, rgba(159, 159, 173, 0) 0%, rgba(159, 159, 173, 0.25) 100%)` }}></div>
                        <div className="w-px h-7 bg-accent opacity-25 absolute left-0"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function ContactButton(props) {
    return (
        <button className="min-w-fit h-fit hover:bg-[#222222] transition-colors duration-150 rounded-md p-2 flex justify-center items-center gap-2 group relative" aria-label={props.name}>
            {/* <img src={`/svg/contact/${props.name}.svg`} className={`w-9 h-9`} draggable="false" alt={props.name} /> */}
            <Image
                src={`/svg/contact/${props.name}.svg`}
                alt={props.name}
                width={36}
                height={36}
            />
        </button>
    )
}