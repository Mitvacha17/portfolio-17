"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillsData = {
  categories: [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 70 },
        { name: "JavaScript", level: 55 },
        { name: "Next.js", level: 30 },
        { name: "Tailwind CSS", level: 50 },
      ],
    },
    // {
    //   name: "Backend",
    //   icon: "⚙️",
    //   skills: [
    //     { name: "Node.js", level: 85 },
    //     { name: "Express.js", level: 80 },
    //     { name: "MongoDB", level: 75 },
    //     { name: "PostgreSQL", level: 70 },
    //   ],
    // },
    {
      name: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 40 },
        { name: "GitHub", level: 45 },
        { name: "Figma", level: 50 },
      ],
    },
  ],
  tools: [
    "VS Code",
    "Git",
    "GitHub",
    "Figma", 
    "Chatgpt",
    "Claud ai", 
    "V0"
  ],
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillsData.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.span
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.icon}
                      </motion.span>
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + skillIndex * 0.1 }}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.2 + skillIndex * 0.1 }}
                          >
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  {skillsData.tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="outline">{tool}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
