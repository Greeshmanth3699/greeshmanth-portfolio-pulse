import { GraduationCap, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Koneru Lakshmaiah Education Foundation, Vijayawada",
      period: "2022–2026",
      grade: "CGPA: 9.3"
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College, Hyderabad",
      period: "2020–2022",
      grade: "CGPA: 8.55"
    },
    {
      degree: "SSC",
      institution: "Sri Chaitanya School, Kodad",
      period: "2019–2020",
      grade: "CGPA: 10.0"
    }
  ];

  const certifications = [
    "Salesforce Certified AI Associate",
    "Red Hat Certified Enterprise Application Developer (EX183)",
    "AWS Certified Cloud Practitioner (CLF-C02)",
    "Automation Anywhere (RPA)",
    "Aviatrix MultiCloud Networking Associate (ACE)",
    "Linguaskill (English proficiency)"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <Card className="shadow-elegant hover-scale">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-primary">
                  My Journey
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Computer Science graduate with hands-on experience in full-stack development using Java, Spring Boot, Servlets, JSP, and React.js. Skilled in building user-friendly applications with authentication, CRUD operations, and responsive UIs.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Certified in cloud computing and AI, with a strong foundation in Data Structures and SDLC practices. Passionate about clean coding, continuous learning, and effective teamwork.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Vijayawada, India</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="shadow-elegant hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-2xl font-semibold text-primary">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-6">
                      <h4 className="font-semibold text-lg text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{edu.period}</span>
                        <span className="font-semibold text-accent">{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="shadow-elegant hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-2xl font-semibold text-primary">
                    Certifications
                  </h3>
                </div>
                <div className="grid gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;