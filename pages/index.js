import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Avatar,
  Icon,
  Link,
} from "@mui/material";
import { AppBar, Toolbar, Container } from '@mui/material';
import Image from 'next/image';
import CoverImage from '../public/avatar.jpg'; 
import { useSpring, animated } from "@react-spring/web";
import Marquee from "react-fast-marquee";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  CallRounded,
} from "@mui/icons-material";
import { Stepper, Step, StepLabel, StepContent } from "@mui/material";

export default function Home() {
  const Technologies =
    "Bash|Linux|C|C#|ReactJs|React Native|MUI|AWS|Google Cloud & Firebase|Agile";

  return (
    <Box>
      <Box sx={{ width: "90%", margin: "0 auto", p: "21px 0" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              className="bounce-in-top"
              src={"/dercio.jpg"}
              sx={{
                m: "21px auto",
                objectFit: "contain",
                width: { xs: "150px", lg: "120px" },
                height: { xs: "150px", lg: "120px" },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography className="font-fam" sx={{ fontSize: "36px" }}>
              {" "}
              Dercio Maduna{" "}
            </Typography>
            <Typography
              className="font-fam"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              {
                "ALX Software Engineering Student | Fullstack React , React Native Developer | Nextjs & Web Enterprise | C , Python , UI/UX"
              }
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: { xs: "column", md: "row" },
                m: { xs: "12px 0" },
              }}
            >
              <Marquee speed="12">
                {[
                  "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
                  "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
                  "The true sign of intelligence is not knowledge but imagination",
                  "The best way to predict the future is to invent it.",
                  "The future of computer science is not machines, but minds",
                ].map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      className="font-fam"
                      sx={{ fontSize: "14px", m: "0 12px" }}
                    >
                      {item}
                    </Typography>
                  );
                })}
              </Marquee>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link
                  href="https://www.linkedin.com/in/dercio-maduna-b718501b6/"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(1,1,1,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  <LinkedIn
                    sx={{ margin: "12px 8px", color: "rgba(1,1,1,1)" }}
                  />
                </Link>

                <Link
                  href="https://twitter.com/derciomaduna"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(1,1,1,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  <Twitter
                    sx={{ margin: "12px 8px", color: "rgba(1,1,1,1)" }}
                  />
                </Link>
                <Link
                  href="https://github.com/dercio-codes"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(1,1,1,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  <GitHub sx={{ margin: "12px 8px", color: "rgba(1,1,1,1)" }} />
                </Link>
                <Link
                  href="https://github.com/dercio-codes"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(1,1,1,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  <Email sx={{ margin: "12px 8px", color: "rgba(1,1,1,1)" }} />
                </Link>
                <Link
                  href="https://github.com/dercio-codes"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(1,1,1,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  <CallRounded
                    sx={{ margin: "12px 8px", color: "rgba(1,1,1,1)" }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: { xs: "21px 0", md: "0 " }, background: "" }}
        >
          <TabController />
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/3d-abstract-creative-sphere_23-2150885489.jpg?t=st=1719258690~exp=1719262290~hmac=9d7389f69370d7f6fa1a943072252f27a6bd68c54cc055f9b9c4eab011165df3&w=740")',
        }}
      >
        <Box
          component="footer"
          sx={{
            backgroundImage:
              "linear-gradient(to top, rgba(1,1,1,0.9), rgba(1,1,1,0.3))",
            color: "#fff",
            padding: "40px",
            marginTop: "auto",
          }}
        >
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={12} sm={6} sx={{ display: "none" }}>
              <Typography variant="h6" gutterBottom>
                Dercio Maduna
              </Typography>
              <Typography variant="body2">
                Passionate Frontend Developer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Connect with Me
              </Typography>
              <Box sx={{}}>
                <Link
                  href="https://github.com/derciomaduna"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(200,200,200,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  GitHub
                  <GitHub
                    sx={{ margin: "12px 8px", color: "rgba(200,200,200,1)" }}
                  />
                </Link>
              </Box>
              <Box sx={{}}>
                <Link
                  href="https://www.linkedin.com/in/dercio-maduna-b718501b6/"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(200,200,200,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <LinkedIn
                    sx={{ margin: "12px 8px", color: "rgba(200,200,200,1)" }}
                  />
                </Link>
              </Box>
              <Box sx={{}}>
                <Link
                  href="https://twitter.com/derciomaduna"
                  target="_blank"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoratioon: "none",
                    color: "rgba(200,200,200,.7)",
                  }}
                  rel="noopener noreferrer"
                >
                  Twitter
                  <Twitter
                    sx={{ margin: "12px 8px", color: "rgba(200,200,200,1)" }}
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: "none" }}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box>
                <Link href="/">Home</Link>
              </Box>
              <Box>
                <Link href="/about">About</Link>
              </Box>
              <Box>
                <Link href="/portfolio">Portfolio</Link>
              </Box>
              <Box>
                <Link href="/contact">Contact</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">12derciomaduna@gmail.com</Typography>
              <Typography variant="body2">0677551017</Typography>
              <Typography variant="body2">Johannesburg, Gauteng</Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: "20px",
              textAlign: "center",
              fontSize: "14px",
              color: "#aaa",
            }}
          >
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Dercio Maduna. All rights
              reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        p: "21px 6px",
        width: "100%",
      }}
    >
      <Typography
        className="font-fam"
        sx={{
          textAlign: "left",
          width: "100%",
        }}
      >
        {"Get In Touch With Me Now."}
      </Typography>
      <Typography
        className="font-fam"
        sx={{
          fontWeight: "600",
          fontSize: "21px",
          m: "12px 0",
          textAlign: "left",
          width: "100%",
        }}
      >
        {"Contact Me"}
      </Typography>

      <Grid container>
        <Grid item xs={12} md={8} sx={{ p: "0 12px", m: "0 auto" }}>
          <Box
            sx={{
              width: "100%",

              display: { xs: "block", md: "block" },
              height: "100%",
              minHeight: { xs: "10vh", md: "50vh" },
              backgroundImage: 'url("/graphic-design/podcast.png")',
              backgroundSize: "cover",
              backgroundPosition: { xs: "top" },
              // backgroundAttachment: { xs: "fixed", md: "scroll" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            p: "0 12px",
            m: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <TextField
            label="Name"
            sx={{ ...TextFieldStyles }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <TextField
            label="Email"
            type="email"
            sx={{ ...TextFieldStyles }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <TextField
            label="Message"
            multiline
            rows={4}
            sx={{ ...TextFieldStyles }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, background: "#111" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const Projects = () => {
  const myProjects = [
    {
      title: "Atomus Dev Website Launch 2023",
      url: "https://www.atomusdev.co.za/",
      image: "/graphic-design/atomus-2.png",
    },
    {
      title: "The YKM Talk Podcast Banner",
      url: "",
      image: "/graphic-design/podcast.png",
    },
    {
      title: "Atomus Dev Website Promotion",
      url: "https://www.atomusdev.co.za/",
      image: "/graphic-design/atomus-1.png",
    },
    {
      title: "UFS Virutal Clinic",
      url: "https://ufs-clinic-web.vercel.app/",
      image: "/graphic-design/ufs-virtual.png",
    },
    {
      title: "Tobacco and THC Disposables",
      url: "https://airbuzz-gp.vercel.app/",
      image: "/graphic-design/airbuzz-2.png",
    },
    {
      title: "ITSA Web",
      url: "https://itsa-web.vercel.app/",
      image: "/graphic-design/itsa-web.png",
    },
    {
      title: "Salon Website Template",
      url: "https://web-template-0.vercel.app/",
      image: "/graphic-design/saloon-web.png",
    },
    {
      title: "Misguided Entertainment",
      url: "https://misguidedsa.co.za/",
      image: "/graphic-design/misguided-image.png",
    },
    {
      title: "T and L Upholstery",
      url: "https://tlupholstery.co.za/",
      image: "/graphic-design/tl-upholstery.png",
    },
  ];

  return (
    <Box sx={{ width: "100%", m: "32px 0" }}>
      <Typography
        className="font-fam"
        sx={{ fontWeight: "600", fontSize: "21px", m: "12px 0" }}
      >
        {"Projects"}
      </Typography>
      <Typography
        className="font-fam"
        sx={{
          fontSize: "12px",
          textDecoration: "none",
          margin: "6px 0",
        }}
      >
        {
          "Throughout my career, I have worked on diverse, impactful projects that showcase my expertise in frontend development and full-stack engineering. These include building comprehensive healthcare and student organization platforms using React.js, Next.js, and Node.js, as well as creating user-friendly websites for event planning companies."
        }
      </Typography>
      <Grid container>
        {myProjects.map((proj, index) => {
          return (
            <Grid
              className="project-container"
              key={index}
              item
              xs={12}
              md={3.8}
              sx={{
                m: "21px auto",
              }}
            >
              <Link
                sx={{
                  width: "100%",
                  textDecoration: "none",
                  "&:hover": { background: "rgba(1,1,1,.9)" },
                }}
                href={proj.url}
                target="_blank"
              >
                <Box
                  sx={{
                    backgroundImage: `url('${proj.image}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "150px",
                    width: "100%",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="font-fam"
                    sx={{
                      fontSize: "10px",
                      fontWeight: "600",
                      textDecoration: "none",
                      margin: "6px 0",
                    }}
                  >
                    {proj.title}
                  </Typography>
                  <Box
                    className="project-icon"
                    sx={{
                      width: "16px",
                      height: "16px",
                      backgroundImage: `url('/icons8-expand-50.png')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const TabController = () => {
  const [value, setValue] = useState("landing");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const TabStyles = {
    color: "#111",
    fontSize: { xs: "12px", md: "12px" },
    margin: { xs: "0 auto", md: "0 6px" },
    transition: "500ms",
    borderTop: "5px solid transparent",
  };

  return (
    <Box sx={{ m: "0 auto", width: "90%", minHeight: "75vh" }}>
      <Box
        value={value}
        sx={{
          flexWrap: { xs: "wrap", sm: "wrap" },
          display: "flex",
          justifyContent: { xs: "space-evenly", md: "left" },
          width: "100%",
          // background: "rgba(1,1,1,.3)",
          m: "0 auto",
        }}
        onChange={handleChange}
        aria-label="my tabs"
      >
        <Button
          onClick={() => {
            handleChange("about");
          }}
          sx={{
            ...TabStyles,
            borderBottom:
              value === "about" ? "5px solid #111" : "5px solid transparent",
            // borderLeft:
            //   value === "about" ? "5px solid #111" : "5px solid transparent",
          }}
          label=""
        >
          {" "}
          About{" "}
        </Button>
        <Button
          onClick={() => {
            handleChange("projects");
          }}
          sx={{
            ...TabStyles,
            borderBottom:
              value === "projects" ? "5px solid #111" : "5px solid transparent",
            borderTop:
              value === "projects" ? "5px solid #111" : "5px solid transparent",
          }}
          label=""
        >
          {" "}
          Projects{" "}
        </Button>
        <Button
          onClick={() => {
            handleChange("xp");
          }}
          sx={{
            ...TabStyles,
            borderBottom:
              value === "xp" ? "5px solid #111" : "5px solid transparent",
            borderBottom:
              value === "xp" ? "5px solid #111" : "5px solid transparent",
          }}
          label=""
        >
          {" "}
          XP{" "}
        </Button>
        <Button
          onClick={() => {
            handleChange("skills");
          }}
          sx={{
            ...TabStyles,
            borderBottom:
              value === "skills" ? "5px solid #111" : "5px solid transparent",
            borderTop:
              value === "skills" ? "5px solid #111" : "5px solid transparent",
          }}
          label=""
        >
          {" "}
          Skills{" "}
        </Button>
        <Button
          onClick={() => {
            handleChange("contact");
          }}
          sx={{
            ...TabStyles,
            borderTop:
              value === "contact" ? "5px solid #111" : "5px solid transparent",
            // borderRight:
            //   value === "contact" ? "5px solid #111" : "5px solid transparent",
          }}
          label=""
        >
          {" "}
          Contact{" "}
        </Button>
      </Box>
      <Box sx={{ display: value === "landing" ? "flex" : "none" }} index={0}>
        <Landing />
      </Box>
          <Box sx={{ display: value === "about" ? "flex" : "none" }} index={0}>
        <AboutMe />
      </Box>
      <Box sx={{ display: value === "projects" ? "flex" : "none" }} index={1}>
        <Projects />
      </Box>
      <Box sx={{ display: value === "xp" ? "flex" : "none" }} index={2}>
        <Experience />
      </Box>
      <Box sx={{ display: value === "skills" ? "flex" : "none" }} index={3}>
        {/* <SkillsCentre /> */}
        <SkillsSection SkillsStats={SkillsStats} />
      </Box>
      <Box sx={{ display: value === "contact" ? "flex" : "none" }} index={4}>
        <ContactForm />
      </Box>
    </Box>
  );
};

const Landing = () => {
  return(
    <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Image
          src={CoverImage}
          alt="Cover Image"
          layout="responsive"
          width={700} // Adjust width as needed
          height={400} // Adjust height as needed
        />
        <Typography variant="h2" sx={{ marginTop: '20px' }}>
          Dercio Maduna Portfolio
        </Typography>
        <Typography variant="h5" sx={{ marginTop: '10px', marginBottom: '20px' }}>
          A Full-Stack Developer Creating Engaging Web Applications
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://derciomaduna-portfolio.vercel.app/"
          target="_blank"
        >
          View Project
        </Button>
      </Container>
    )
    }

const Experience = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {experiences.map((experience, index) => (
          <Step sx={{ background: "" }} key={index}>
            <StepLabel>
              <Avatar
                sx={{
                  width: "200px",
                  height: "75px",
                  objectFit: "contain",
                  borderRadius: "0",
                  margin: "32px 0 0 0",
                }}
                src={experience.icon}
              />
              <Typography className="font-fam" variant="h6">
                {experience.title}
              </Typography>
              <Typography className="font-fam" variant="subtitle2">
                {experience.year}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography className="font-fam">
                {experience.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep !== experiences.length - 1 && (
                  <Button onClick={handleNext} variant="contained">
                    Next
                  </Button>
                )}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const SkillsSection = ({ SkillsStats }) => {
  const [animatedLevels, setAnimatedLevels] = useState({});

  useEffect(() => {
    const newAnimatedLevels = {};
    SkillsStats.forEach((skill) => {
      newAnimatedLevels[skill.skill] = 0;
    });
    setAnimatedLevels(newAnimatedLevels);
  }, [SkillsStats]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedLevels((prevLevels) => {
        const newLevels = { ...prevLevels };
        SkillsStats.forEach((skill) => {
          if (newLevels[skill.skill] < parseInt(skill.level)) {
            newLevels[skill.skill] += 10;
          }
        });
        return newLevels;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, [SkillsStats]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ padding: "21px 0", width: "100%" }}>
        <Typography className="font-fam">{"Here is my Skillset."}</Typography>
        <Typography
          className="font-fam"
          sx={{ fontWeight: "600", fontSize: "21px", m: "12px 0" }}
        >
          {"Web Development"}
        </Typography>

        {SkillsStats.map((skill, index) => {
          return (
            <Grid key={index} container>
              <Grid
                item
                xs={2}
                md={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  src={skill.icon}
                  sx={{
                    height: "35px",
                    width: "35px",
                    margin: "12px 0",
                    borderRadius: "0",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={10}
                md={11}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: "100%",
                  minHeight: "60px",
                }}
              >
                <Typography className="font-fam">{skill.skill}</Typography>

                <Box
                  sx={{
                    width: "100%",
                    background: "rgba(1,1,1,.1)",
                    height: "2.5px",
                  }}
                >
                  <Box
                    sx={{
                      background: "rgba(1,1,1,.7)",
                      width: `${animatedLevels[skill.skill]}%`,
                      height: "2.5px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

const AboutMe = () => {
  const props = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 500,
    config: { duration: 1000 },
  });

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: { xs: "0", md: "32px 21px 32px 0" },
          minHeight: "auto",
          color: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: { xs: "none", md: "block" },
            height: "100%",
            backgroundImage: 'url("/dercio.jpg")',
            backgroundSize: "cover",
            backgroundPosition: { xs: "top", md: "center top" },
            backgroundAttachment: { xs: "fixed", md: "scroll" },
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ p: { xs: "12px 0", md: "32px 21px" }, minHeight: "50vh" }}
      >
        <Box sx={{ m: "32px 0 0 0" }}>
          <animated.span style={props}>
            <Typography className="font-fam">{"Dercio Maduna"}</Typography>
          </animated.span>
          <animated.span style={props} delay={100}>
            <Typography
              className="font-fam"
              sx={{ fontWeight: "600", fontSize: "21px", m: "12px 0" }}
            >
              {"Welcome to My Portfolio"}
            </Typography>
          </animated.span>

          <Typography className="font-fam" sx={{ m: "12px 0" }}>
            {
              "  Hello! My name is Dercio Maduna, and I am a passionate frontend developer with a strong background in building exceptional web applications. With expertise in technologies like React.js, Next.js, and Node.js, I am committed to delivering user-friendly and visually appealing digital experiences. Throughout my career, I have had the privilege of working on a diverse range of projects, each one challenging me to push the boundaries of what is possible with modern web development. From creating comprehensive healthcare platforms like the UFS Virtual Clinic to building engaging websites for student organizations and event planning companies, I have honed my skills in crafting intuitive interfaces and robust backend systems."
            }
          </Typography>
          <Box
            sx={{
              width: "100%",

              display: { xs: "block", md: "none" },
              height: "35vh",
              backgroundImage: 'url("/dercio.jpg")',
              backgroundSize: "cover",
              backgroundPosition: { xs: "top", md: "center top" },
              // backgroundAttachment: { xs: "fixed", md: "scroll" },
            }}
          />
          <Typography className="font-fam" sx={{ m: "12px 0" }}>
            {
              "In this portfolio, you will find a selection of my most notable projects, showcasing my technical prowess, attention to detail, and ability to bring ideas to life. Each project is a testament to my dedication to staying at the forefront of industry trends, continuously learning, and collaborating with talented teams to create impactful solutions. As you explore my work, I hope you'll get a sense of my commitment to excellence, my love for problem-solving, and my desire to make a meaningful difference through the power of technology. I am always eager to take on new challenges and push the boundaries of what is possible in the world of frontend development. Thank you for taking the time to visit my portfolio. I look forward to the opportunity to discuss how I can contribute my skills and passion to your next project. Happy exploring!"
            }
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const SkillsStats = [
  {
    skill: "JavaScript",
    level: "80%",
    icon: "https://img.icons8.com/?size=100&id=hKrJAdwqbGgG&format=png&color=000000",
  },
  {
    skill: "ReactJS & React Native",
    level: "85%",
    icon: "https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=000000",
  },
  {
    skill: "Node.js",
    level: "65%",
    icon: "https://img.icons8.com/?size=100&id=t9oCxEN7McHZ&format=png&color=000000",
  },
  {
    skill: "MySQL",
    level: "30%",
    icon: "https://img.icons8.com/?size=100&id=39858&format=png&color=000000",
  },
  {
    skill: "Cloud Computing",
    level: "45%",
    icon: "https://img.icons8.com/?size=100&id=Xoxp-VVeny7f&format=png&color=000000",
  },
  {
    skill: "AWS",
    level: "50%",
    icon: "https://img.icons8.com/?size=100&id=VoXRGxL3ekkk&format=png&color=000000",
  },
  {
    skill: "Git",
    level: "70%",
    icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000",
  },
  {
    skill: "Linux",
    level: "60%",
    icon: "https://img.icons8.com/?size=100&id=38796&format=png&color=000000",
  },
  {
    skill: "Project Management",
    level: "75%",
    icon: "https://img.icons8.com/?size=100&id=102879&format=png&color=000000",
  },
  {
    skill: "Collaboration",
    level: "90%",
    icon: "https://img.icons8.com/?size=100&id=42255&format=png&color=000000",
  },
  {
    skill: "CI/CD",
    level: "60%",
    icon: "https://img.icons8.com/?size=100&id=40886&format=png&color=000000",
  },
  {
    skill: "C/C++",
    level: "25%",
    icon: "https://img.icons8.com/?size=100&id=55199&format=png&color=000000",
  },
  {
    skill: "Figma",
    level: "75%",
    icon: "https://img.icons8.com/?size=100&id=xBrQ97Arogyy&format=png&color=000000",
  },
  {
    skill: "Next.js",
    level: "80%",
    icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
  },
  {
    skill: "Database Management",
    level: "40%",
    icon: "https://img.icons8.com/?size=100&id=ANkmbbSm2OCp&format=png&color=000000",
  },
  {
    skill: "Testing",
    level: "10%",
    icon: "https://img.icons8.com/?size=100&id=40886&format=png&color=000000",
  },
];

const TextFieldStyles = {
  root: {
    "& .MuiInputBase-root": {
      height: "10px", // Adjust the height as needed
      borderColor: "#111", // Adjust the border color as needed
    },
    "& .MuiInputBase-input": {
      borderColor: "#111", // Adjust the border color as needed
      padding: "8px 12px", // Adjust the padding as needed
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#111", // Adjust the border color as needed
    },
    "& .MuiFormLabel-root": {
      borderColor: "#111", // Adjust the border color as needed
      fontSize: "14px", // Adjust the font size of the label as needed
    },
  },
};

const experiences = [
  {
    title: "Senior FullStack Web Developer",
    year: "2023 - Present",
    description:
      "Responsible for designing and developing user-friendly web applications using modern frontend technologies such as React.js, Next.js, and Material-UI.",
    features: [
      "Implemented responsive and accessible user interfaces",
      "Integrated with backend APIs to fetch and display data",
      "Collaborated with cross-functional teams to deliver high-quality software",
    ],
    icon: "https://atomusdev.co.za/logo_transparent.png",
  },
  {
    title: "Web Developer Intern",
    year: "2020 - 2021",
    description:
      "Gained hands-on experience in web development, working on various projects for clients and organizations.",
    features: [
      "Developed dynamic websites using HTML, CSS, and JavaScript",
      "Collaborated with designers to translate mockups into functional web pages",
      "Participated in code reviews and learned best practices for web development",
    ],
    icon: "/graphic-design/activemi-logo.jpg",
  },
  {
    title: "Junior Web Developer",
    year: "2021 - 2022",
    description:
      "Provided technical support and assistance to students and faculty at the university's IT department.",
    features: [
      "Troubleshot hardware and software issues",
      "Conducted training sessions on various software applications",
      "Contributed to the maintenance and improvement of the university's IT infrastructure",
    ],
    icon: "/graphic-design/activemi-logo.jpg",
  },
  {
    title: "Senior Web Developer",
    year: "2022 - 2023",
    description:
      "Provided technical support and assistance to students and faculty at the university's IT department.",
    features: [
      "Troubleshot hardware and software issues",
      "Conducted training sessions on various software applications",
      "Contributed to the maintenance and improvement of the university's IT infrastructure",
    ],
    icon: "/graphic-design/activemi-logo.jpg",
  },
];
