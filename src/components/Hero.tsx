
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center portfolio-light">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-portfolio-navy leading-tight">
              Tech Enthusiast & 
              <span className="text-portfolio-orange"> Lifelong Learner</span>
            </h1>
            <p className="text-xl text-portfolio-gray leading-relaxed">
              FullStack Developer | Data Scientist | AI/ML Engineer | Automation Specialist
            </p>
            <p className="text-lg text-gray-600 max-w-lg">
              Passionate about transforming ideas into digital solutions with expertise spanning 
              web development, data analysis, artificial intelligence, and business automation.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="portfolio-yellow text-portfolio-navy hover:bg-opacity-90 transition-all duration-300 px-8 py-3 text-lg font-semibold"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-portfolio-navy text-portfolio-navy hover:portfolio-navy hover:text-white transition-all duration-300 px-8 py-3 text-lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Professional Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full portfolio-blue flex items-center justify-center shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                alt="Oki Dwi Yulianto"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
