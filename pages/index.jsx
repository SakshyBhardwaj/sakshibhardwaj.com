import Clock from 'react-live-clock'
import { motion } from "framer-motion"
import Contact from "../components/global/contact/Contact"
import Layout from '../components/global/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sakshi Bhardwaj</title>
        <meta name="title" content="Sakshi Bhardwaj" />
        <meta name="description" content="Product Designer. UX Researcher. Creative Illustrator." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sakshibhardwaj.com/" />
        <meta property="og:title" content="Sakshi Bhardwaj" />
        <meta property="og:description" content="Product Designer. UX Researcher. Creative Illustrator." />
        <meta property="og:image" content="https://sakshibhardwaj.com/images/og-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sakshibhardwaj.com/" />
        <meta property="twitter:title" content="Sakshi Bhardwaj" />
        <meta property="twitter:description" content="Designer. Developer. Creative Coder." />
        <meta property="twitter:image" content="https://sakshibhardwaj.com/images/og-image.jpg" />
      </Head>
      <div style={{ scrollbarGutter: `stable both-edges` }} className='fixed left-0 top-0 z-10 w-screen h-full overflow-auto flex flex-col items-center scrollbar-hide'> {/*fullpage container*/}
        <main className="md:px-3 max-w-5xl w-full min-h-[768px] h-screen shrink-0 flex flex-col items-center justify-center overflow-x-hidden md:overflow-x-visible relative"> {/*content container*/}
          <TimeAndDate />
          <RingAndLines />
          <Name />
          <TitleCarousel />
          <BriefDesc />
        </main>
        <Contact />
      </div>
    </Layout>
  )
}

const initDelay = 0.5
const customEase = [0.22, 1, 0.36, 1]

const sakshiVariant = {
  hidden: {
    y: 160, opacity: 0, rotateZ: 60
  },
  visible: i => ({
    y: 0, opacity: 1, rotateZ: 0,
    transition: {
      delay: initDelay + (6 / 5) * i * 0.1,
      duration: 1, ease: customEase
    },
  })
}
const bhardwajVariant = {
  hidden: {
    y: 160, opacity: 0, rotateZ: -60
  },
  visible: i => ({
    y: 0, opacity: 1, rotateZ: 0,
    transition: {
      delay: initDelay + 0.6 - i * 0.1,
      duration: 1, ease: customEase
    },
  })
}
const timeAndDateVariant = {
  hidden: {
    y: 60, opacity: 0
  },
  visible: {
    y: 0, opacity: 1,
    transition: {
      duration: 1, delay: initDelay + 0.25, ease: customEase
    }
  }
}
const ringAndLinesVariant = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1, delay: initDelay + 0.5, ease: customEase
    }
  }
}
const titleCarouselVariant = {
  hidden: {
    width: 0, opacity: 0
  },
  visible: {
    width: 340,
    opacity: 1,
    transition: {
      duration: 2, delay: initDelay + 0.75, ease: customEase
    }
  }
}
const briefDescVariant = {
  hidden: {
    y: 60, opacity: 0
  },
  visible: {
    y: 0, opacity: 1,
    transition: {
      duration: 1, delay: initDelay + 0.75, ease: customEase
    }
  }
}
const fancySymbol = '✧' //✳

function TimeAndDate() {
  return (
    <motion.div className="absolute top-5"
      variants={timeAndDateVariant} initial='hidden' animate='visible'
    >
      <h1 className='text-accent font-light text-xs md:text-sm opacity-50 inline'>India {fancySymbol} </h1>
      <Clock className='text-accent font-light text-xs md:text-sm opacity-50 inline' format={'HH:mm'} noSsr={true} ticking={true} blinking={true} timezone={'Asia/Kolkata'} />
    </motion.div>
  )
}
function RingAndLines() {
  return (
    <>
      {/*Ring*/}
      <motion.div className="w-[480px] h-[480px] md:w-[560px] md:h-[560px] mb-16 absolute rounded-full border-[1px] border-accent border-opacity-10"
        variants={ringAndLinesVariant} initial='hidden' animate='visible'
      ></motion.div>
      {/*LINES*/}
      <div className="flex flex-col gap-72 md:gap-96 justify-between absolute">
        <motion.div className="w-[370px] md:w-[460px] h-[1px] mb-16 bg-accent opacity-10"
          variants={ringAndLinesVariant} initial='hidden' animate='visible'
        ></motion.div>
        <motion.div className="w-[370px] md:w-[460px] h-[1px] mb-16 bg-accent opacity-10"
          variants={ringAndLinesVariant} initial='hidden' animate='visible'
        ></motion.div>
      </div>
    </>
  )
}
function Name() {
  const sakshiLetters = [`cap-s`, `a`, `k`, `s`, `h`, `i`]
  const bhardwajLetters = [`cap-b`, `h`, `a`, `r`, `d`, `w`, `a`, `j`]

  return (
    <div className="scale-[0.65] md:scale-[0.85] origin-bottom flex flex-col justify-center items-center"> {/*Name*/}
      <div className="min-w-max flex gap-1 items-end"> {/*Sakshi*/}
        {sakshiLetters?.map((e, i) => {
          return (
            <div className="overflow-hidden" key={i}>
              <motion.img custom={i} variants={sakshiVariant} initial='hidden' animate='visible' src={`svg/name/${e}.svg`} alt='Letter' draggable="false" />
            </div>
          )
        })}
      </div>
      <div className="min-w-max flex gap-1 items-end mt-6"> {/*Bhardwaj*/}
        {bhardwajLetters.map((e, i) => {
          return (
            <div className="overflow-hidden" key={i}>
              <motion.img custom={i} variants={bhardwajVariant} initial='hidden' animate='visible' src={`svg/name/${e}.svg`} alt='Letter' draggable="false" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
function TitleCarousel() {
  const titlesContent = <p><span className="text-highlight"> {fancySymbol} </span>Product Designer<span className="text-highlight"> {fancySymbol} </span>UX Research<span className="text-highlight"> {fancySymbol} </span>Branding Designer</p>
  return (
    <div className="w-15">
      <motion.div
        variants={titleCarouselVariant} initial='hidden' animate='visible'
        className="whitespace-pre mt-4 text-accent text-base overflow-hidden flex items-center h-10 backdrop-blur-[10px] bg-[#0000000a] rounded-full border-[0.025rem] border-accent border-opacity-25"
      >
        <motion.div className='flex'
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 15, delay: 2.19, ease: "linear", repeat: Infinity }}
        >
          {titlesContent}
          {titlesContent}
        </motion.div>
      </motion.div>
    </div>
  )
}
function BriefDesc() {
  return (
    <motion.p className="text-accent text-base md:text-lg font-light mt-6 pb-32 text-center max-w-[45ch]"
      variants={briefDescVariant} initial='hidden' animate='visible'
    >
      <span className='italic'>Crafting digital interfaces</span><br />
      Open to freelance 〢 full-time roles
    </motion.p>
  )
}