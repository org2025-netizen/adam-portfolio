import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, Globe, Database, Layers, Shield, Brain } from 'lucide-react'
import { skills } from '../data/skills'

const iconMap = {
  Code2,
  Globe,
  Database,
  Layers,
  Shield,
  Brain,
}

const levelColors = {
  Proficient: 'bg-emerald-500',
  Intermediate: 'bg-blue-500',
  Learning: 'bg-amber-500',
}

const levelTextColors = {
  Proficient: 'text-emerald-400',
  Intermediate: 'text-blue-400',
  Learning: 'text-amber-400',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A growing toolkit of technologies I work with
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon]
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === i
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {Icon && <Icon size={16} />}
                {skill.category}
              </motion.button>
            )
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills[activeCategory].items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium group-hover:text-primary-400 transition-colors">
                  {item.name}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${levelTextColors[item.level]} bg-white/5`}>
                  {item.level}
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: item.level === 'Proficient' ? '80%' : item.level === 'Intermediate' ? '60%' : '40%' }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  className={`h-2 rounded-full ${levelColors[item.level]}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
