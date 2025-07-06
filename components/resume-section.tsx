"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownloadResume = () => {
    // In a real application, this would download the actual PDF
    alert("Resume download would start here!")
  }

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold mb-4 md:mb-0"
            >
              Resume
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button onClick={handleDownloadResume} size="lg" className="group">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download PDF
              </Button>
            </motion.div>
          </div>

          <div className="grid gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span>ssmidvacha@gmail.com</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+856-20-225-566-14</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Vientiane, Laos</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Globe className="w-4 h-4 text-primary" />
                      <span>mitvacha.dev</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate Font-End Developer with expertise in modern web technologies. Strong focus on teamwork,
                    collaboration, and creating user-friendly applications. Experienced in Vue.js, Next.js, Node.js and
                    various web development tools. Committed to writing clean, maintainable code and continuous
                    learning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience & Education */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Full-Stack Developer</h3>
                            <p className="text-muted-foreground">Tech Solutions Co.</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2022 - Present</span>
                        </div>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Developed responsive web applications using Next.js</li>
                          <li>Collaborated with cross-functional teams to deliver projects</li>
                          <li>Implemented modern UI/UX designs with Tailwind CSS</li>
                        </ul>
                      </motion.div> */}

                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Frontend Developer</h3>
                            {/* <p className="text-muted-foreground"></p> */}
                          </div>
                          {/* <span className="text-sm text-muted-foreground">2021 - 2022</span> */}
                        </div>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Built interactive user interfaces with Next.js</li>
                          <li>Optimized website performance and accessibility</li>
                          <li>Worked closely with design team for pixel-perfect implementations</li>
                        </ul>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Education & Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Began my Computer Engineering</h3>
                            <p className="text-muted-foreground">National University of Laos</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2023 - 2024</span>
                        </div>
                        {/* <p className="text-sm text-muted-foreground">First Class Honors • GPA: 3.7/4.0</p> */}
                      </motion.div>

                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <div>
                          <h3 className="font-semibold mb-2">Certifications</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>• Font-End Developer Certification</p>
                            {/* <p>• Next.js Professional Certificate</p>
                            <p>• AWS Cloud Practitioner</p> */}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
