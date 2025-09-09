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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-card hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <span>{edu.degree}</span>
                      </div>
                      <div className="text-lg font-medium text-primary mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg">
                      <Award className="w-4 h-4 text-primary" />
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