import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen, Award } from 'lucide-react'
import { education } from '../data/skills'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/98 to-navy-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building a strong academic foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                  <p className="text-primary-400 font-medium">{edu.degree}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'In Progress'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {edu.status === 'In Progress' && (
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  )}
                  {edu.status}
                  {edu.date && ` • ${edu.date}`}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">{edu.description}</p>

              {edu.areas && (
                <div className="flex flex-wrap gap-2">
                  {edu.areas.map((area, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-lg flex items-center gap-1.5">
                      <BookOpen size={12} className="text-primary-400" />
                      {area}
                    </span>
                  ))}
                </div>
              )}

              {edu.highlight && (
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20">
                  <div className="flex items-center gap-2 text-sm">
                    <Award size={16} className="text-primary-400" />
                    <span className="text-white font-medium">{edu.highlight}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
