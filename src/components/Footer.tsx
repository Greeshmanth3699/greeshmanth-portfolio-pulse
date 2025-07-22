import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-display font-bold text-3xl mb-4">
              Arvapalli Greeshmanth
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md mx-auto">
              Full-Stack Developer passionate about creating innovative web solutions 
              and delivering exceptional user experiences.
            </p>
            <div className="border-t border-secondary-foreground/20 pt-6">
              <p className="text-secondary-foreground/60">
                © 2024 Arvapalli Greeshmanth. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-glow hover-scale z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default Footer;