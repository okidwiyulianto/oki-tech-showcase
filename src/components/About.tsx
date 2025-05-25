
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Code, TrendingUp } from "lucide-react";

const About = () => {
  const experiences = [
    {
      company: "PT Bank Mandiri (Persero) Tbk",
      role: "Admin Cluster",
      period: "2010 - Present",
      description: "Managing administrative operations and developing automated solutions for banking processes.",
      type: "current"
    },
    {
      company: "PT Sumber Alfaria Trijaya",
      role: "Credit Services",
      period: "Previous Role",
      description: "Handled credit analysis and risk assessment using data-driven approaches.",
      type: "previous"
    },
    {
      company: "PT BPR Gunung Slamet Tbk",
      role: "Accounting",
      period: "Previous Role", 
      description: "Managed financial reporting and implemented automated accounting workflows.",
      type: "previous"
    },
    {
      company: "Micronet",
      role: "Billing",
      period: "Previous Role",
      description: "Developed billing systems and automated payment processing solutions.",
      type: "previous"
    }
  ];

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS"],
      icon: Code,
      color: "portfolio-blue"
    },
    {
      category: "Data & Analytics",
      skills: ["Python", "Microsoft Excel", "Google Spreadsheet", "Power BI"],
      icon: TrendingUp,
      color: "portfolio-orange"
    },
    {
      category: "Business Intelligence",
      skills: ["Google Looker Studio", "Data Analysis", "Machine Learning"],
      icon: GraduationCap,
      color: "portfolio-yellow"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-portfolio-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-navy/10 rounded-full border border-portfolio-navy/20 mb-6">
            <div className="w-2 h-2 bg-portfolio-orange rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-portfolio-navy">Get to know me</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-navy to-portfolio-blue bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-portfolio-gray max-w-3xl mx-auto leading-relaxed">
            A passionate technologist with a unique blend of business acumen and technical expertise,
            constantly evolving and learning in the dynamic world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Story */}
          <div className="space-y-8 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-portfolio-yellow/20 to-portfolio-orange/20 rounded-2xl rotate-2"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-portfolio-blue/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-portfolio-navy to-portfolio-blue rounded-xl">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-portfolio-navy">My Journey</h3>
                </div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    With a <span className="font-semibold text-portfolio-navy">Diploma in International Business and Accounting</span> from 
                    Jenderal Soedirman University (2006), I began my career in traditional business roles but discovered my true passion 
                    lies at the intersection of technology and problem-solving.
                  </p>
                  <p>
                    Over my <span className="font-semibold text-portfolio-orange">14+ year career</span> at PT Bank Mandiri and other organizations, 
                    I've witnessed firsthand how technology can transform business operations. This experience drives my commitment to 
                    continuous learning and innovation in FullStack development, Data Science, AI/ML, and automation.
                  </p>
                  <p>
                    Today, I bridge the gap between business needs and technical solutions, leveraging my diverse 
                    background to create meaningful impact through technology.
                  </p>
                </div>

                {/* Education Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-portfolio-light to-white rounded-xl border border-portfolio-blue/20">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-portfolio-navy" />
                    <div>
                      <div className="font-semibold text-portfolio-navy">International Business & Accounting</div>
                      <div className="text-sm text-portfolio-gray">Jenderal Soedirman University • 2006</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-portfolio-navy mb-8 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-portfolio-orange to-portfolio-yellow rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              Technical Expertise
            </h3>
            
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-portfolio-blue/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 ${category.color} rounded-lg`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-portfolio-navy">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-portfolio-light text-portfolio-navy hover:bg-portfolio-blue hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-portfolio-navy mb-4">Professional Experience</h3>
            <p className="text-portfolio-gray max-w-2xl mx-auto">
              A diverse career journey spanning multiple industries and roles, each contributing to my comprehensive skill set.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${exp.type === 'current' ? 'ring-2 ring-portfolio-orange ring-opacity-50' : ''}`}>
                <CardContent className="p-6 relative">
                  {exp.type === 'current' && (
                    <div className="absolute top-4 right-4">
                      <Badge className="portfolio-orange text-white">Current</Badge>
                    </div>
                  )}
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-portfolio-navy group-hover:text-portfolio-blue transition-colors">
                      {exp.role}
                    </h4>
                    <h5 className="text-portfolio-orange font-medium text-lg">{exp.company}</h5>
                    <p className="text-portfolio-gray text-sm font-medium">{exp.period}</p>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
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
