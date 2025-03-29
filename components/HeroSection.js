
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-64 h-64 rounded-full bg-primary-300/20 dark:bg-primary-700/10 blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-96 h-96 rounded-full bg-secondary-300/20 dark:bg-secondary-700/10 blur-3xl top-1/3 -right-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-primary-200/20 dark:bg-primary-600/10 blur-3xl bottom-0 left-1/4"></div>
      </div>
      
      <div className="container-custom">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Crafting Intuitive <span className="text-primary-500 dark:text-primary-400">Digital Experiences</span> Through Thoughtful Design
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto mt-6 text-xl text-secondary-600 dark:text-secondary-300"
            variants={itemVariants}
          >
            UX/UI designer focused on creating beautiful, functional interfaces that solve real problems and delight users.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-10"
            variants={itemVariants}
          >
            <Link 
              href="/case-studies" 
              className="btn btn-primary"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <Link 
              href="/contact" 
              className="btn btn-secondary"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative mt-20 md:mt-32"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative mx-auto overflow-hidden rounded-lg shadow-xl md:w-5/6 aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-secondary-500/20 dark:from-primary-900/30 dark:to-secondary-900/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg font-medium text-center text-white">Hero image showcasing design work</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-4 w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10 rotate-12"></div>
          <div className="absolute bottom-1/3 -right-8 w-32 h-32 bg-secondary-100 dark:bg-secondary-900/30 rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  )
}
