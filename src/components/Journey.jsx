import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Monitor, Code2, Folder, Globe, Brain, Sparkles, ArrowDown } from 'lucide-react'
import { journey } from '../data/skills'

const iconMap = {
  Briefcase,
  GraduationCap,
  Monitor,
  Code2,
  FolderCode: Folder,
  Globe,
  Brain,
  Sparkles,
}

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="journey" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A path of continuous growth and exploration
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {journey.map((step, i) => {
            const Icon = iconMap[step.icon]
            const isLast = i === journey.length - 1
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 z-10 ${
                      isLast
                        ? 'bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg shadow-primary-500/30'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    {Icon && <Icon size={24} className={isLast ? 'text-white' : 'text-primary-400'} />}
                  </motion.div>
                  
                  <div className={`flex-1 pb-8 ${!isLast ? 'border-b border-white/5' : ''}`}>
                    <h3 className={`text-lg font-semibold ${isLast ? 'text-gradient' : 'text-white'}`}>
                      {step.label}
                    </h3>
                    {!isLast && (
                      <div className="absolute left-7 top-14 w-px h-8 bg-gradient-to-b from-primary-500/50 to-transparent" />
                    )}
                  </div>
                </div>
                
                {!isLast && (
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute left-[29px] top-14"
                  >
                    <ArrowDown size={12} className="text-primary-500/50" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
