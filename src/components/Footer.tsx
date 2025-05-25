
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Oki Dwi Yulianto</h3>
            <p className="text-portfolio-blue">
              Tech Enthusiast & Lifelong Learner specializing in FullStack Development, 
              Data Science, AI/ML, and Automation Engineering.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-portfolio-blue">
              <li>Data Entry</li>
              <li>Data Analysis</li>
              <li>Data Science</li>
              <li>Web Development</li>
              <li>Automation Solutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-portfolio-blue">
              <p>admin@okidwiyulianto.com</p>
              <p>+62 858-4252-1521</p>
              <p>GitHub: okidwiyulianto</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-portfolio-blue pt-8 text-center">
          <p className="text-portfolio-blue">
            © {currentYear} Oki Dwi Yulianto. All rights reserved. Built with passion for technology and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
