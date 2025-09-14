import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TrustTrace Flow",
      technologies: ["FastAPI", "DuckDB", "ChromaDB", "SentenceTransformers", "Streamlit"],
      description: "Developed an ingestion and traceability pipeline for 25K+ patent records with SHA256 fingerprinting, dual storage in DuckDB, and semantic search using vector embeddings in ChromaDB. Exposed REST APIs with FastAPI and built a Streamlit dashboard for interactive search and API validation.",
      githubUrl: "https://github.com/KarChikey420/TrustTrace_flow",
      demoUrl: null
    },
    {
      title: "BankPulse",
      technologies: ["AWS S3", "Python", "PostgreSQL", "Pandas", "Boto3"],
      description: "Designed a real-time banking transaction monitoring system simulating 10K+ transactions/sec. Built ingestion and detection mechanisms in Python, leveraged PostgreSQL for state management and deduplication, and implemented custom detection patterns (UPGRADE, CHILD, DEI). Batched results were written back to S3 for downstream analytics.",
      githubUrl: "https://github.com/KarChikey420/Bank_pluse",
      demoUrl: null
    },
    {
      title: "CSV EDA Agent",
      technologies: ["Streamlit", "LangChain", "Google Gemini", "Pandas", "Python"],
      description: "Developed an intelligent CSV data analysis tool using Streamlit and LangChain integration with Google Gemini 1.5 model. Built a user-friendly interface for uploading CSV files and performing natural language queries on datasets. Implemented pandas dataframe agent for intelligent data querying and visualization capabilities. Features include data preview, statistical analysis, and interactive Q&A interface for exploratory data analysis.",
      githubUrl: "https://github.com/KarChikey420/csv_agent",
      demoUrl: null
    }
  ];

  return (
    <section className="py-20 bg-section-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_transparent_70%)] opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Personal projects showcasing my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-foreground flex items-center justify-between group-hover:text-primary transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse-glow"></div>
                    <span>{project.title}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10 p-2 hover:scale-110 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    {project.demoUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:bg-primary/10 p-2 hover:scale-110 transition-all duration-300"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 hover:shadow-md"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;