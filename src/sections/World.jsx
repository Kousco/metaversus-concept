'use client';

import { motion } from 'framer-motion';

import { styles } from '../constants/index';
import {  TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { mapIMG, people1IMG, people2IMG, people3IMG } from '../assets';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| People on the World"
        textStyles="text-center"
      />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px] '
      >
        <img
          src={mapIMG}
          alt='map'
          className='lg:w-full lg:h-full md:h-[70%] h-[50%] lg:object-cover'
        />
        <div className='absolute lg:bottom-20 lg:right-[30%] top-10 right-[15%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
          <img
            src={people1IMG}
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-[10%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
          <img
            src={people2IMG}
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute lg:top-1/2 lg:left-[45%] top-[20%] left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
          <img
            src={people3IMG}
            alt='people'
            className='w-full h-full'
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
