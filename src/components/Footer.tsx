import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-background py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-6">
              Always open to discussing new opportunities in data engineering and data analysis
            </p>
            
            {/* Contact buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('mailto:kartikeynegi2002@gmail.com')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://www.linkedin.com/in/kartikey-negi-51116a217/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://github.com/KarChikey420', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://x.com/KartikeyN86226', '_blank')}
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          {/* Contact info */}
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(+91) 7252911252</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kartikeynegi2002@gmail.com</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024 Kartikey Negi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;