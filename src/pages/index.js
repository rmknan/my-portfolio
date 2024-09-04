import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { ExperienceEntry, EducationEntry, PublicationEntry } from '../components/curriculumEntry';
import { Link } from 'gatsby';
import * as icons from 'react-icons/ri';
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12">
        {/* Photo and social links */}
        <div className="flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24">
          {/* Photo */}
          <StaticImage
            src="../images/Mohan.jpg"
            alt="Me"
            className="rounded-full h-64 w-64 object-position mt-4"
          />
          {/* Social links */}
          <div className='flex flex-row mx-auto place-items-center space-x-8 overflow-visible'>
            <Link href="https://www.linkedin.com/in/mohanakrishnan02" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="LinkedIn">
              <icons.RiLinkedinBoxFill size={32}></icons.RiLinkedinBoxFill>
            </Link>
            <Link href="https://github.com/rmknan" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Github">
              <icons.RiGithubFill size={32}></icons.RiGithubFill>
            </Link>
             <Link href="mailto:mr5910@nyu.edu" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='Email'>
    <icons.RiMailFill size={31}></icons.RiMailFill>
  	 </Link>
            <Link href="https://drive.google.com/file/d/1WAtR4RVJdw6YGqs-hVygANPnVq4QtfnG/view?usp=drive_link" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='CV'>
              <i className="ai ai-cv ai-size-32"></i>
            </Link>
          </div>

          {/* Quick links */}
          <div className='hidden lg:flex flex-col w-1/3 items-start'>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#experience")} className='peer group-hover:underline'>Experience</button>
            </div>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#education")} className='peer group-hover:underline'>Education</button>
            </div>
            <div className='flex flex-row items-center group'>
                <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
                <button onClick={() => scrollTo("#Open-Source")} className='peer hover:underline whitespace-nowrap'>Open-Source</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#contact")} className='peer hover:underline'>Contact</button>
            </div>
          </div>
        </div>

        {/* Text and content */}
        <div className="container flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Hi, I'm Mohan!</h1>

          <p className="mb-4 text-justify">
           Mohanakrishnan is a dedicated Embedded Engineer at Medsix, a pioneering medical device startup, where he contributes to developing innovative, life-saving technologies. He earned his Master’s in Electrical Engineering from New York University, specializing in Embedded Systems and Robotics, solidifying his expertise in these dynamic fields.
          </p>
          <p className="mb-4 text-justify">
            His work is marked by a commitment to advancing embedded systems technology. His journey is driven by a deep curiosity and a passion for exploring the intersections of embedded systems, robotics, and machine learning, with the goal of making a significant impact in these areas. 
          </p>
          <p className="mb-4 text-justify">
            Mohanakrishnan balances his professional life with personal interests that keep him sharp and inspired. He is an avid reader, continually expanding his knowledge in emerging technologies, particularly AI and robotics. In his downtime, he enjoys video gaming, which fuels his creativity. Additionally, he finds refreshment in outdoor activities like hiking, where the natural world offers new perspectives and inspiration for his work.
          </p>

          {/* Timeline */}
          <section>
            <div id="experience" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Experience</h1>
            <ExperienceEntry
              date={'Feb\u00a02023 - \u00a0'}
              title={'Embedded Engineer'}
              company={'Medsix'}
              description={'Configured and calibrated MCP9600, DFRobot Gravity Conductivity Sensor, and Adafruit TCS34725 RGB Sensor on the WHISPER prototype. Collaborated on feature design, implementation, and bug resolution. Supported the final design phase for medical trials.'}
              tags={['Embedded Systems Design', 'Debugging', 'Sensor Configuration and Calibration']}
            />
            <ExperienceEntry
              date={'June\u00a02022 - Aug\u00a02022'}
              title={'Embedded Engineer Intern'}
              company={'Pangolin Laser Systems'}
              description={'Configured TMP112 Temperature Sensor with MACH DSP 21489 using I2C communication. Set up ADC/DAC parameters on STM32H735 and STM32H753 and conducted low-level debugging to resolve firmware issues. Contributed to successful operation of Laser Scanners on STM MCUs.'}
              tags={['Firmware Development and Testing', 'Low-Level Debugging', 'ADC/DAC Configuration']}
            />
            <ExperienceEntry
              date={'June\u00a02018 - July\u00a02018'}
              title={'Electrical Engineer Intern'}
              company={'Reliance Industries LTD'}
              description={'Conducted in-depth analyses to select and calculate ratings for transformers, batteries, and cables, optimizing performance for industrial applications. Collaborated with a mentor to present and refine equipment selection decisions, ensuring technical accuracy and efficiency.'}
              tags={['AutoCAD', 'Equipment Selection and Sizing','MS Excel']}
            />
          </section>

          <section>
            <div id="education" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Education</h1>
            <EducationEntry
              date={'2021 - 2022'}
              university={'New York University'}
              degree={'MS in Electrical Engineering'}
              description={'Specialized in Embedded System and Robotics. Coursework includes: Machine Learning, Electronic Power Supplies, Linear Systems, Digital Signal Processing, Robot Localization and Navigation, Embedded Systems, Interactive Medical Robotics, Reinforcement Learning and Optimal Control for Robots. '}
              tags={['Embedded Systems', 'Machine Learning', 'Robotics']}
            />
            <EducationEntry
              date={'2016 - 2020'}
              university={'SRM Institute of Science and Technology'}
              degree={'B.Tech in Electronics and Communication Engineering'}
              description={'Coursework includes: Adhoc and Sensor Networks, Embedded System Design, VLSI Design, Digital Image Processing and Machine Vision, Wireless Communication, Communication Systems and Communication Network Protocols.'}
              tags={['Embedded Systems', 'VLSI', 'Wireless Communication']}
            />
          </section>

          <section>
            <div id="Open-Source" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Open-Source</h1>
            <PublicationEntry
              date={'2023 -'}
              title={'Stumpless: C Logging Library'}
              description={'Enhanced the C logging library by implementing new features and resolving issues, ensuring adherence to coding standards. Utilized Valgrind for memory debugging and leak detection, and GDB for debugging multiple files to maintain system reliability.'}
              tags={['Git', 'GDB', 'Memory Debugging']}
            />
          </section> 
          

          <section id="contact">
            <div id="contact" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Contact</h1>
            <p>
              If you are interested in discussing, please feel free to reach out through E-mail or LinkedIn !
            </p>    
          </section>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
