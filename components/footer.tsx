import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">John Doe</h3>
              <p className="text-muted-foreground mb-4">
                Full Stack Developer passionate about creating amazing web experiences.
              </p>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="/about" className="text-muted-foreground hover:text-primary">
                    About
                  </a>
                </div>
                <div>
                  <a href="/projects" className="text-muted-foreground hover:text-primary">
                    Projects
                  </a>
                </div>
                <div>
                  <a href="/skills" className="text-muted-foreground hover:text-primary">
                    Skills
                  </a>
                </div>
                <div>
                  <a href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>john.doe@example.com</div>
                <div>+1 (555) 123-4567</div>
                <div>San Francisco, CA</div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
