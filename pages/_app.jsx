import '../styles/globals.css'
import Dock from '../components/global/dock/Dock'
import Background from '../components/global/bg/Background'
import { useState, useEffect, createContext } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'

export const appContext = createContext()

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [currentWidth, setCurrentWidth] = useState(0)
  const [soundState, setSoundState] = useState(true)

  useEffect(() => {
    function handleWindowResize() {
      setCurrentWidth(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])

  return <>
    <appContext.Provider value={{ currentWidth, sound: { value: soundState, setSoundState: setSoundState } }}>
      <Background />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
        <Analytics />
      </AnimatePresence>
      <motion.nav className='fixed flex justify-center items-end w-full h-16 bottom-5 z-20'
        initial={{ y: 100 }} animate={{ y: 0, transition: { duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] } }}
      >
        <Dock />
      </motion.nav>
    </appContext.Provider>
  </>
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function isMobile() {
  let val;
  if (typeof window !== "undefined") {
    val = window.matchMedia("(pointer:coarse)").matches
  }
  return val
}

export default MyApp

// contact ui which works on hover! apply this to the seniormost container in _app.jsx
// 'overflow-hidden transition-all duration-300 ease-in-out hover:rounded-3xl hover:scale-95 hover:-translate-y-16 hover:border-2'