import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Brain } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-light via-white to-portfolio-blue/10"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-yellow/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-portfolio-orange/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-portfolio-blue/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-navy/10 rounded-full border border-portfolio-navy/20">
              <div className="w-2 h-2 bg-portfolio-orange rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-portfolio-navy">Available for new opportunities</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-portfolio-navy via-portfolio-blue to-portfolio-navy bg-clip-text text-transparent">
                  Tech Enthusiast
                </span>
                <br />
                <span className="text-portfolio-navy">Welcome! 👋 </span>
                <span className="bg-gradient-to-r from-portfolio-orange to-portfolio-yellow bg-clip-text text-transparent">
                  Lifelong Learner
                </span>
              </h1>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-3 py-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-portfolio-blue/20">
                  <Code className="w-4 h-4 text-portfolio-navy" />
                  <span className="text-sm font-medium text-portfolio-navy">FullStack Developer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-portfolio-blue/20">
                  <Database className="w-4 h-4 text-portfolio-navy" />
                  <span className="text-sm font-medium text-portfolio-navy">Data Scientist</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-portfolio-blue/20">
                  <Brain className="w-4 h-4 text-portfolio-navy" />
                  <span className="text-sm font-medium text-portfolio-navy">AI/ML Engineer</span>
                </div>
              </div>

              <p className="text-xl text-portfolio-gray leading-relaxed max-w-xl">
                Passionate about transforming ideas into digital solutions with expertise spanning 
                <span className="font-semibold text-portfolio-navy"> web development</span>, 
                <span className="font-semibold text-portfolio-navy"> data analysis</span>, 
                <span className="font-semibold text-portfolio-navy"> artificial intelligence</span>, and 
                <span className="font-semibold text-portfolio-navy"> business automation</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button onClick={() => scrollToSection('portfolio')} className="group bg-gradient-to-r from-portfolio-navy to-portfolio-blue hover:from-portfolio-blue hover:to-portfolio-navy text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-2 border-portfolio-navy text-portfolio-navy hover:bg-portfolio-navy hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Button>
            </div>

            {/* Stats or quick info */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-portfolio-blue/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-navy">5+</div>
                <div className="text-sm text-portfolio-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-navy">10+</div>
                <div className="text-sm text-portfolio-gray">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-navy">3</div>
                <div className="text-sm text-portfolio-gray">Core Services</div>
              </div>
            </div>
          </div>

          {/* Professional Image with modern styling */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-portfolio-yellow to-portfolio-orange rounded-3xl opacity-20 rotate-3"></div>
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-portfolio-blue to-portfolio-navy rounded-3xl opacity-20 rotate-1"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-portfolio-blue to-portfolio-navy p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <img src="https://i.postimg.cc/hGsVXFGH/okidwiyulianto.png" alt="Oki Dwi Yulianto" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Floating skill cards */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-lg p-3 border border-portfolio-blue/20 animate-pulse">
                <div className="text-xs font-semibold text-portfolio-navy">Python</div>
                <div className="text-xs text-portfolio-gray">Expert</div>
              </div>
              <div className="absolute -left-6 bottom-1/4 bg-white rounded-xl shadow-lg p-3 border border-portfolio-blue/20 animate-pulse delay-300">
                <div className="text-xs font-semibold text-portfolio-navy">JavaScript</div>
                <div className="text-xs text-portfolio-gray">Advanced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;