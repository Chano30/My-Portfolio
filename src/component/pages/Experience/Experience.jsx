import { useInView } from "react-intersection-observer";
import { EXPERIENCE, SKILLS } from "../../../data";
import { getImageUrl } from "../../../lib/utils";
import { motion } from "framer-motion";



const SkillComponent = ({index, skill, skillImage}) => {
  const skillVariant = {
    'hidden': {opacity: 0, y: 50},
    'visible': {
      opacity: 1,
      y: 0,
      transition: {duration: 0.2, delay: index + 0.2}
    }
  }

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
      variants={skillVariant}
      className="flex flex-col items-center gap-[11px] overflow-hidden"
    >
      <img className={'w-[75%] lg:w-full'} src={skillImage} alt="" />
      <h5 className='text-lg md:text-2xl font-medium'>{skill}</h5>
    </motion.div>
  )
}


const Experience = () => {

  const itemVariants = {
    hidden: {opacity: 0, y:50, scale: 0.5},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 50,
        mass:1
      }
    }
  }

  const expVariant = {
      hidden: {opacity: 0, y:50},
      visible: {
        opacity: 1,
        y:0,
        transition: {duration: 0.9, delay: 0.2}
      }
    }


  return (
    <section
      id="experience"
      className="bg-blue text-white overflow-hidden py-4"
    >
      <motion.div 
        whileInView="visible" initial="hidden" variants={itemVariants} 
        className="text-center mb-16"
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-6">Experience</h2>
        </motion.div>
        <div
          className="flex justify-evenly items-center mt-10 mx-10 flex-col md:flex-row gap-10 md:gap-5"
        >
          <div
            className="md:w-[45%] flex flex-wrap gap-[10px] md:gap-[30px] lg:gap-[100px] justify-center"
          >
            {SKILLS.map((item,idx) => {
              return (
                <SkillComponent 
                  key={idx}
                  skill={item.skill}
                  skillImage={getImageUrl(item.skillImage)}
                  index={item.id}

                />
              )
            })}
            {/* <Logos image={NextJs} title="NextJs" />
            <Logos image={HtmlSvg} title="HTML" />
            <Logos image={CssSvg} title="CSS" />
            <Logos image={ReactSvg} title="React Native" otherClass='md:w-[65%]'/>
            <Logos image={ReactSvg} title="React JS" />
            <Logos image={LaravelSvg} title="Laravel" /> */}
          </div>
          <ul
            className="flex flex-col md:w-[45%] gap-[40px]"
          >
            {EXPERIENCE.map((item, idx) => {
              return (
                <motion.li
                key={idx}
                className="flex items-center flex-row gap-5"
                variants={expVariant}
                initial="hidden"
                whileInView="visible"
                >
                  <img className="w-[50px]" src={getImageUrl(item.compLogo)} alt="" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">{`${item.role} - ${item.company}`}</h3>
                    <p className="md:text-lg font-medium">{`${item.startDate} - ${item.endDate}`}</p>
                    <ul
                      className="list-disc mt-2 list-inside font-1xl ml-5"
                    >
                      {item.experience.map((exp, idx) => {
                        return (
                          <li key={idx}>
                            {exp}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
    </section>
  );
};

export default Experience;
