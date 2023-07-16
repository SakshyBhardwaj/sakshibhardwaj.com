import { motion, useAnimationControls } from "framer-motion"
import { appContext } from "../../pages/_app"
import { useState, useContext, useEffect } from "react"
import Image from "next/image"

const paraStyle = `text-accent text-base md:text-lg font-light`
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

const randomFactsComponents = [
    <div className={`${paraStyle}`} key='0'>My favorite anime is One Piece</div>,
    <div className={`${paraStyle}`} key='1'>My favorite movie is Interstellar</div>,
    <div className={`${paraStyle}`} key='2'>My favorite movie director is Christopher Nolan</div>,
    <div className={`${paraStyle}`} key='3'>My favorite videogame is Minecraft</div>,
    <div className={`${paraStyle}`} key='4'>My favorite racing game is Forza Horizon 4</div>,
    <div className={`${paraStyle}`} key='5'>My favorite drink is pineapple + grape juice</div>,
    <div className={`${paraStyle}`} key='6'>My favorite ice cream flavor is Chocolate Chips</div>,
    <div className={`${paraStyle}`} key='7'>My favorite music composer is Hans Zimmer</div>,
    <div className={`${paraStyle}`} key='8'>My favorite film score is &apos;Time&apos; by Hans Zimmer</div>,
    <div className={`${paraStyle}`} key='9'>My favorite non-fiction book is &apos;<a className="underline decoration-[0.5px] underline-offset-4" href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach" target="_blank" rel="noreferrer">Godel, Escher, Bach: an Eternal Golden Braid</a>&apos; by Douglas Hofstadter</div>,
    <div className={`${paraStyle}`} key='13'>My favorite fiction book is &apos;<a className="underline decoration-[0.5px] underline-offset-4" href="https://en.wikipedia.org/wiki/Crime_and_Punishment" target="_blank" rel="noreferrer">Crime and Punishment</a>&apos; by Fyodor Dostoevsky</div>,
    <div className={`${paraStyle}`} key='14'>My favorite Youtube video is <a className="underline decoration-1 underline-offset-2" href="https://youtu.be/IJhgZBn-LHg" target="_blank" rel="noreferrer">this</a></div>,
    <div className={`${paraStyle}`} key='15'>My favorite Youtube channel is <a className="underline decoration-1 underline-offset-2" href="https://www.youtube.com/c/vsauce1" target="_blank" rel="noreferrer">VSauce</a></div>,
    <div className={`${paraStyle}`} key='16'>My favorite social media platform is Reddit</div>,
    <div className={`${paraStyle}`} key='17'>My current favorite website is <a className="underline decoration-1 underline-offset-2" href="http://www.narrowdesign.com/" target="_blank" rel="noreferrer">narrowdesign.com</a></div>,
    <div className={`${paraStyle}`} key='18'>At night, I enjoy eating chips while watching YouTube.</div>,
    <div className={`${paraStyle}`} key='19'>I can&apos;t blow bubblegum bubbles</div>,
    <div className={`${paraStyle}`} key='20'>If I could download a how-to book directly into my brain, it would be for shaders</div>,
    <div className={`${paraStyle}`} key='21'>I don&apos;t like wearing shoes</div>,
    <div className={`${paraStyle}`} key='22'>I was the fastest runner in my class during my school years</div>,
    <div className={`${paraStyle}`} key='23'>Dragon Ball Z was the first anime I ever watched</div>,
    <div className={`${paraStyle}`} key='24'>I love mind-bending movies</div>,
    <div className={`${paraStyle}`} key='25'>I love Maths</div>,
    <div className={`${paraStyle}`} key='26'>I prefer summer to winter</div>,
    <div className={`${paraStyle}`} key='27'>I can trace my ancestral roots back to India, Balochistan, and Saudi Arabia</div>,
    <div className={`${paraStyle}`} key='28'>If I were to teach any subject, it would be Maths</div>,
    <div className={`${paraStyle}`} key='29'>The meal I look forward to most is Biryani</div>,
    <div className={`${paraStyle}`} key='30'>I binged all 3 Star Wars trilogies in 2 days. To my surprise, I didn&apos;t remeber much about the movies afterwards! (This taught me the importance of sleep in memorizing things)</div>,
    <div className={`${paraStyle}`} key='31'>I can type up to 91 words per minute</div>,
    <div className={`${paraStyle}`} key='32'>I&apos;ve never traveled outside of my home country</div>,
    <div className={`${paraStyle}`} key='33'>I&apos;ve never been on a ship</div>,
    <div className={`${paraStyle}`} key='34'>I have a HUGE bookmark collection on my browser. I save anything remotely useful</div>,
    <div className={`${paraStyle}`} key='35'>I prefer instrumental music to songs</div>,
    <div className={`${paraStyle}`} key='36'>I used to make realistic pencil portraits in my high school years. I was really obsessed with it</div>,
    <div className={`${paraStyle}`} key='37'>I can&apos;t raise one eyebrow at a time</div>,
    <div className={`${paraStyle}`} key='38'>I was obsessed with pens when I was 10. I had a collection of 30 pens which I used to carry to school daily</div>,
    <div className={`${paraStyle}`} key='39'>Chai &gt; Coffee</div>,
    <div className={`${paraStyle}`} key='40'>I like nature and space documentaries</div>,
    <div className={`${paraStyle}`} key='41'>I love computers. I think they are the greatest human invention of all time</div>,
    <div className={`${paraStyle}`} key='42'>I&apos;m a Japanophile</div>,
    <div className={`${paraStyle}`} key='43'>I rarely wake up to an alarm clock. I have to be woken up by a human being</div>,
    <div className={`${paraStyle}`} key='44'>I&apos;ve never tried sushi, and I think I wouldn&apos;t like it</div>,
    <div className={`${paraStyle}`} key='45'>My notebooks are usually full of doodles</div>,
    <div className={`${paraStyle}`} key='46'>I haven&apos;t read half of my book collection</div>,
    <div className={`${paraStyle}`} key='47'>I love the concept of <a className="underline decoration-1 underline-offset-2" href="https://sakshibhardwaj.com/about" rel="noreferrer">recursion</a></div>,
    <div className={`${paraStyle}`} key='48'>I have never watched the Godfather (any part)</div>,
    <div className={`${paraStyle}`} key='49'>I have Greek feet</div>,
    <div className={`${paraStyle}`} key='50'>As a child, I was extremely fascinated by touch screens</div>,
    <div className={`${paraStyle}`} key='51'>As a child, I wanted to be a stationer</div>,
    <div className={`${paraStyle}`} key='52'>When going out, I always put money in my left pocket and phone in the right</div>,
]

