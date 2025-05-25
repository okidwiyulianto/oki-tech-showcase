
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard built with Python and Power BI for financial data visualization and reporting.",
      technologies: ["Python", "Power BI", "Excel"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      category: "Data Science"
    },
    {
      title: "Banking Automation System",
      description: "Automated workflow solution for administrative processes using Python scripting and data integration.",
      technologies: ["Python", "Automation", "Data Processing"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      category: "Automation"
    },
    {
      title: "Financial Analytics Platform",
      description: "Full-stack web application for financial data analysis with real-time reporting capabilities.",
      technologies: ["JavaScript", "HTML/CSS", "Google Looker Studio"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "FullStack"
    },
    {
      title: "Machine Learning Models",
      description: "Predictive models for credit risk assessment and customer behavior analysis in banking sector.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      category: "AI/ML"
    }
  ];

  return (
    <section id="portfolio" className="py-20 portfolio-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-portfolio-navy mb-4">My Portfolio</h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
            Explore my diverse projects spanning data science, web development, automation, and AI/ML engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="portfolio-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-portfolio-navy">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="portfolio-blue text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.open('https://github.com/okidwiyulianto', '_blank')}
            className="portfolio-navy text-white hover:bg-opacity-90 transition-all duration-300 px-8 py-3 text-lg"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
