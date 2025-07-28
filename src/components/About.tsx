
import { GraduationCap, Award, MapPin, ExternalLink } from "lucide-react";
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
    {
      name: "Salesforce Certified AI Associate",
      link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=Uigmnhp7OXZKVUihI4W95pbLlxeMcBB524ZPdxxxNXo0GxkVDZYg5iXIrWAIB/Ov"
    },
    {
      name: "Red Hat Certified Enterprise Application Developer (EX183)",
      link: "https://www.credly.com/badges/7a551a34-d1ce-42c1-a733-0a9ab84e9c99/public_url"
    },
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      link: "https://www.credly.com/badges/8013a1a7-149b-42ef-98ed-db4bdbc727f4/public_url"
    },
    {
      name: "ServiceNow Certified System Administrator (CSA)",
      link: "https://www.credly.com/badges/d27218b5-57d0-483c-bf92-975765f64310/public_url"
    },
    {
      name: "Automation Anywhere (RPA)",
      link: null
    },
    {
      name: "Aviatrix MultiCloud Networking Associate (ACE)",
      link: "https://www.credly.com/badges/0c012427-1230-4fbd-a939-7316a266dbf5/linked_in?t=smvbxf"
    },
    {
      name: "Linguaskill (English proficiency)",
      link: null
    }
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

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Bio */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant hover-scale h-full">
              <CardContent className="p-8 h-full flex flex-col">
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

          {/* Certifications - Middle */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant hover-scale h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-2xl font-semibold text-primary">
                    Certifications
                  </h3>
                </div>
                <div className="grid gap-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5 group-hover:bg-accent transition-smooth flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <span className="text-foreground font-medium text-sm leading-relaxed">
                          {cert.name}
                        </span>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center text-primary hover:text-accent transition-smooth"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education - Right */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant hover-scale h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-2xl font-semibold text-primary">
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                        <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-lg text-foreground mb-2 leading-tight">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium mb-2 text-sm">
                            {edu.institution}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <span className="text-muted-foreground text-sm">{edu.period}</span>
                            <span className="font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full text-sm w-fit">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Timeline connector line */}
                      {index < education.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-4 bg-primary/30"></div>
                      )}
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
