import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Layout, 
  Terminal,
  ChevronDown,
  Send,
  Menu,
  X
} from 'lucide-react';

// --- Data & Content ---

const PERSONAL_INFO = {
  name: "Dercio Maduna",
  role: "Senior Fullstack Web Developer",
  tagline: "Crafting Exceptional Digital Experiences with Liquid Precision.",
  bio: "I am a passionate frontend developer with a strong background in building exceptional web applications. With expertise in React.js, Next.js, and Node.js, I create user-friendly and visually appealing digital experiences. From comprehensive healthcare platforms to engaging student organization websites, I push the boundaries of what's possible in modern web development.",
  email: "12derciomaduna@gmail.com",
  phone: "067 755 1017",
  location: "Johannesburg, Gauteng",
  socials: {
    github: "https://github.com/derciomaduna",
    linkedin: "https://www.linkedin.com/in/dercio-maduna-b718501b6/",
    twitter: "https://twitter.com/derciomaduna"
  }
};

const EXPERIENCE = [
  {
    id: 1,
    role: "Senior FullStack Web Developer",
    company: "Atomus Dev / Self-Employed",
    period: "2023 - Present",
    description: "Designing and developing user-friendly web applications using modern frontend technologies such as React.js, Next.js, and Material-UI."
  },
  {
    id: 2,
    role: "Senior Web Developer",
    company: "Previous Tech Firm",
    period: "2022 - 2023",
    description: "Led frontend initiatives, mentored junior developers, and optimized high-traffic web applications for performance and SEO."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Tech Startup",
    period: "2021 - 2022",
    description: "Collaborated with cross-functional teams to deliver robust web solutions and maintain existing codebases."
  },
  {
    id: 4,
    role: "Web Developer Intern",
    company: "ActiveMI",
    period: "2020 - 2021",
    description: "Gained hands-on experience in full-stack development, assisting in the launch of client websites and internal tools."
  }
];

const PROJECTS = [
  {
    title: "Atomus Dev",
    category: "Enterprise Web",
    description: "Official website launch and promotion platform for Atomus Dev.",
    link: "https://www.atomusdev.co.za/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "React", "Tailwind"]
  },
  {
    title: "UFS Virtual Clinic",
    category: "Healthcare",
    description: "A comprehensive healthcare platform facilitating virtual consultations.",
    link: "https://ufs-clinic-web.vercel.app/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Healthcare"]
  },
  {
    title: "Misguided Entertainment",
    category: "Media",
    description: "Interactive website for an entertainment and event planning company.",
    link: "https://misguidedsa.co.za/",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    tags: ["UI/UX", "Animation", "React"]
  },
  {
    title: "ITSA Web",
    category: "Organization",
    description: "Web platform for the Information Technology Student Association.",
    link: "https://itsa-web.vercel.app/",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    tags: ["Community", "Web", "React"]
  },
  {
    title: "AirBuzz GP",
    category: "E-Commerce",
    description: "Tobacco and THC disposable products showcase and catalog.",
    link: "https://airbuzz-gp.vercel.app/",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=800",
    tags: ["E-commerce", "Catalog", "Next.js"]
  },
  {
    title: "T and L Upholstery",
    category: "Business",
    description: "Professional business portfolio for a custom upholstery service.",
    link: "https://tlupholstery.co.za/",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    tags: ["Business", "Portfolio", "Design"]
  }
];

const SKILLS = [
  { name: "React & Native", icon: <Code2 size={20} /> },
  { name: "Next.js", icon: <Terminal size={20} /> },
  { name: "Node.js", icon: <Database size={20} /> },
  { name: "AWS / Cloud", icon: <Cloud size={20} /> },
  { name: "UI/UX Design", icon: <Layout size={20} /> },
  { name: "TypeScript", icon: <Code2 size={20} /> },
  { name: "PostgreSQL", icon: <Database size={20} /> },
  { name: "CI/CD", icon: <Terminal size={20} /> },
];

