import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import DockButton from './DockButton'
import { appContext } from "../../../pages/_app"
let clickSound, offSound

export default function Dock() {
    const router = useRouter()
    const isDeviceMobile = isMobile()
    const [dockButtonsData, setDockButtonsData] = useState([
        {
            name: 'home',
            isActive: router.pathname === '/' ? true : false
        },
        {
            name: 'about',
            isActive: router.pathname === '/about' ? true : false
        },
        {
            name: 'work',
            isActive: router.pathname === '/work' ? true : false
        },
        {
            name: 'play',
            isActive: router.pathname === '/play' ? true : false
        },
        {
            name: 'sound',
            isActive: false
        }
    ])
    const { dWidth, sound } = useContext(appContext)
    if (typeof window !== 'undefined') {
        clickSound = new Audio('/sfx/click8.mp3')
        clickSound.volume = 0.25
        offSound = new Audio('/sfx/off2.mp3')
        offSound.volume = 0.25
    }
    const handlePageChange = (changeTo) => {
        if (changeTo == '4') {
            sound.value ? offSound.play() : clickSound.play()
            sound.setSoundState(!sound.value)
        } else {
            if (Boolean(window.navigator.vibrate)) {
                navigator.vibrate(50)
            }
            sound.value && clickSound.play()
            setDockButtonsData(prev => prev.map((page, index) => index == changeTo ? { ...page, isActive: true } : { ...page, isActive: false }))
        }
    }

    return (
        <div className={`mx-3 flex h-fit w-fit min-w-0 items-end gap-[10px] rounded-[20px] border-y-[0.075rem] border-[#404040b1] bg-[#00000051] p-[10px] backdrop-blur-[15px] transition-all duration-200 ease-[cubic-bezier(0.22, 1, 0.36, 1)]  ${isDeviceMobile ? 'overflow-x-auto' : 'overflow-visible'}`} >
            {dockButtonsData.map((e, i) => {
                return (
                    <div className='flex gap-[10px]' key={i}>
                        <DockButton id={`${i}`}
                            isActive={dockButtonsData[i].isActive}
                            handlePageChange={handlePageChange}
                            isSoundOn={sound.value}
                        />
                        {i === 3 && <div className="h-11 w-1 shrink-0  border-x-[0.05rem] border-[#4040407f]"></div>}
                    </div>
                )
            })}
        </div >
    );
}

function isMobile() {
    let val;
    if (typeof window !== "undefined") {
        val = window.matchMedia("(pointer:coarse)").matches
    }
    return val
}


