
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Brain, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Data Entry",
      description: "Accurate and efficient data entry services with attention to detail and quality assurance. Expertise in various data formats and systems.",
      features: [
        "High-accuracy data processing",
        "Multiple format support (Excel, CSV, databases)",
        "Quality control and validation",
        "Fast turnaround times"
      ],
      icon: Database,
      color: "portfolio-blue",
      price: "Starting at $10/hour",
      popular: false
    },
    {
      title: "Data Analysis", 
      description: "Transform your raw data into actionable insights using advanced analytical techniques and visualization tools.",
      features: [
        "Statistical analysis and reporting",
        "Data visualization with Power BI & Looker Studio",
        "Trend identification and forecasting",
        "Custom dashboard development"
      ],
      icon: BarChart3,
      color: "portfolio-orange",
      price: "Starting at $25/hour",
      popular: true
    },
    {
      title: "Data Science",
      description: "End-to-end data science solutions including machine learning, predictive modeling, and AI-driven insights for business growth.",
      features: [
        "Machine Learning model development",
        "Predictive analytics and forecasting",
        "AI-powered automation solutions",
        "Custom algorithm development"
      ],
      icon: Brain,
      color: "portfolio-navy",
      price: "Starting at $50/hour",
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-portfolio-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-navy/10 rounded-full border border-portfolio-navy/20 mb-6">
            <Sparkles className="w-4 h-4 text-portfolio-orange" />
            <span className="text-sm font-medium text-portfolio-navy">What I offer</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-navy to-portfolio-blue bg-clip-text text-transparent mb-6">
            My Services
          </h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto leading-relaxed">
            Leverage my expertise to transform your data challenges into competitive advantages
            with comprehensive data solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-portfolio-blue/30 ${service.popular ? 'ring-2 ring-portfolio-orange ring-opacity-50 scale-105' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="portfolio-orange text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 relative">
                <div className={`mx-auto w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-portfolio-navy text-2xl mb-2">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-portfolio-orange mb-2">{service.price}</div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-portfolio-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${service.color} text-white hover:bg-opacity-90 transition-all duration-300 py-3 text-lg font-semibold group-hover:scale-105`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-portfolio-yellow/20 to-portfolio-orange/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-portfolio-navy to-portfolio-blue rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My Process</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results for every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and objectives" },
              { step: "02", title: "Strategy", desc: "Developing the optimal approach" },
              { step: "03", title: "Execution", desc: "Implementing solutions with precision" },
              { step: "04", title: "Delivery", desc: "Providing results and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center portfolio-light p-8 md:p-12 rounded-2xl border border-portfolio-blue/20">
          <h3 className="text-3xl font-semibold text-portfolio-navy mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-portfolio-gray mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you need help with data entry, analysis, or building advanced data science solutions,
            I'm here to help you achieve your goals with precision and expertise.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <Badge className="portfolio-yellow text-portfolio-navy px-4 py-2 text-sm font-medium">
              Data Entry
            </Badge>
            <Badge className="portfolio-orange text-white px-4 py-2 text-sm font-medium">
              Data Analysis
            </Badge>
            <Badge className="portfolio-blue text-white px-4 py-2 text-sm font-medium">
              Data Science
            </Badge>
          </div>
          <Button 
            onClick={scrollToContact}
            className="portfolio-navy text-white hover:bg-opacity-90 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
