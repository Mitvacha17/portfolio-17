"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, FacebookIcon, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const handleEmailClick = () => {
  window.location.href = "mailto: ssmidvacha@gmailcom";
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  Hi, I'm <span className="text-primary">Mitvacha</span>
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-muted-foreground"
                >
                  Font-End Developer
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  I create beautiful, responsive web applications using modern
                  technologies. Passionate about clean code, teamwork, and
                  continuous learning.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="group">
                  <a href="#contact">
                    <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group bg-transparent"
                >
                  <a href="#projects">
                    <span className="group-hover:animate-pulse">
                      View My Work
                    </span>
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="https://github.com/Mitvacha17" target="_blank">
                    <Button variant="ghost" size="icon">
                      <Github className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="https://www.facebook.com/share/1ADEaLMUiR/?mibextid=wwXIfr"
                    target="_blank"
                  >
                    <Button variant="ghost" size="icon">
                      <FacebookIcon className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    onClick={handleEmailClick}
                    href="#">
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Mail className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src="./Ja1.jpg"
                    alt="Mitvacha"
                    width={350}
                    height={50}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
