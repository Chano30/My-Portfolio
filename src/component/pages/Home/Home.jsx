import { FloatingNav } from '../../../ui/FloatingNav'
import { NAV_DATA, USER_INFO } from '../../../data'
import { BackgroundGradientAnimation } from '../../../ui/BackgroundGradientAnimation'
import { TextGenerateEffect } from '../../../ui/TextGenerateEffect'
import MagicButton from '../../../ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { BouncingArrow } from '../../../ui/BouncingArrow'

const Home = () => {

  const scrollLink = (id) => {
    const sectionId = document.getElementById(id)
    if(sectionId){
      sectionId.scrollIntoView({behavior: "smooth"})
    }
  }
  
  return (
    <section
      id='home'
      className='bg-blue '
    >
      <BackgroundGradientAnimation
    >
      <div className='absolute text-white z-10 top-[50%] translate-y-[-50%] mx-[10%] max-h-[100vh]'>
        
        <div className='flex flex-col gap-10 lg:flex-row justify-between items-center relative !z-50'>
          <img className='lg:order-[1] order-[-1] w-[292px] md:w-50 xl:w-full bg-no-repeat' src="/public/assets/hero/chano-cartoon.png" alt="" />
          <div className='flex flex-col justify-center lg:items-start items-center gap-4'>
            <p className='text-3xl font-light'>{USER_INFO.header}</p>
            <TextGenerateEffect 
              className='text-center lg:text-start'
              words={USER_INFO.description}
            />
            <a 
              onClick={() => scrollLink('contact')}
            >
              <MagicButton 
                title='Contact Me'
                position={'right'}
                icon={<FaLocationArrow/>}
              />
            </a>
          </div>
          
        </div>
    </div>
    <div className='absolute bottom-0 left-[50%] translate-x-[-50%] z-10'>
      {/* <div className='animate-bounce bg-blue border-[#576CBC] border-2 rounded-full p-4'>
        <FaArrowDown className='text-white'/>
      </div> */}
      <BouncingArrow
      />
    </div>
    </BackgroundGradientAnimation>
    </section>
  )
}

export default Home