import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "Java", "C"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Pandas", "NumPy", "Streamlit", "FastAPI", "Flask", "Matplotlib", "Seaborn", "LangChain"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "MS SQL", "SQLite", "Geospatial DB"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Docker", "VS Code", "Apache Airflow", "Kafka", "CronTab", "Dialogflow", "Apache Superset"]
    },
    {
      title: "Concepts",
      skills: ["Data Warehousing", "Data Modeling", "DBMS", "Data Structures & Algorithms", "OOP"]
    }
  ];

  return (
    <section className="py-20 bg-section-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-foreground flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse-glow"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;