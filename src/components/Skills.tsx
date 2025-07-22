import { Code, Database, Globe, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript", "TypeScript"]
    },
    {
      icon: Globe,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Spring Boot", "Django", "Express.js", "Node.js"]
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "Docker", "AWS"]
    },
    {
      icon: Settings,
      title: "Core Skills",
      skills: ["Data Structures", "Algorithms", "Full-Stack Development", "SDLC", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired through academic learning and hands-on project development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant hover-scale group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-smooth">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-primary/5 rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-smooth"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;