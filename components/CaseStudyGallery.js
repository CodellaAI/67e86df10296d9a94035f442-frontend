
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'

export default function CaseStudyGallery({ images }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [selectedImage, setSelectedImage] = useState(null)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
  
  if (!images || images.length === 0) {
    return null
  }
  
  return (
    <>
      <section className="py-16 bg-secondary-50 dark:bg-dark-700">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl">Project Gallery</h2>
            
            <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {images.map((image, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="overflow-hidden cursor-pointer rounded-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full overflow-hidden aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt || 'Project image'}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {image.caption && (
                    <p className="p-3 text-sm text-center text-secondary-600 dark:text-secondary-300">
                      {image.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      <Dialog 
        open={selectedImage !== null} 
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-4xl overflow-hidden bg-white rounded-lg dark:bg-dark-700">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-secondary-500 bg-white rounded-full hover:text-secondary-700 dark:bg-dark-600 dark:text-secondary-300 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Close</span>
            </button>
            
            {selectedImage && (
              <div className="p-4">
                <div className="relative w-full overflow-hidden rounded-lg aspect-video">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt || 'Project image'}
                    fill
                    className="object-contain"
                  />
                </div>
                {selectedImage.caption && (
                  <div className="p-4 text-center">
                    <p className="text-secondary-700 dark:text-secondary-300">{selectedImage.caption}</p>
                  </div>
                )}
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
