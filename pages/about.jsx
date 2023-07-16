import { motion } from "framer-motion"
import Layout from '../components/global/Layout'
import Head from 'next/head'

import Contact from "../components/global/contact/Contact"
import Intro from "../components/about/Intro"
import Work from "../components/about/Work"
import Awards from "../components/about/Awards"
import Skills from "../components/about/Skills"
import Code from "../components/about/Code"
import RandomFacts from "../components/about/RandomFacts"

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Sakshi Bhardwaj | About</title>
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
                <main className={`px-3 max-w-5xl w-full mt-16 flex flex-col gap-36`}> {/*content container*/}
                    <motion.h2 className="-mb-32 text-accent"
                        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 0.5, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
                    >&#47;&#47; About</motion.h2>
                    <Intro />
                    <Work />
                    <Awards />
                    <Skills />
                    <Code />
                    <RandomFacts />
                </main>
                <Contact />
            </div>
        </Layout>

    )
}