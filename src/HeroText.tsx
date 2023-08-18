import { motion } from "framer-motion";
import { animationStart , reveal } from "./utils/animation";

export default function HeroText(){

    return(
    
        <motion.div
        layout
        initial={{height:0}}
        animate={{height:"unset"}}
        transition={{delay:animationStart,duration:1}}
        
        className="flex flex-col items-center text-center">
        <motion.div 
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px">
            <span> delivering industry's </span>
            <span> top tallents work</span>
        </motion.div>
         <motion.span 
         variants={reveal}
         initial="hiddenVariant"
         animate="revealedVariant"
         transition={{ delay: animationStart + 1.2, duration: 0.5 }}
         className="mb-30px w-1/4 <lg:w-1/3 <md:w-12 text-14px leading-tight">
            vr headset wearable network effect . hypergrowth activist investor .
            subtrack blogging thiel fellow dropout Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Ipsam, neque?

         </motion.span>
        </motion.div>
    );
    
    
    
    }