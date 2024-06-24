import React, { useRef, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
// import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";
import {
  Box,
  Select,
  MenuItem,
  IconButton,
  Button,
  Grid,
  Typography,
  TextField,
  Stack,
  CircularProgress,
  Paper,
  Avatar,
  Tab,
  Tabs,
  LinearProgress,
} from "@mui/material";

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
              background: "red",
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
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: { xs: "21px 0", md: "40px " }, background: "" }}
        >
          {"Boom Projects Now"}
        </Grid>
      </Grid>
    </Box>
  );
};

const TabController = () => {
  const [value, setValue] = useState("about");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const TabStyles = {
    color: "#111",
    fontSize: { xs: "12px", md: "12px" },
    margin: { xs: "0 auto", md: "0 6px" },
    transition: "500ms",
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
            borderBottom:
              value === "contact" ? "5px solid #111" : "5px solid transparent",
          }}
          label=""
        >
          {" "}
          Contact{" "}
        </Button>
      </Box>
      <Box sx={{ display: value === "about" ? "flex" : "none" }} index={0}>
        <AboutMe />
      </Box>
      <Box sx={{ display: value === "projects" ? "flex" : "none" }} index={1}>
        <Projects />
      </Box>
      <Box sx={{ display: value === "xp" ? "flex" : "none" }} index={2}>
        Item Four Content
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

const SkillsCentre = () => {
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
            <Grid container>
              <Grid item xs={2}>
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
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
                      width: skill.level,
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
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: { xs: "0", md: "32px 21px" },
          minHeight: "auto",
          color: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            background: "red",
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
          <Typography className="font-fam">{"Dercio Maduna"}</Typography>
          <Typography
            className="font-fam"
            sx={{ fontWeight: "600", fontSize: "21px", m: "12px 0" }}
          >
            {"Welcome to My Portfolio"}
          </Typography>
          <Typography className="font-fam" sx={{ m: "12px 0" }}>
            Hello! My name is Dercio Maduna, and I am a passionate frontend
            developer with a strong background in building exceptional web
            applications. With expertise in technologies like React.js, Next.js,
            and Node.js, I am committed to delivering user-friendly and visually
            appealing digital experiences. Throughout my career, I have had the
            privilege of working on a diverse range of projects, each one
            challenging me to push the boundaries of what is possible with
            modern web development. From creating comprehensive healthcare
            platforms like the UFS Virtual Clinic to building engaging websites
            for student organizations and event planning companies, I have honed
            my skills in crafting intuitive interfaces and robust backend
            systems.
          </Typography>
          <Box
            sx={{
              width: "100%",
              background: "red",
              display: { xs: "block", md: "none" },
              height: "35vh",
              backgroundImage: 'url("/dercio.jpg")',
              backgroundSize: "cover",
              backgroundPosition: { xs: "top", md: "center top" },
              // backgroundAttachment: { xs: "fixed", md: "scroll" },
            }}
          />
          <Typography className="font-fam" sx={{ m: "12px 0" }}>
            In this portfolio, you will find a selection of my most notable
            projects, showcasing my technical prowess, attention to detail, and
            ability to bring ideas to life. Each project is a testament to my
            dedication to staying at the forefront of industry trends,
            continuously learning, and collaborating with talented teams to
            create impactful solutions. As you explore my work, I hope you'll
            get a sense of my commitment to excellence, my love for
            problem-solving, and my desire to make a meaningful difference
            through the power of technology. I am always eager to take on new
            challenges and push the boundaries of what is possible in the world
            of frontend development. Thank you for taking the time to visit my
            portfolio. I look forward to the opportunity to discuss how I can
            contribute my skills and passion to your next project. Happy
            exploring!
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
