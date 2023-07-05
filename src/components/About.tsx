"use client"
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import { services } from '@/utils/constants'
import SectionWrapper from '@/hoc/SectionWrapper'
import { fadeIn, textVariant } from '@/utils/motion'

const ServiceCard: React.FC<{index: number, title: string, icon: string, dark: boolean}> = ({ index, title, icon, dark }) => {
  return(
    <Tilt className=' sm:w-40 w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`w-full green-blue-gradient p-px rounded-[20px] ${dark ? 'shadow-card1' : 'shadow-card0'}`}
    >
      <div
        className={`${dark ? 'bg-black-100' : 'bg-white-100'} rounded-[20px] py-1 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
      >
        <Image
          src={icon}
          width={10}
          height={10}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className={`${dark ? 'text-white-100' : 'text-black-100'} text-[20px] font-bold text-center`}>
          {title}
        </h3>
      </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  return (
    <div className={`sm:px-16 px-6 mt-8 ${darkMode ? 'text-white-100' : 'text-black-100'}`}>
        <motion.div variants={textVariant(0.5)}>
            <p className="font-medium lg:text-2xl sm:text-xl xs:text-lg text-base mt-2">Introduction</p>
            <h2 className="font-black lg:text-5xl sm:text-3xl xs:text-2xl text-xl mt-2">Overview.</h2>
        </motion.div>
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-[17px] max-w-3xl leading-[30px]'
        >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div className='sm:mt-16 mt-8 flex flex-wrap justify-center gap-10'>
            {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} dark={darkMode} />
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(About, "about")