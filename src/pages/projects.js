import * as React from 'react'
import Seo from '../components/seo'
import * as icons from 'react-icons/ri';
import { Link } from 'gatsby';

const ProjectEntry = ({ title, description, tags, projectLink, codeLink }) => {
  return (
    <div className="h-full w-full rounded-lg shadow dark:bg-slate-700 bg-slate-200 transition ease-in-out duration-300">
      <div className="p-4">
        <h3 className="text-xl font-medium flex flex-row space-x-4 place-items-center">
          {/* project link and codelink are optional, if not provided we don't display the links / icons*/}
          {projectLink ? (
            <Link href={projectLink} target="_blank" className="flex flex-row space-x-1 group cursor-pointer place-items-center hover:underline">
              <p>{title}</p>
              <icons.RiArrowRightUpLine size={20} className="group-hover:scale-125 group-hover:-translate-y-1 cursor-pointer transition-transform ease-in-out duration-300"></icons.RiArrowRightUpLine>
            </Link>
          ) : (
            <p>{title}</p>
          )}
          {codeLink && (
            <Link href={codeLink} target="_blank" className="hover:scale-125 cursor-pointer transition-transform ease-in-out duration-300">
              <icons.RiGithubFill size={24}></icons.RiGithubFill>
            </Link>
          )}
        </h3>
        <p className="mt-1">{description}</p>
        <div className="mt-4 flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center gap-1 rounded-full bg-slate-300 dark:bg-slate-500 px-2 py-1 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const ProjectsPage = () => {
  return (
    <div pageTitle='Projects' className='px-4'>
      <h1 className="text-3xl font-bold mt-4">Projects</h1>
      <p className='py-4'>
        These are my projects, don't hesitate to have a look at them if you are curious !
      </p>

      <div className='pt-2 pb-4 grid grid-cols-1 xl:grid-cols-2 place-items-start xl:place-items-center gap-8 transition ease-in-out duration-300'> 
      
        <ProjectEntry
          title={'Sine Wave Visualization on STM32'}
          description={'Developed a real-time sine wave visualization using TensorFlow Lite on an STM32 microcontroller'}
          tags={['C','C++', 'Machine Learning','Python']}
          projectLink={'https://github.com/rmknan/Hello_World_Tensorflow_Lite'}
          codeLink={'https://github.com/rmknan/Hello_World_Tensorflow_Lite/blob/master/Src/main.cc'}
          >
        </ProjectEntry>

        <ProjectEntry
          title={'Handwritten Digit Classifier on STM32'}
          description={'Deployed a TinyML-powered digit recognition system on STM32F429 for real-time inferencing.'}
          tags={['Embedded C','C++', 'Machine Learning','Python']}
          projectLink={'https://github.com/rmknan/Number-Recognition-using-TinyML-on-STMF429'}
          codeLink={'https://github.com/rmknan/Number-Recognition-using-TinyML-on-STMF429/blob/main/Src/main.cc'}
          >
        </ProjectEntry>
        
        <ProjectEntry
          title={'Heart Rate Monitor'}
          description={'Engineered a heart rate monitor on STM32 using I2C communication for real-time health tracking '}
          tags={['Embedded C','C++', 'I2C','Python']}
          projectLink={'https://github.com/rmknan/Heart-Rate-Monitor'}
          codeLink={'https://github.com/rmknan/Heart-Rate-Monitor/blob/main/src/main.cpp'}
          >
        </ProjectEntry>
        
        <ProjectEntry
          title={'RTOS Projects'}
          description={'Curated a collection of RTOS-based projects'}
          tags={['C','FreeRTOS', 'UART']}
          projectLink={'https://github.com/rmknan/RTOS'}
          codeLink={'https://github.com/rmknan/RTOS/blob/master/Structured_Queue/Core/Src/main.c'}
          >
        </ProjectEntry>
        
         <ProjectEntry
          title={'Reinforcement learning for inverted pendulum'}
          description={'Applied Q-learning to stabilize an inverted pendulum, combining robotics with machine learning.'}
          tags={['Python','Machine Learning', 'Robotics']}
          projectLink={'https://github.com/rmknan/Reinforcement-Learning-for-Inverted-Pendulum'}
          codeLink={'https://github.com/rmknan/Reinforcement-Learning-for-Inverted-Pendulum/blob/main/pendulum.py'}
          >
        </ProjectEntry>
        
         <ProjectEntry
          title={'Design of two channel teleoperation system'}
          description={'A Simulink model of a telerobotic system using TDPC'}
          tags={['MATLAB','Simulink', 'Robotics']}
          projectLink={'https://github.com/rmknan/Design-of-two-channel-teleoperation-system'}
          codeLink={'https://github.com/rmknan/Design-of-two-channel-teleoperation-system'}
          >
        </ProjectEntry>
        
         <ProjectEntry
          title={'Projects of 2021'}
          description={'A comprehensive showcase of projects from 2021'}
          tags={['MATLAB','Simulink', 'Machine Learning','Python']}
          projectLink={'https://github.com/rmknan/Projects-2021'}
          codeLink={'https://github.com/rmknan/Projects-2021'}
          >
        </ProjectEntry>

      </div>
    </div>
  )
}

export const Head = () => <Seo title='Projects' description='Projects.' pathname='/projects'/>

export default ProjectsPage
