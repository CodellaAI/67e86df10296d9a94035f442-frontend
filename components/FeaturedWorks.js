
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'
import { featuredCaseStudies } from '@/data/caseStudies'

export default function FeaturedWorks() {
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
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {featuredCaseStudies.map((project, index) => (
        <motion.div 
          key={project.id}
          variants={itemVariants}
          className="group"
        >
          <Link href={`/case-studies/${project.slug}`} className="block overflow-hidden rounded-lg card">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-primary-500/80 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary-500 dark:group-hover:text-primary-400">
                {project.title}
              </h3>
              <p className="mb-4 text-secondary-600 dark:text-secondary-300">
                {project.shortDescription}
              </p>
              <div className="flex items-center text-primary-500 dark:text-primary-400">
                <span className="font-medium">View case study</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
