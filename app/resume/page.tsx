import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react"

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Resume</h1>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="grid gap-8">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>johndoe.dev</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications.
                Proficient in React, Next.js, Node.js, and cloud technologies. Passionate about creating efficient,
                user-friendly solutions and leading development teams.
              </p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Senior Full Stack Developer</h3>
                      <p className="text-muted-foreground">Tech Innovations Inc.</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2021 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Led development of 3 major web applications serving 100k+ users</li>
                    <li>Improved application performance by 40% through optimization</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Frontend Developer</h3>
                      <p className="text-muted-foreground">Digital Solutions LLC</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2019 - 2021</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Built responsive web applications using React and TypeScript</li>
                    <li>Collaborated with design team to implement pixel-perfect UIs</li>
                    <li>Integrated RESTful APIs and managed application state</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-muted-foreground">University of Technology</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2015 - 2019</span>
                </div>
                <p className="text-sm text-muted-foreground">First Class Honors • GPA: 3.8/4.0</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
