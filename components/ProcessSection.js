
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Search, Lightbulb, Palette, Layers, Code, CheckCircle } from 'lucide-react'

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
  
  const processSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Research",
      description: "Understanding user needs, business goals, and market context through thorough research."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Ideate",
      description: "Generating creative solutions and exploring multiple approaches to solve the design challenge."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      description: "Creating visually appealing interfaces with intuitive interactions and thoughtful details."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Prototype",
      description: "Building interactive prototypes to test and validate design solutions before development."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Implement",
      description: "Working closely with developers to ensure the design vision is executed properly."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Test & Iterate",
      description: "Continuously testing with users and refining the design based on feedback and data."
    },
  ]
  
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">My Design Process</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            A systematic approach to creating intuitive and effective digital experiences.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 transition-transform bg-white rounded-lg shadow-sm dark:bg-dark-700 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary-500 rounded-lg dark:bg-primary-600">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
