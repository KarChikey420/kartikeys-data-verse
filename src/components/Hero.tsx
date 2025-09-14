import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-section-background to-background relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary)_0%,_transparent_50%)] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kartikey Negi
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Data Engineer & Data analyst
            </p>
          </div>

          {/* Contact info */}
          <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+91) 7252911252</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>kartikeynegi2002@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Gurugram, India</span>
              </div>
            </div>
          </Card>

          {/* Summary */}
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Results-oriented Data Engineer with expertise in building scalable data pipelines, real-time processing systems, and backend services using
              Python, Airflow, Kafka, and FastAPI. Skilled in ETL development, data modeling, and database management (PostgreSQL, MongoDB,
              PostGIS), with proficiency in analytics dashboards (Streamlit, Superset) and cloud-native workflows (GCP, AWS S3). Experienced in
              microservices, RESTful APIs, Redis, and distributed systems, with a proven track record of optimizing pipelines and improving reporting
              latency. Currently expanding into big data technologies including Apache Spark, Apache Hudi, and Trino.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              onClick={() => window.open('https://www.linkedin.com/in/kartikey-negi-51116a217/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => window.open('https://github.com/KarChikey420', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => window.open('https://x.com/KartikeyN86226', '_blank')}
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10"
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