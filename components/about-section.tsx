"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/50">
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
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/_MG_0801.jpg"
                  alt="Profile Picture"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Hello, I'm Mitvacha</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Font-End Developer with a strong focus on teamwork and collaboration. I believe that
                the best solutions come from working together and sharing knowledge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise lies in web development, where I enjoy creating user-friendly applications that solve
                real-world problems. I'm always eager to learn new technologies and improve my skills.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Teamwork", "Web Development", "Problem Solving", "Continuous Learning"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Badge variant="secondary">{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">What I Love</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🤝</span>
                      <span>Collaborating with amazing teams</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💻</span>
                      <span>Building responsive web applications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚀</span>
                      <span>Learning cutting-edge technologies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎯</span>
                      <span>Solving complex problems</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">My Approach</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎨</span>
                      <span>Clean, maintainable code</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📱</span>
                      <span>Mobile-first design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⚡</span>
                      <span>Performance optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔄</span>
                      <span>Agile development</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
