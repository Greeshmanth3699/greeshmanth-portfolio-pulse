import { Code2, Shield, Smartphone, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern technologies like React.js, Spring Boot, and comprehensive backend solutions.",
      features: ["Responsive Design", "RESTful APIs", "Database Integration", "User Authentication"]
    },
    {
      icon: Shield,
      title: "Secure Application Development",
      description: "Building robust and secure applications with proper authentication, authorization, and data protection mechanisms.",
      features: ["JWT Authentication", "Data Encryption", "Security Best Practices", "HTTPS Implementation"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Creating responsive web applications that work seamlessly across all devices and screen sizes.",
      features: ["Responsive Design", "Progressive Web Apps", "Cross-Platform Compatibility", "Performance Optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Leveraging cloud platforms for scalable and reliable application deployment and management.",
      features: ["AWS Services", "Cloud Deployment", "Scalable Architecture", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Comprehensive software development services focusing on scalable, secure web applications and modern technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover-scale group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;