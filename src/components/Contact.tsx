
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      type: "Email",
      value: "admin@okidwiyulianto.com",
      icon: "✉️",
      action: () => window.open('mailto:admin@okidwiyulianto.com', '_blank')
    },
    {
      type: "WhatsApp", 
      value: "+62 858-4252-1521",
      icon: "📱",
      action: () => window.open('https://wa.me/6285842521521', '_blank')
    },
    {
      type: "GitHub",
      value: "github.com/okidwiyulianto",
      icon: "💻",
      action: () => window.open('https://github.com/okidwiyulianto', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 portfolio-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-portfolio-navy mb-4">Get In Touch</h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life 
            with innovative data solutions and technical expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-portfolio-blue"
                onClick={method.action}
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{method.icon}</div>
                  <CardTitle className="text-portfolio-navy">{method.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-portfolio-gray font-medium">{method.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-portfolio-navy mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're looking for data analysis, web development, AI/ML solutions, or automation services,
              I'm excited to discuss your project and explore how we can create impactful solutions.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                onClick={() => window.open('mailto:admin@okidwiyulianto.com', '_blank')}
                className="portfolio-yellow text-portfolio-navy hover:bg-opacity-90 transition-all duration-300 px-8 py-3"
              >
                Send Email
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/6285842521521', '_blank')}
                className="portfolio-orange text-white hover:bg-opacity-90 transition-all duration-300 px-8 py-3"
              >
                WhatsApp Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
