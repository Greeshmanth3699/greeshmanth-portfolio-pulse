import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/greeshmanth-profile-new.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center glass-effect animate-pulse">
        <Github className="w-8 h-8 text-white" />
      </div>
      <div className="absolute top-40 right-40 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center glass-effect animate-pulse">
        <Linkedin className="w-6 h-6 text-white" />
      </div>
      <div className="absolute bottom-40 right-20 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center glass-effect animate-pulse">
        <Mail className="w-7 h-7 text-white" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-accent">Arvapalli</span><br />
              <span className="text-accent">Greeshmanth</span><br />
              Full-Stack Developer
            </h1>
            <div className="relative">
              <div className="absolute -bottom-2 left-0 w-48 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-xl mb-8 text-white/90 leading-relaxed mt-8">
              Full-Stack Developer | Certified Cloud & AI Professional
            </p>
            <p className="text-lg mb-8 text-white/80 leading-relaxed max-w-lg">
              Computer Science graduate with hands-on experience in full-stack development using Java, Spring Boot, and React.js. Building secure, responsive web applications with a passion for clean code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg hover-scale"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg hover-scale"
                onClick={() => window.open('https://drive.google.com/file/d/1klQQdET4Rlv7rppofQoqH5jf7RkDt7wd/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image & Card */}
          <div className="relative">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Arvapalli Greeshmanth"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-8 border-white/20 shadow-glow hover-scale"
              />
              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;