const randomSentenceAnimation = {
    hidden: {
        y: 20, opacity: 0, rotateZ: 0
    },
    visible: i => ({
        y: 0, opacity: 1, rotateZ: 0,
        transition: {
            delay: i * 0.01,
            duration: 0.5, ease: [0.22, 1, 0.36, 1]
        },
    }),
    exit: i => ({
        y: -20, opacity: 1, rotateZ: 0,
        transition: {
            delay: i * 0.01,
            duration: 1, ease: [0.22, 1, 0.36, 1]
        },
    }),
}

export default function RandomFacts() {
    let [fact, setFact] = useState({})
    const [isClient, setIsClient] = useState(false)
    const { dWidth, sound } = useContext(appContext)

    let clickSound
    if (typeof window !== 'undefined') {
        clickSound = new Audio('/sfx/shuffle3.mp3')
        clickSound.volume = 0.25
    }

    useEffect(() => {
        setIsClient(true)
        changeFact()
    }, [])

    function changeFact(manual) {
        if (manual) {
            if (Boolean(window.navigator.vibrate)) {
                navigator.vibrate(50)
            }
            sound.value && clickSound.play()
        }
        const num = Math.floor(Math.random() * randomFactsComponents.length)
        setFact({
            number: num + 1,
            faxx: randomFactsComponents[num]
        })
    }

    const animation = useAnimationControls()
    async function tooltipOnTap() {
        animation.start({ y: -40, opacity: [0, 1, 1, 1, 0], transition: { duration: 2, ease: 'easeOut' } })
    }
    async function tooltipOnHoverStart() {
        animation.start({ y: -40, opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } })
    }
    async function tooltipOnHoverEnd() {
        animation.start({ y: -30, opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } })
    }

    return (
        <motion.div variants={scrollTriggerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -200px 0px' }} className="pb-32">
            <motion.h1 variants={scrollTriggerAnimation} className="text-accent text-4xl md:text-5xl mt-4 font-medium">some <span className='italic'>r</span><span className='font-thin'>a</span><span className='font-thin'>N</span><span className='font-black'>d</span><span className='italic font-thin'>O</span><span className=''>m</span> facts about me</motion.h1>
            <motion.div variants={scrollTriggerAnimation} className="w-full max-h-fit flex items-start justify-between py-5 border-y-[0.05rem] border-accent border-opacity-10 mt-4 font-thin">
                <div className={`${paraStyle}`}>
                    <motion.span key={-fact.number - 1}
                        variants={randomSentenceAnimation}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className="text-highlight"
                    >
                        #{`${fact.number}`}
                    </motion.span>
                    /{`${randomFactsComponents.length}`}
                    <br /><br />
                    {isClient &&
                        <motion.div key={fact.number}
                            variants={randomSentenceAnimation}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        >
                            {fact.faxx}
                        </motion.div>}
                </div>
                <motion.button onHoverStart={tooltipOnHoverStart} onHoverEnd={tooltipOnHoverEnd} onTap={tooltipOnTap} onClick={() => { changeFact(true) }}
                    className="ml-5 min-w-fit h-fit bg-[#191919] hover:bg-[#222222] transition-colors duration-150 border-y-[0.05rem] border-[#404040b1] rounded-md p-2 flex justify-center items-center gap-2 relative"
                >
                    {/* <img src={`/icons/shuffle.svg`} className={`w-6 h-6`} draggable="false" alt="shuffle-icon" /> */}
                    <Image
                        src={`/icons/shuffle.svg`}
                        alt="shuffle-icon"
                        width={24}
                        height={24}
                    />
                    <motion.div initial={{ y: `${isMobile() ? '-40' : '-30'}`, opacity: 0 }} animate={animation} className='text-accent w-fit h-fit px-2 py-0.5 bg-[#222222] rounded-md pointer-events-none absolute border border-px border-accent border-opacity-10'>
                        <p className={`text-xs font-light font-Spline_Sans_Mono}`}>
                            Shuffle
                        </p>
                    </motion.div>
                </motion.button>

            </motion.div>
        </motion.div>
    )
}

function isMobile() {
    let val;
    if (typeof window !== "undefined") {
        val = window.matchMedia("(pointer:coarse)").matches
    }
    return val
}