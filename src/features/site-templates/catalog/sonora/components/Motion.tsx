'use client'
import {motion,useReducedMotion} from 'framer-motion'
import type {ReactNode} from 'react'
export function Reveal({children,delay=0,className=''}:{children:ReactNode;delay?:number;className?:string}){
 const reduced=useReducedMotion()
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:[.2,.65,.3,1]}}>{children}</motion.div>
}
export function HeroEntrance({children}:{children:ReactNode}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:'easeOut'}}>{children}</motion.div>}