// --- Components ---

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
    <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-gray-300 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter">
          DM<span className="text-purple-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-white hover:text-purple-400 transition-colors text-sm font-medium tracking-wide"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 p-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-purple-400 text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Animated Background Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium">
        Available for Freelance & Full-time
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
        {PERSONAL_INFO.name}
      </h1>
      <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light max-w-3xl mx-auto">
        {PERSONAL_INFO.role}
      </p>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        {PERSONAL_INFO.tagline}
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href="#projects" 
          className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          View My Work
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-md"
        >
          Contact Me
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <SectionTitle title="About Me" />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          {/* Abstract Image Composition */}
          <div className="aspect-square rounded-2xl overflow-hidden relative z-10 border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" 
              alt="Coding Setup" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-xl">Based in Gauteng</p>
              <p className="text-gray-300">Open to Remote Work</p>
            </div>
          </div>
          <div className="absolute top-4 -right-4 w-full h-full border-2 border-white/20 rounded-2xl -z-10"></div>
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>{PERSONAL_INFO.bio}</p>
          <p>
            My journey in tech has been driven by a relentless curiosity and a commitment to excellence. 
            Whether it's architecting complex backend systems or polishing the finest frontend details, 
            I bring a holistic approach to every project.
          </p>
          
          <div className="pt-6 grid grid-cols-2 gap-4">
             <GlassCard className="p-4 text-center hover:bg-white/15 transition-colors">
               <h3 className="text-3xl font-bold text-purple-400 mb-1">4+</h3>
               <p className="text-sm text-gray-400">Years Experience</p>
             </GlassCard>
             <GlassCard className="p-4 text-center hover:bg-white/15 transition-colors">
               <h3 className="text-3xl font-bold text-blue-400 mb-1">20+</h3>
               <p className="text-sm text-gray-400">Projects Completed</p>
             </GlassCard>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-black/20">
    <div className="container mx-auto px-6">
      <SectionTitle title="Technical Arsenal" subtitle="The tools I use to bring ideas to life." />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <GlassCard key={index} className="p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 group cursor-default">
            <div className="p-4 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors text-purple-300">
              {skill.icon}
            </div>
            <h3 className="text-white font-medium tracking-wide">{skill.name}</h3>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <SectionTitle title="Featured Projects" subtitle="A selection of my most passionate work." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <GlassCard key={index} className="overflow-hidden group h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors block"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs font-bold text-purple-400 mb-2 tracking-wider uppercase">{project.category}</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 relative overflow-hidden">
    <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle title="Professional Journey" />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent hidden md:block"></div>
        
        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'} md:gap-12 items-center md:items-start`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black transform -translate-x-2 mt-1.5 hidden md:block shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <GlassCard className="p-6 hover:border-purple-500/50 transition-colors duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-3">
                    {job.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                  <h4 className="text-lg text-gray-400 mb-4">{job.company}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <SectionTitle title="Get In Touch" subtitle="Let's discuss your next project or collaboration." />
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <GlassCard className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                <Mail size={20} className="text-purple-400" />
              </div>
              <span className="text-lg">{PERSONAL_INFO.email}</span>
            </a>
            
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                <Phone size={20} className="text-purple-400" />
              </div>
              <span className="text-lg">{PERSONAL_INFO.phone}</span>
            </a>
            
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                <MapPin size={20} className="text-purple-400" />
              </div>
              <span className="text-lg">{PERSONAL_INFO.location}</span>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: PERSONAL_INFO.socials.github },
                  { icon: <Linkedin size={20} />, href: PERSONAL_INFO.socials.linkedin },
                  { icon: <Twitter size={20} />, href: PERSONAL_INFO.socials.twitter }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    className="p-3 bg-white/5 rounded-full text-gray-300 hover:bg-white hover:text-black transition-all transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
        
        <GlassCard className="p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                placeholder="Project Collaboration"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Message</label>
              <textarea 
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-bold hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t border-white/10 bg-black/40 backdrop-blur-lg text-center">
    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Tailwind & Liquid Glass.
    </p>
  </footer>
);

// --- Main App Component ---

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500 selection:text-white font-sans">
      {/* Global Animated Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.2),_transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;