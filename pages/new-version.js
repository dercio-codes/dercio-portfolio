import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  TextField,
  InputLabel,
  FormControl,
  TextareaAutosize,
  Link as MuiLink,
  Divider,
  useScrollTrigger,
  Slide,
  Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

// Helper for animated hide/show NavBar on scroll (optional)
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <Toolbar>
            <Typography variant="h6" component="a" href="#" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
              DM<span style={{ color: '#a05fff' }}>.</span>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  href={link.href}
                  sx={{ color: 'lightgray', fontWeight: 600, mx: 1 }}
                >
                  {link.name.toUpperCase()}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ color: 'white' }}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {isOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: '64px',
            width: '100%',
            bgcolor: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(12px)',
            zIndex: 1200,
            py: 2,
          }}
        >
          <Grid container direction="column" alignItems="center" spacing={2}>
            {navLinks.map((link) => (
              <Grid item key={link.name}>
                <Button
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  sx={{ color: 'lightgray', fontSize: '1.2rem', fontWeight: 600 }}
                >
                  {link.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

const Hero = () => (
  <Box
    component="section"
    sx={{
      minHeight: '100vh',
      pt: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      bgcolor: '#0a0a0a',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: 500,
        height: 500,
        bgcolor: 'purple',
        opacity: 0.3,
        borderRadius: '50%',
        filter: 'blur(120px)',
        animation: 'pulse 3s infinite',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: 500,
        height: 500,
        bgcolor: 'blue',
        opacity: 0.3,
        borderRadius: '50%',
        filter: 'blur(120px)',
        animation: 'pulse 3s infinite 1s',
      }}
    />
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
      <Box
        sx={{
          display: 'inline-block',
          mb: 2,
          px: 2,
          py: 0.5,
          bgcolor: 'rgba(255 255 255 / 0.05)',
          borderRadius: '9999px',
          border: '1px solid rgba(255 255 255 / 0.1)',
          color: 'purple',
          fontWeight: 500,
          fontSize: '0.8rem',
          userSelect: 'none',
        }}
      >
        Available for Freelance & Full-time
      </Box>
      <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2, color: 'white', lineHeight: 1 }}>
        {PERSONAL_INFO.name}
      </Typography>
      <Typography variant="h4" sx={{ color: 'gray', fontWeight: 300, mb: 3 }}>
        {PERSONAL_INFO.role}
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray', mb: 6, maxWidth: 700, mx: 'auto' }}>
        {PERSONAL_INFO.tagline}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
        <Button
          href="#projects"
          variant="contained"
          sx={{ px: 5, py: 1.5, fontWeight: 'bold', bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#ddd' } }}
        >
          View My Work
        </Button>
        <Button
          href="#contact"
          variant="outlined"
          sx={{ px: 5, py: 1.5, borderColor: 'rgba(255 255 255 / 0.15)', color: 'white', '&:hover': { bgcolor: 'rgba(255 255 255 / 0.15)' } }}
        >
          Contact Me
        </Button>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255 255 255 / 0.5)', animation: 'bounce 2s infinite' }}>
        <ChevronDown size={32} />
      </Box>
    </Container>
  </Box>
);

const About = () => (
  <Box component="section" id="about" sx={{ py: 12 }}>
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold', color: 'white' }}>
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item size={{xs:12,md:6}} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
            alt="Coding Setup"
            sx={{
              width: '100%',
              borderRadius: 2,
              opacity: 0.8,
              transition: 'opacity 0.7s',
              '&:hover': { opacity: 1 },
              position: 'relative',
              zIndex: 10,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              borderRadius: 2,
              zIndex: 5,
            }}
          />
          <Box sx={{ position: 'absolute', bottom: 24, left: 24, color: 'white', zIndex: 20 }}>
            <Typography variant="h6" fontWeight="bold">
              Based in Gauteng
            </Typography>
            <Typography variant="body2" color="grey.400">
              Open to Remote Work
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: '100%',
              height: '100%',
              border: '2px solid rgba(255 255 255 / 0.125)',
              borderRadius: 2,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        </Grid>
        <Grid item size={{xs:12,md:6}} sx={{ color: 'grey.300', fontSize: '1.15rem', lineHeight: 1.7 }}>
          <Typography paragraph>{PERSONAL_INFO.bio}</Typography>
          <Typography paragraph>
            My journey in tech has been driven by a relentless curiosity and a commitment to excellence.
            Whether it's architecting complex backend systems or polishing the finest frontend details,
            I bring a holistic approach to every project.
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{xs:6}}>
              <Paper sx={{ backgroundColor: 'rgba(255 255 255 / 0.1)', p: 2, textAlign: 'center', borderRadius: 2, cursor: 'default', '&:hover': { backgroundColor: 'rgba(255 255 255 / 0.15)' } }}>
                <Typography variant="h4" color="purple" fontWeight="bold">4+</Typography>
                <Typography variant="caption" color="grey.400">
                  Years Experience
                </Typography>
              </Paper>
            </Grid>
            <Grid item size={{xs:6}}>
              <Paper sx={{ backgroundColor: 'rgba(255 255 255 / 0.1)', p: 2, textAlign: 'center', borderRadius: 2, cursor: 'default', '&:hover': { backgroundColor: 'rgba(255 255 255 / 0.15)' } }}>
                <Typography variant="h4" color="blue" fontWeight="bold">20+</Typography>
                <Typography variant="caption" color="grey.400">
                  Projects Completed
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Skills = () => (
  <Box component="section" id="skills" sx={{ py: 10, bgcolor: 'rgba(0,0,0,0.2)' }}>
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'white' }}>
        Technical Arsenal
      </Typography>
      <Typography align="center" sx={{ mb: 8, color: 'grey.400' }}>
        The tools I use to bring ideas to life.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {SKILLS.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                cursor: 'default',
                backgroundColor: 'rgba(255 255 255 / 0.1)',
                borderRadius: 3,
                '&:hover': {
                  bgcolor: 'rgba(165 95 255 / 0.3)',
                  transform: 'translateY(-8px)',
                  transition: 'all 0.3s ease',
                },
                transition: 'all 0.3s ease',
              }}
              elevation={0}
            >
              <Box sx={{ color: 'purple', mb: 1 }}>{skill.icon}</Box>
              <Typography color="white" fontWeight="medium" variant="subtitle1">
                {skill.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

const Projects = () => (
  <Box component="section" id="projects" sx={{ py: 12 }}>
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold', color: 'white' }}>
        Featured Projects
      </Typography>
      <Typography align="center" sx={{ mb: 8, color: 'grey.400' }}>
        A selection of my most passionate work.
      </Typography>
      <Grid container spacing={4}>
        {PROJECTS.map((project, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Card
              sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(255 255 255 / 0.05)' }}
              elevation={8}
            >
              <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'rgba(0,0,0,0.5)',
                    borderRadius: '50%',
                    p: 1,
                  }}
                >
                  <MuiLink
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    aria-label={`${project.title} External Link`}
                  >
                    <ExternalLink size={18} />
                  </MuiLink>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="caption" color="purple" fontWeight="bold" sx={{ mb: 1, display: 'block', letterSpacing: 1 }}>
                  {project.category.toUpperCase()}
                </Typography>
                <Typography variant="h5" component="h3" color="white" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="grey.400" sx={{ mb: 2, minHeight: 60 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tags.map((tag, i) => (
                    <Box
                      key={i}
                      sx={{
                        bgcolor: 'rgba(255 255 255 / 0.1)',
                        color: 'grey.300',
                        px: 2,
                        py: 0.5,
                        borderRadius: 10,
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255 255 255 / 0.1)',
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

const Experience = () => (
  <Box component="section" id="experience" sx={{ py: 12, position: 'relative', overflow: 'hidden' }}>
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        top: '33%',
        width: 384,
        height: 384,
        bgcolor: 'rgba(0,0,255,0.1)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        zIndex: 0,
      }}
    />
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold', color: 'white' }}>
        Professional Journey
      </Typography>
      <Box sx={{ position: 'relative' }}>
        {/* Vertical Line */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, #a05fff, transparent)',
            transform: 'translateX(-50%)',
          }}
        />
        <Grid container spacing={6} direction="column">
          {EXPERIENCE.map((job, index) => {
            const isLeft = index % 2 === 0;
            return (
              <Grid
                item
                container
                key={job.id}
                justifyContent="center"
                sx={{ position: 'relative' }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 16, md: 'calc(50% - 8px)' },
                    top: 22,
                    width: 16,
                    height: 16,
                    bgcolor: 'purple',
                    borderRadius: '50%',
                    border: '4px solid black',
                    boxShadow: '0 0 10px rgba(168,85,247,0.8)',
                    zIndex: 20,
                  }}
                />
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    textAlign: { xs: 'left', md: isLeft ? 'right' : 'left' },
                    pr: isLeft ? 4 : 0,
                    pl: isLeft ? 0 : 4,
                    zIndex: 10,
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      bgcolor: 'rgba(255 255 255 / 0.05)',
                      borderRadius: 2,
                      border: '1px solid rgba(165 95 255 / 0.3)',
                      '&:hover': { borderColor: 'rgba(165 95 255 / 0.5)' },
                      transition: 'border-color 0.3s ease',
                      display: 'inline-block',
                    }}
                  >
                    <Typography variant="caption" color="purple" fontWeight="bold" sx={{ mb: 1, display: 'inline-block' }}>
                      {job.period}
                    </Typography>
                    <Typography variant="h6" color="white" fontWeight="bold" sx={{ mb: 0.5 }}>
                      {job.role}
                    </Typography>
                    <Typography variant="subtitle1" color="grey.400" sx={{ mb: 2 }}>
                      {job.company}
                    </Typography>
                    <Typography variant="body2" color="grey.300" sx={{ lineHeight: 1.5 }}>
                      {job.description}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  </Box>
);

const Contact = () => (
  <Box component="section" id="contact" sx={{ py: 12 }}>
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold', color: 'white' }}>
        Get In Touch
      </Typography>
      <Typography align="center" sx={{ mb: 8, color: 'grey.400' }}>
        Let's discuss your next project or collaboration.
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        <Grid item size={{xs:12,md:5}}>
          <Paper elevation={5} sx={{ p: 4, bgcolor: 'rgba(255 255 255 / 0.05)', borderRadius: 3 }}>
            <Typography variant="h5" color="white" gutterBottom fontWeight="bold">
              Contact Information
            </Typography>
            <Box component="a" href={`mailto:${PERSONAL_INFO.email}`} sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1.5, textDecoration: 'none', color: 'grey.300', '&:hover': { color: 'white' } }}>
              <Box sx={{ p: 1.5, bgcolor: 'rgba(255 255 255 / 0.1)', borderRadius: '50%', color: 'purple' }}>
                <Mail size={20} />
              </Box>
              <Typography variant="body1">{PERSONAL_INFO.email}</Typography>
            </Box>
            <Box component="a" href={`tel:${PERSONAL_INFO.phone}`} sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1.5, textDecoration: 'none', color: 'grey.300', '&:hover': { color: 'white' } }}>
              <Box sx={{ p: 1.5, bgcolor: 'rgba(255 255 255 / 0.1)', borderRadius: '50%', color: 'purple' }}>
                <Phone size={20} />
              </Box>
              <Typography variant="body1">{PERSONAL_INFO.phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1.5, color: 'grey.300' }}>
              <Box sx={{ p: 1.5, bgcolor: 'rgba(255 255 255 / 0.1)', borderRadius: '50%', color: 'purple' }}>
                <MapPin size={20} />
              </Box>
              <Typography variant="body1">{PERSONAL_INFO.location}</Typography>
            </Box>
            <Divider sx={{ my: 3, borderColor: 'rgba(255 255 255 / 0.1)' }} />
            <Typography variant="overline" sx={{ color: 'grey.400', display: 'block', mb: 2, fontWeight: 'bold' }}>
              Follow Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[{ icon: <Github size={20} />, href: PERSONAL_INFO.socials.github }, { icon: <Linkedin size={20} />, href: PERSONAL_INFO.socials.linkedin }, { icon: <Twitter size={20} />, href: PERSONAL_INFO.socials.twitter }].map((social, i) => (
                <MuiLink
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 1.5,
                    bgcolor: 'rgba(255 255 255 / 0.1)',
                    borderRadius: '50%',
                    color: 'grey.300',
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: 'white', color: 'black', transform: 'translateY(-4px)' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {social.icon}
                </MuiLink>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item size={{xs:12, md:7}}>
          <Paper elevation={5} sx={{ p: 4, bgcolor: 'rgba(255 255 255 / 0.05)', borderRadius: 3 }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Grid container spacing={2}>
                <Grid item size={{xs:12,md:6}}>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="John Doe"
                    variant="filled"
                    sx={{ backgroundColor: 'rgba(255 255 255 / 0.05)', input: { color: 'white' }, label: { color: 'grey.400' } }}
                  />
                </Grid>
                <Grid item size={{xs:12,md:6}}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    variant="filled"
                    sx={{ backgroundColor: 'rgba(255 255 255 / 0.05)', input: { color: 'white' }, label: { color: 'grey.400' } }}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Subject"
                placeholder="Project Collaboration"
                variant="filled"
                sx={{ backgroundColor: 'rgba(255 255 255 / 0.05)', input: { color: 'white' }, label: { color: 'grey.400' } }}
              />
              <TextField
                fullWidth
                label="Message"
                placeholder="Tell me about your project..."
                multiline
                rows={4}
                variant="filled"
                sx={{ backgroundColor: 'rgba(255 255 255 / 0.05)', textarea: { color: 'white' }, label: { color: 'grey.400' } }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ fontWeight: 'bold', py: 1.5, display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center' }}
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Footer = () => (
  <Box component="footer" sx={{ py: 4, borderTop: '1px solid rgba(255 255 255 / 0.1)', bgcolor: 'rgba(0 0 0 / 0.4)', backdropFilter: 'blur(12px)', textAlign: 'center' }}>
    <Typography variant="body2" color="grey.500">
      &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, MUI & Lucide Icons.
    </Typography>
  </Box>
);

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white', fontFamily: 'Roboto, sans-serif', userSelect: 'text' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
