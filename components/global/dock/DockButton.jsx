import Link from 'next/link'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'

export default function DockButton(props) {
    const pages = ['Home', 'About', 'Work', 'Play', 'Sound']
    const pageLinkNames = ['', 'about', 'work', 'play', 'sound']

    const animation = useAnimationControls()
    async function tooltipOnTap() {
        animation.start({ y: -50, opacity: [0, 1, 1, 1, 0], transition: { duration: 2, ease: 'easeOut' } })
    }
    async function tooltipOnHoverStart() {
        animation.start({ y: -50, opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } })
    }
    async function tooltipOnHoverEnd() {
        animation.start({ y: -40, opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } })
    }

    return (
        <LinkWrapper isLinked={!(props.id === '4')} name={pageLinkNames[props.id]}>
            <motion.button onHoverStart={tooltipOnHoverStart} onHoverEnd={tooltipOnHoverEnd} onTap={tooltipOnTap} className={`group flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border-y-[1px] border-[#404040b1] bg-[#191919] hover:bg-[#222222] transition-colors duration-150`}
                onClick={() => props.handlePageChange(props.id)}
            >
                <motion.div initial={{ y: `${isMobile() ? '-50' : '-40'}`, opacity: 0 }} animate={animation} className='w-fit h-fit px-2 py-0.5 bg-[#222222] rounded-md pointer-events-none absolute border border-px border-accent border-opacity-10'>
                    <p className={`text-xs font-light font-Spline_Sans_Mono ${props.isActive ? 'text-highlight' : 'text-accent'}`}>
                        {pages[props.id]}
                    </p>
                </motion.div>
                {renderIcon(props.id, props.isActive, props.isSoundOn)}
                {props.isActive && (
                    <motion.div className="absolute bottom-[3px] h-1 w-1 rounded-full bg-[#404040b1]"
                        layoutId='indicator'
                    ></motion.div>
                )}
            </motion.button>
        </LinkWrapper >
    )
}

function LinkWrapper({ isLinked, name, children }) {
    return (
        <>
            {isLinked ? (
                <Link href={`/${name}`}>
                    {children}
                </Link>
            ) : (
                children
            )
            }
        </>
    )
}

function renderIcon(param, isActive, isSoundOn) {
    const type = isActive ? 'active' : 'inactive'
    switch (param) {
        case '0':
            return <Image priority src={`/icons/dock/${type}/home.svg`} width={24} height={24} alt='home-icon' />
        case '1':
            return <Image priority src={`/icons/dock/${type}/about.svg`} width={24} height={24} alt='about-icon' />
        case '2':
            return <Image priority src={`/icons/dock/${type}/work.svg`} width={24} height={24} alt='work-icon' />
        case '3':
            return <Image priority src={`/icons/dock/${type}/gamepad.svg`} width={24} height={24} alt='play-icon' />
        case '4':
            return <Image priority src={`/icons/dock/inactive/${isSoundOn ? 'sound' : 'sound-off'}.svg`} width={24} height={24} alt='sound-icon' />
        default:
            return
    }
}

function isMobile() {
    let val;
    if (typeof window !== "undefined") {
        val = window.matchMedia("(pointer:coarse)").matches
    }
    return val
}

{/* <motion.button
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.1 * props.id, ease: 'easeInOut' }}
    className={`w-11 shrink-0 h-11 bg-[#222222] rounded-[10px] flex justify-center items-center group border-y-[0.05rem] border-[#404040b1]`}
    onClick={() => { props.handlePageChange(props.id) }}
></motion.button> */}
