import { desc } from "framer-motion/client"
import { PROJECTS } from "../../../data"
import { getImageUrl } from "../../../lib/utils"
import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion, useMotionValueEvent} from "framer-motion"
import {useInView} from "react-intersection-observer"
import { PinContainer } from "../../../ui/PinContainer"

const ProjectCard = ({title, description, tools, image}) => {
  return(
    <motion.div

      className={`h-[504px] bg-gradient-to-t from-[#132A53] to-[#576CBC] w-[25%] rounded-lg px-6 pt-[18px]`}
    >
      <img className="rounded-lg" src={getImageUrl(image)} alt="" />
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-2xl font-light">{description}</p>
        <ul>
          {tools?.map((tool, idx) => {
            return (
              <li key={idx}>
                {tool}
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

const Project = () => {
  const {ref, inView} = useInView({
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition:{
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping:15,
        mass: 1
      }
    }
  }

  


  return (
    <section 
      id="projects"
      ref={ref}
      className='py-20 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] overflow-hidden text-white relative'
    >
      <motion.div
        className="absolute inset-0"
        initial={{opacity: 0}}
        animate={inView ? {opacity: 0.1} : {opacity: 0}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #6DBE45 1px, transparent 1px)`,
            backgroundSize: `50px 50px`,
            willChange: 'transform'
          }}
          animate={inView ? {
            backgroundPosition: ['0% 0%', '100% 100%']
          } : {}}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
        >
        
        </motion.div>
      </motion.div>
      <div className="relative max-w-7xl mx-auto sm:px-4 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial= "hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >Projects</motion.h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex gap-4 gap-y-[15rem] p-5 mb-10 flex-wrap xl:flex-nowrap justify-center">
            {PROJECTS.map((project, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                >
                  <PinContainer 
                    title={project.title}
                    href={project.link}
                  >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <motion.img
                        src={getImageUrl(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0  bg-gradient-to-t from-black/60 to-transparent"/>
                    </div>
                    <motion.div 
                    className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 w-full"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-white/70 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tools.map((tool, idx) => {
                        return (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/5 text-white/80 rounded-full border border-white/10 whitespace-nowrap"
                          >
                            {tool}
                          </span>
                        )
                      })}
                    </div>
                  </motion.div>
                    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                  </div>
                  </PinContainer>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project