import { useInView } from 'react-intersection-observer'
import { ABOUT } from '../../../data'
import { BackgroundBeamsWithCollision } from '../../../ui/BackgroundWithCollison'
import { motion} from "framer-motion"


const About = () => {

	const {ref, inView} = useInView({
		threshold: 0.1,
	})

	const containerVariants = {
		"hidden": { opacity: 0 },
		"visible" : {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.7
			}
		}
	}

	const itemVariants = {
		"hidden": {opacity: 0, x: -50},
		"visible": {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 50,
				damping: 15,
				mass: 1
			}
		}
	}
	
	// const imgVariant = {
	// 	hidden: {opacity: 0, x: -50},
	// 	visible: {
	// 		opacity: 1,
	// 		x: 0,
	// 		transition: {duration:0.6, delay: 0.3}
	// 	}
	// }

	const ulVariant = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition:{
				staggerChildren: 0.2,
				delayChildren: 0.7
			}
		}
	}
	const liVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };




return (
	<section ref={ref} id='about' className=' bg-blue overflow-hidden text-white py-4'>
		<motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
		<motion.div 
          className="text-center sm:mb-6"
          variants={containerVariants}
          initial= "hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold"
          >About</motion.h2>
        </motion.div>
		<BackgroundBeamsWithCollision className={'bg-blue flex flex-col gap-5 lg:gap-0 items-center pt-10'}> 
				<div className='flex lg:flex-1 md:mb-10 rounded-[50px] md:bg-[rgba(12,12,12,0.6)] lg:flex-row flex-col md:pb-5 justify-center sm:mx-10 px-4 sm:px-10 lg:gap-5 items-center'>
					<motion.img 
						variants={itemVariants}
						// initial='hidden'
						// whileInView='visible'
						className='md:block hidden h-auto w-[50%] lg:max-w-full object-cover'
						src="/public/assets/about/chano-about.png" 
						alt="" 
					/>
					<motion.ul
						variants={ulVariant}
            initial='hidden'
	 					animate={inView ? "visible" : "hidden"}
						className='flex gap-10 flex-col'
					>
						<motion.li
								variants={liVariant}
							className='flex gap-5'
						>
							<img className='h-auto w-10 sm:w-auto' src="/public/assets/about/ArrowAbout.png" alt="" />
							<div>
								<h2 className='text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider'>{ABOUT.data1.title}</h2>
								<p className=' sm:text-lg'>{ABOUT.data1.Description}</p>
							</div>
						</motion.li>
						<motion.li
								variants={liVariant} 
							className='flex gap-5'
						>
							<img className='h-auto w-10 sm:w-auto' src="/public/assets/about/BackendAbout.png" alt="" />
							<div>
								<h2 className='sm:text-2xl lg:text-3xl font-bold tracking-wider'>{ABOUT.data2.title}</h2>
								<p className='text-xs sm:text-lg'>{ABOUT.data2.Description}</p>
							</div>
						</motion.li>
						<motion.li
								variants={liVariant} 
							className='flex gap-5'
						>
							<img className='h-auto w-10 sm:w-auto' src="/public/assets/about/UiAbout.png" alt="" />
							<div>
								<h2 className='sm:text-2xl lg:text-3xl font-bold tracking-wider'>{ABOUT.data3.title}</h2>
								<p className='text-xs sm:text-lg'>{ABOUT.data3.Description}</p>
							</div>
						</motion.li>
					</motion.ul>
				</div>
		</BackgroundBeamsWithCollision>
		</motion.div>
	</section>
  )
}

export default About