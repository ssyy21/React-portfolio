import { RiReactjsLine } from "react-icons/ri"
import { DiHtml5 } from "react-icons/di";    
import { DiJava } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3 } from "react-icons/di"; 
import {  motion } from "framer-motion";

const iconVariants = (duration)=> ({
    initial : {y:-10},
    animate: {
       y:[10,-10],
        transition :{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
         whileInView={{opacity :1,y:0 }}
         initial ={{opacity :0, y: -100}}
         transition={{duration:1.5}}
        
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
            whileInView={{opacity :1,x:0 }}
            initial ={{opacity :0, x: -100}}
            transition={{duration:1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava
                
                className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript1 className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className="text-7xl text-green-500"/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies
