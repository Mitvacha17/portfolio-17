"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Tourist Blog",
    description:
      "Discover breathtaking destinations across Laos with our modern travel blog. Explore hidden gems, cultural landmarks, and nature spots all in one beautifully designed platform.",
    image: "/web-blog.png",
    technologies: ["HTML", "Tailwind CSS", "Javascript"],
    githubUrl: "https://github.com/mitvacha/devblog",
  },
  {
    title: "Ferrari Web",
    description:
      "Luxury e-commerce platform inspired by Ferrari. Built with advanced UI, smooth performance, and features like payment gateway, stock tracking, and admin control all in one sleek dashboard.",
    image: "/ferrari.png",
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/mitvacha/ecommerce",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio showcasing my development projects, tech skills, and personal branding built with smooth animations, modern UI, and dark mode by default.",
    image: "/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Typescript"],
    githubUrl: "https://github.com/mitvacha/portfolio",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="p-0">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + techIndex * 0.1 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-2">
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild size="sm" variant="outline">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div> */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild size="sm" variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
