import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Yatra Online Ltd.",
      location: "Gurugram",
      period: "Feb 2025 – Sep 2025",
      description: [
        "Developed and maintained multiple data systems including hotel ranking, dynamic pricing, and customer analytics platforms",
        "Designed ETL pipelines using Python, Airflow, and SQL for processing large-scale travel data", 
        "Collaborated with cross-functional teams to implement data-driven solutions improving business metrics"
      ]
    }
  ];

  const projects = [
    {
      title: "Hotel Ranking System",
      company: "Yatra Online Ltd.",
      technologies: ["Flask", "PostgreSQL", "Streamlit", "PostGIS"],
      description: [
        "Architected hotel scoring system across multiple dimensions including location, pricing, and amenities",
        "Integrated geospatial databases with PostgreSQL for precise proximity-based metrics",
        "Built ETL pipeline for data transformation and Streamlit dashboard for analytics visualization"
      ]
    },
    {
      title: "Yatra Travel Chatbot",
      company: "Yatra Online Ltd.",
      technologies: ["FastAPI", "Redis", "Dialogflow", "Streamlit"],
      description: [
        "Engineered intelligent chatbot handling complex flight and hotel queries using Dialogflow",
        "Implemented backend webhook services with FastAPI and Redis for session storage",
        "Developed Streamlit frontend and configured Dialogflow fulfillment mechanisms"
      ]
    },
    {
      title: "Hotel DDS (Dynamic Discount System)",
      company: "Yatra Online Ltd.",
      technologies: ["Flask", "MongoDB", "Pandas"],
      description: [
        "Developed REST API ecosystem for dynamic hotel discounts using intelligent algorithms",
        "Implemented conditional discounts based on categorization, booking patterns, and availability",
        "Integrated with MongoDB databases and utilized Pandas for data transformation"
      ]
    },
    {
      title: "CRR Dashboard",
      company: "Yatra Online Ltd.",
      technologies: ["Python", "Streamlit", "Pandas", "Requests", "APIs", "CSV"],
      description: [
        "Developed an ETL pipeline in Python to fetch and normalize hotel pricing data from multiple APIs (EYC, PWC, CIPLA)",
        "Benchmarked pricing data against competitor travel agencies",
        "Built a secure Streamlit dashboard with LDAP-based login for role-based access and downloadable reports"
      ]
    },
    {
      title: "YSF Email Automation System",
      company: "Yatra Online Ltd.",
      technologies: ["Python", "Pandas", "SMTP"],
      description: [
        "Automated partner-specific fare communication with custom filtering capabilities",
        "Integrated multiple data sources with HTML email templates",
        "Implemented scheduling through cron jobs with logging and error handling"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            My journey in data engineering and analytics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Work Experience</h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="mb-6 bg-card hover:bg-card-hover transition-colors duration-300 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <span>{exp.title}</span>
                      </div>
                      <div className="text-lg font-medium text-primary">{exp.company}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Project Experience</h3>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card hover:bg-card-hover transition-colors duration-300 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span>{project.title}</span>
                        </div>
                        <div className="text-sm font-medium text-primary">{project.company}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-primary/30 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {project.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;