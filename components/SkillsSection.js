
'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Design",
      skills: [
        { name: "UI Design", level: 95 },
        { name: "UX Design", level: 90 },
        { name: "Interaction Design", level: 85 },
        { name: "Wireframing", level: 95 },
        { name: "Prototyping", level: 90 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Adobe Illustrator", level: 75 },
      ]
    },
    {
      title: "Other",
      skills: [
        { name: "User Research", level: 85 },
        { name: "Usability Testing", level: 80 },
        { name: "HTML/CSS", level: 75 },
        { name: "Design Systems", level: 85 },
        { name: "Information Architecture", level: 80 },
      ]
    }
  ]
  
  return (
    <section className="section bg-secondary-50 dark:bg-dark-700">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Skills & Expertise</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            A comprehensive overview of my design capabilities and technical proficiencies.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="p-6 bg-white rounded-lg shadow-sm dark:bg-dark-600">
              <h3 className="mb-6 text-xl font-bold">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-secondary-500 dark:text-secondary-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary-100 rounded-full dark:bg-dark-500">
                      <motion.div 
                        className="h-2 bg-primary-500 rounded-full dark:bg-primary-600"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
