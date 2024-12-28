import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Code, Coffee, Download } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="text-center">
      <Image
        src="/placeholder.svg?height=150&width=150"
        alt="Developer Name"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Thejas G S</h1>
      <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
      <p className="max-w-2xl mx-auto mb-8">
        Passionate about creating efficient, scalable, and user-friendly web applications.
        With expertise in React, Node.js, and cloud technologies.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Briefcase className="w-8 h-8 mb-2 text-primary" />
            <h3 className="text-2xl font-bold">2+</h3>
            <p className="text-sm text-gray-600">Years Experience</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Code className="w-8 h-8 mb-2 text-primary" />
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm text-gray-600">Projects Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Coffee className="w-8 h-8 mb-2 text-primary" />
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-sm text-gray-600">Cups of Coffee</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Download className="w-8 h-8 mb-2 text-primary" />
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-sm text-gray-600">Resume Downloads</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
          
        <Button asChild>
          <a href="/path-to-your-resume.pdf" download>Download Resume</a>
            
        </Button>
      </div>
    </section>
  )
}

export default About

