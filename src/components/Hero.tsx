import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-section-background to-background relative overflow-hidden pt-16">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary)_0%,_transparent_50%)] opacity-10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_transparent_70%)] opacity-5"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with enhanced animations */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Kartikey Negi
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up delay-300">
              Data Engineer & Data analyst
            </p>
          </div>

          {/* Enhanced Contact info */}
          <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up delay-500">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-foreground">
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+91) 7252911252</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <Mail className="w-4 h-4 text-primary" />
                <span>kartikeynegi2002@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Gurugram, India</span>
              </div>
            </div>
          </Card>

          {/* Enhanced Summary */}
          <div className="mb-8 max-w-3xl mx-auto animate-fade-in-up delay-700">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Results-oriented Data Engineer with expertise in building scalable data pipelines, real-time processing systems, and backend services using
              Python, Airflow, Kafka, and FastAPI. Skilled in ETL development, data modeling, and database management (PostgreSQL, MongoDB,
              PostGIS), with proficiency in analytics dashboards (Streamlit, Superset) and cloud-native workflows (GCP, AWS S3). Experienced in
              microservices, RESTful APIs, Redis, and distributed systems, with a proven track record of optimizing pipelines and improving reporting
              latency. Currently expanding into big data technologies including Apache Spark, Apache Hudi, and Trino.
            </p>
          </div>

          {/* Enhanced Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-1000">
            <Button 
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              onClick={() => window.open('https://www.linkedin.com/in/kartikey-negi-51116a217/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              onClick={() => window.open('https://github.com/KarChikey420', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              onClick={() => window.open('https://x.com/KartikeyN86226', '_blank')}
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              onClick={() => window.open('mailto:kartikeynegi2002@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;