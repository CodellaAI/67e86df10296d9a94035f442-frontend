
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Senior UX/UI Designer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Leading design initiatives for web and mobile applications. Collaborating with product managers and developers to create intuitive user experiences. Managing a team of junior designers and establishing design systems."
    },
    {
      title: "UX Designer",
      company: "Digital Solutions Agency",
      period: "2018 - 2020",
      description: "Designed user experiences for various client projects including e-commerce platforms, mobile apps, and web applications. Conducted user research and usability testing to inform design decisions."
    },
    {
      title: "UI Designer",
      company: "Creative Studio",
      period: "2016 - 2018",
      description: "Created visually appealing interfaces for websites and applications. Collaborated with UX designers to implement designs that balanced aesthetics with functionality."
    },
    {
      title: "Design Intern",
      company: "Web Design Co.",
      period: "2015 - 2016",
      description: "Assisted senior designers with various design tasks. Gained hands-on experience with design tools and processes. Participated in client meetings and design reviews."
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  }
  
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Professional Experience</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            My journey as a designer through various roles and projects.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-[15px] w-0.5 bg-secondary-200 dark:bg-dark-500 md:left-1/2 md:-ml-0.5"></div>
          
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-8 ${
                index % 2 === 0 ? 'md:text-right md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              }`}
              style={{ width: '100%', maxWidth: '50%', marginLeft: index % 2 !== 0 ? '0' : 'auto' }}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 left-0 flex items-center justify-center w-8 h-8 text-white bg-primary-500 rounded-full md:left-1/2 md:-ml-4 ${
                index % 2 === 0 ? 'md:-translate-x-full' : ''
              }`}>
                <Briefcase className="w-4 h-4" />
              </div>
              
              {/* Content */}
              <div className={`ml-12 p-5 bg-white rounded-lg shadow-sm dark:bg-dark-600 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary-600 bg-primary-50 rounded-full dark:bg-primary-900/30 dark:text-primary-300">
                  {experience.period}
                </span>
                <h3 className="mb-1 text-xl font-bold">{experience.title}</h3>
                <p className="mb-3 text-primary-500 dark:text-primary-400">{experience.company}</p>
                <p className="text-secondary-600 dark:text-secondary-300">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
