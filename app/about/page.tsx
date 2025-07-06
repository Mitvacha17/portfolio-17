import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Hello, I'm John Doe</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience in creating web applications. I love
              turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
              enjoying a good cup of coffee while reading tech blogs.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Senior Full Stack Developer</h4>
                  <p className="text-sm text-muted-foreground">Tech Company • 2021 - Present</p>
                  <p className="text-sm mt-2">Leading development of web applications using React and Node.js</p>
                </div>
                <div>
                  <h4 className="font-medium">Frontend Developer</h4>
                  <p className="text-sm text-muted-foreground">Startup Inc • 2019 - 2021</p>
                  <p className="text-sm mt-2">Built responsive web applications and improved user experience</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Bachelor of Computer Science</h4>
                  <p className="text-sm text-muted-foreground">University of Technology • 2015 - 2019</p>
                  <p className="text-sm mt-2">Graduated with First Class Honors</p>
                </div>
                <div>
                  <h4 className="font-medium">Certifications</h4>
                  <p className="text-sm text-muted-foreground">AWS Certified Developer</p>
                  <p className="text-sm text-muted-foreground">Google Cloud Professional</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
