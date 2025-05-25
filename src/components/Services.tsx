
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      icon: "📊"
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
      icon: "📈"
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
      icon: "🤖"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-portfolio-navy mb-4">My Services</h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
            Leverage my expertise to transform your data challenges into competitive advantages
            with comprehensive data solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-portfolio-blue">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-portfolio-navy text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-portfolio-orange mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center portfolio-light p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-portfolio-navy mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-portfolio-gray mb-6 max-w-2xl mx-auto">
            Whether you need help with data entry, analysis, or building advanced data science solutions,
            I'm here to help you achieve your goals with precision and expertise.
          </p>
          <div className="flex justify-center gap-4">
            <span className="portfolio-yellow text-portfolio-navy px-4 py-2 rounded-lg font-medium">
              Data Entry
            </span>
            <span className="portfolio-orange text-white px-4 py-2 rounded-lg font-medium">
              Data Analysis
            </span>
            <span className="portfolio-blue text-white px-4 py-2 rounded-lg font-medium">
              Data Science
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
