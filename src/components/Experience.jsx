import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, CheckCircle } from 'lucide-react'
import { experience } from '../data/skills'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building a foundation through practical experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={22} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-primary-400 font-medium">{exp.organization}</p>
                  {exp.period && (
                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                  )}
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">{exp.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {exp.highlights.map((highlight, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-primary-400 flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
