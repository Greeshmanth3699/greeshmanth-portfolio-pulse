import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Student Feedback Evaluation System",
      description: "A comprehensive platform that collects, processes, and evaluates student feedback for academic performance analysis with real-time analytics.",
      tech: "Spring Boot",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["Real-time Analytics", "Secure Authentication", "Data Visualization"]
    },
    {
      title: "Student Learning Management Website",
      description: "Full-featured learning management system that manages online learning activities, student registrations, and comprehensive course content delivery.",
      tech: "Django",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: ["Course Management", "Student Portal", "Progress Tracking"]
    },
    {
      title: "AI Mock Interview Platform",
      description: "An interactive platform simulating mock interview questions using AI technology to help students prepare for technical interviews effectively.",
      tech: "React",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["AI-Powered Questions", "Performance Analysis", "Video Recording"]
    },
    {
      title: "Placement Portal",
      description: "A comprehensive portal for managing student placement data, registrations, and notifications with company integration and tracking systems.",
      tech: "Java",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["Company Integration", "Application Tracking", "Notification System"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            My Recently Finished Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Take a look at some of the projects I have done. Let's work together today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-elegant hover-scale group overflow-hidden">
              <div 
                className="h-48 w-full relative"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
                    {project.tech}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;