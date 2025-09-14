import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, CalendarDays, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Graphic Era Hill University",
      location: "Bhimtal, India",
      year: "2025",
      cgpa: "8.4/10"
    },
    {
      degree: "Bachelor of Computer Application", 
      institution: "Graphic Era Hill University",
      location: "Bhimtal, India",
      year: "2023",
      cgpa: "8.2/10"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--accent)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-card hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-foreground flex items-start justify-between flex-wrap gap-4 group-hover:text-primary transition-colors duration-300">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-6 h-6 text-primary group-hover:animate-pulse-glow" />
                        <span>{edu.degree}</span>
                      </div>
                      <div className="text-base sm:text-lg font-medium text-primary mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
                          <CalendarDays className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-105">
                      <Award className="w-4 h-4 text-primary group-hover:animate-pulse-glow" />
                      <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;