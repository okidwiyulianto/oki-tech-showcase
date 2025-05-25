import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lightbulb, Zap } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard built with Python and Power BI for financial data visualization and reporting with real-time insights.",
      technologies: ["Python", "Power BI", "Excel", "SQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      category: "Data Science",
      featured: true,
      metrics: { impact: "40% faster", users: "500+" }
    },
    {
      title: "Banking Automation System",
      description: "Automated workflow solution for administrative processes using Python scripting and data integration, reducing manual work by 60%.",
      technologies: ["Python", "Automation", "Data Processing", "APIs"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      category: "Automation",
      featured: true,
      metrics: { impact: "60% reduction", users: "200+" }
    },
    {
      title: "Financial Analytics Platform",
      description: "Full-stack web application for financial data analysis with real-time reporting capabilities and interactive visualizations.",
      technologies: ["JavaScript", "HTML/CSS", "Google Looker Studio", "React"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "FullStack",
      featured: false,
      metrics: { impact: "Real-time", users: "100+" }
    },
    {
      title: "Machine Learning Models",
      description: "Predictive models for credit risk assessment and customer behavior analysis in banking sector with 95% accuracy.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      category: "AI/ML",
      featured: false,
      metrics: { impact: "95% accuracy", users: "50+" }
    }
  ];

  const categoryColors = {
    "Data Science": "portfolio-blue",
    "Automation": "portfolio-orange", 
    "FullStack": "portfolio-yellow",
    "AI/ML": "bg-gradient-to-r from-portfolio-navy to-portfolio-blue"
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-portfolio-light via-white to-portfolio-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-navy/10 rounded-full border border-portfolio-navy/20 mb-6">
            <Lightbulb className="w-4 h-4 text-portfolio-orange" />
            <span className="text-sm font-medium text-portfolio-navy">My work showcase</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-navy to-portfolio-blue bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto leading-relaxed">
            Explore my diverse projects spanning data science, web development, automation, and AI/ML engineering.
            Each project represents a unique challenge solved with innovation and technical expertise.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-portfolio-navy mb-8 flex items-center gap-3">
            <Zap className="w-6 h-6 text-portfolio-orange" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-portfolio-blue/30">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${categoryColors[project.category]} text-white font-medium`}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-portfolio-orange text-white font-medium">
                      Featured
                    </Badge>
                  </div>
                  
                  {/* Hover overlay with metrics */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-white text-sm font-medium">{project.metrics.impact}</div>
                        <div className="text-white/80 text-xs">Impact</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-white text-sm font-medium">{project.metrics.users}</div>
                        <div className="text-white/80 text-xs">Users</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-portfolio-navy group-hover:text-portfolio-blue transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-portfolio-blue text-portfolio-navy hover:bg-portfolio-blue hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-portfolio-navy mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${categoryColors[project.category]} text-white`}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-portfolio-navy text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-portfolio-blue text-portfolio-navy"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-xs text-portfolio-gray">
                    <span>{project.metrics.impact}</span>
                    <span>{project.metrics.users} users</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-portfolio-navy to-portfolio-blue p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-semibold mb-4">Want to See More?</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Explore my complete collection of projects on GitHub, where you'll find detailed documentation, 
            source code, and live demos of my work.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => window.open('https://github.com/okidwiyulianto', '_blank')}
              className="bg-white text-portfolio-navy hover:bg-portfolio-yellow hover:text-portfolio-navy transition-all duration-300 px-8 py-3 text-lg font-semibold"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-portfolio-navy px-8 py-3 text-lg font-semibold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
