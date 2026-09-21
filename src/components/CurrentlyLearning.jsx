import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, TrendingUp, Target, Zap } from 'lucide-react'
import { currentlyLearning, careerGoals } from '../data/skills'

export default function CurrentlyLearning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/98 to-navy-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Sparkles size={20} className="text-primary-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Currently <span className="text-gradient">Exploring</span>
              </h2>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <div className="flex flex-wrap gap-3 mb-6">
                {currentlyLearning.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 glass rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Zap size={14} className="text-primary-400" />
                <span className="italic">Always Learning</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Target size={20} className="text-primary-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Where I'm <span className="text-gradient">Headed</span>
              </h2>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-400 leading-relaxed mb-6">
                My goal is to build a career at the intersection of software engineering and artificial intelligence, creating technology that solves real-world problems.
              </p>
              <div className="space-y-3">
                {careerGoals.map((goal, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                      <TrendingUp size={14} className="text-primary-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
