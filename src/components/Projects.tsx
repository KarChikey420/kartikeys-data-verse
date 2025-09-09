import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TrustTrace Flow",
      technologies: ["FastAPI", "DuckDB", "ChromaDB", "SentenceTransformers", "Streamlit"],
      description: "Developed an ingestion and traceability pipeline for 25K+ patent records with SHA256 fingerprinting, dual storage (raw + cleaned) in DuckDB, and semantic search using vector embeddings in ChromaDB. Exposed REST APIs with FastAPI and built a Streamlit dashboard for interactive search and API validation.",
      githubUrl: "https://github.com/KarChikey420/TrustTrace_flow",
      demoUrl: null
    },
    {
      title: "BankPulse",
      technologies: ["AWS S3", "Python", "PostgreSQL", "Pandas", "Boto3"],
      description: "Designed a real-time banking transaction monitoring system simulating 10K+ transactions/sec. Built ingestion (S3 uploader) and detection (S3 listener) mechanisms in Python, leveraged PostgreSQL for intermediate state management and deduplication, and implemented custom detection patterns (UPGRADE, CHILD, DEI). Batched results were written back to S3 for downstream analytics.",
      githubUrl: "https://github.com/KarChikey420/Bank_pluse",
      demoUrl: null
    }
  ];

  return (
    <section className="py-20 bg-section-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Personal projects showcasing my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card hover:bg-card-hover transition-all duration-300 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>{project.title}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10 p-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    {project.demoUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:bg-primary/10 p-2"
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
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10"
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