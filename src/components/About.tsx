
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      company: "PT Bank Mandiri (Persero) Tbk",
      role: "Admin Cluster",
      period: "2010 - Present",
      description: "Managing administrative operations and developing automated solutions for banking processes."
    },
    {
      company: "PT Sumber Alfaria Trijaya",
      role: "Credit Services",
      period: "Previous Role",
      description: "Handled credit analysis and risk assessment using data-driven approaches."
    },
    {
      company: "PT BPR Gunung Slamet Tbk",
      role: "Accounting",
      period: "Previous Role", 
      description: "Managed financial reporting and implemented automated accounting workflows."
    },
    {
      company: "Micronet",
      role: "Billing",
      period: "Previous Role",
      description: "Developed billing systems and automated payment processing solutions."
    }
  ];

  const skills = [
    "HTML & CSS", "JavaScript", "Python", "Microsoft Excel", 
    "Google Spreadsheet", "Microsoft Power BI", "Google Looker Studio",
    "Data Analysis", "Machine Learning", "Automation Engineering"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-portfolio-navy mb-4">About Me</h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
            A passionate technologist with a unique blend of business acumen and technical expertise,
            constantly evolving and learning in the dynamic world of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-navy">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With a Diploma in International Business and Accounting from Jenderal Soedirman University (2006),
              I began my career in traditional business roles but discovered my true passion lies at the 
              intersection of technology and problem-solving.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over my 14+ year career at PT Bank Mandiri and other organizations, I've witnessed firsthand 
              how technology can transform business operations. This experience drives my commitment to 
              continuous learning and innovation in FullStack development, Data Science, AI/ML, and automation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, I bridge the gap between business needs and technical solutions, leveraging my diverse 
              background to create meaningful impact through technology.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-navy mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="portfolio-light p-3 rounded-lg text-center text-portfolio-navy font-medium hover:portfolio-blue hover:text-white transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-semibold text-portfolio-navy mb-8 text-center">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-portfolio-navy mb-2">{exp.role}</h4>
                  <h5 className="text-portfolio-orange font-medium mb-2">{exp.company}</h5>
                  <p className="text-portfolio-gray text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
