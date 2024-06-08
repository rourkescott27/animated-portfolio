import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className=' relative w-full 
    h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-40'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className='mt-36'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>
            Rourke</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An aspiring Full Stack Developer, <br className='sm:block hidden' />
            with a passion to create beautiful web applications . . .
          </p>
        </div>
      </div>
      
      <ComputersCanvas />
    </section>
  );
}

export default Hero;