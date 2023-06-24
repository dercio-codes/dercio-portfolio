import React, { useRef, useState } from "react";
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
} from "@mui/material";

export default function Home() {
  const Technologies =
    "Bash|Linux|C|C#|ReactJs|React Native|MUI|AWS|Google Cloud & Firebase|Agile";

  return (
    <Box
      id="my-app"
      sx={{
        padding: {
          xs: "1.5rem 2.5rem",
          lg: "2.5rem 5rem",
        },
        height: "100vh",
        background: "rgba(1,1,1,.3)",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {" "}
        Scroll left or right to view the site.{" "}
      </Typography>
          <Box
            sx={{
              height: "95vh",
              position: "relative",
              background: "",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "70px",
                }}
              >
                {" "}
                DM{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                {" "}
                Dercio Maduna{" "}
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                height: "250px",
                position: "absolute",
                bottom: "0rem",
                left: "0rem",
                width: "250px",
                backgroundColor: "transparent",
                backgroundImage: 'url("/banner.png")',
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "0.5rem 2.5rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            />{" "}
            <Box
              sx={{
                height: "350px",
                position: "absolute",
                bottom: "0rem",
                right: "0rem",
                opacity: "0.3",
                width: "500px",
                backgroundColor: "transparent",
                backgroundImage: 'url("/banner-effect.jpg")',
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "0.5rem 2.5rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            />
          </Box>
          <Box
            sx={{
              height: "150px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "150px",
                zIndex: 4,
                width: "200px",
                backgroundColor: "transparent",
                backgroundImage: 'url("/logo (1).png")',
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "0.5rem 2.5rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  margin: "0 12px 0 12px",
                }}
              >
                {" "}
                Instagram{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "18px",
                  margin: "0 12px 0 12px",
                }}
              >
                {" "}
                Linked{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "18px",
                  margin: "0 12px 0 12px",
                }}
              >
                {" "}
                Twitter{" "}
              </Typography>
            </Box>{" "}
          </Box>

          <Box
            sx={{
              padding: "21px",
              zIndex: 5,
              background: "rgba(1,1,1,0.1)",
              transition: "800ms",
              "&:hover": {
                background: "rgba(1,1,1,.3)",
              },
            }}
          >
            <Box
              sx={{
                height: { xs:'100px' , lg:"150px"},
                background: "",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "16",
                    lg: "24px",
                  },
                  opacity: "0.5",
                }}
              >
                {" "}
                Graphic Design{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "21px",
                    lg: "40px",
                  },
                  fontWeight: "400",
                }}
              >
                {" "}
                Software / Web Development{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16",
                    lg: "24px",
                  },
                  opacity: "0.5",
                }}
              >
                {" "}
                Blog{" "}
              </Typography>
            </Box>

            <Grid container>
              <Grid
                item
                xs={12}
                lg={4}
                sx={{
                  padding: "21px",
                  height: "300px",
                  background: "",
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
              >
                <Paper
                  sx={{
                    width: {
                      xs: "100%",
                      md: "100%",
                    },
                    backgroundColor: "transparent",
                    height: "100%",
                    backgroundImage: 'url("/graphic-design/podcast.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "0.5rem 2.5rem",
                  }}
                />
              </Grid>{" "}
              <Grid
                item
                xs={12}
                lg={4}
                sx={{
                  padding: "21px",
                  height: "300px",
                  background: "",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "70%",
                    margin: "auto auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      opacity: "0.5",
                    }}
                  >
                    {" "}
                    minimal{" "}
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontSize: "36px",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    Glass Polymorphism{" "}
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontSize: "24px",
                      opacity: "0.5",
                    }}
                  >
                    {" "}
                    retro{" "}
                  </Typography>
                </Box>{" "}
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  padding: "21px",
                  height: "300px",
                  background: "",
                }}
              >
                <Paper
                  sx={{
                    width: {
                      xs: "100%",
                      md: "100%",
                    },
                    backgroundColor: "transparent",
                    height: "100%",
                    backgroundImage: 'url("/graphic-design/atomus-1.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "0.5rem 2.5rem",
                  }}
                />
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  padding: "21px",
                  height: "300px",
                  background: "",
                }}
              >
                <Paper
                  sx={{
                    width: {
                      xs: "100%",
                      md: "100%",
                    },
                    backgroundColor: "transparent",
                    height: "100%",
                    backgroundImage: 'url("/graphic-design/atomus-2.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "0.5rem 2.5rem",
                  }}
                />
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  padding: "21px",
                  height: "300px",
                  background: "",
                }}
              >
                <Paper
                  sx={{
                    width: {
                      xs: "100%",
                      md: "100%",
                    },
                    backgroundColor: "transparent",
                    height: "100%",
                    backgroundImage: 'url("/graphic-design/template-0.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "0.5rem 2.5rem",
                  }}
                />
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  padding: "21px",
                  height: "300px",
                  background: "",
                }}
              >
                <Paper
                  sx={{
                    width: {
                      xs: "100%",
                      md: "100%",
                    },
                    backgroundColor: "transparent",
                    height: "100%",
                    backgroundImage: 'url("/graphic-design/atomus-3.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "0.5rem 2.5rem",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              padding: "0 0 2.5rem 0",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "400",
                margin: "2.5rem 0",
              }}
            >
              {" "}
              Technologies{" "}
            </Typography>
            <Box
              sx={{
                height: "",
                width: "100%",
                background: "",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                  opacity: "0.5",
                }}
              >
                {" "}
                Graphic Design{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "400",
                  margin: "0 7rem 0 0",
                }}
              >
                {" "}
                Additional{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                  opacity: "0.5",
                }}
              >
                {" "}
                Blog{" "}
              </Typography>
            </Box>{" "}
            <Grid container>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  margin: "2.5rem 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    size={"15rem"}
                    color="inherit"
                    value={70}
                    sx={{
                      rotate: "200deg",
                    }}
                  />{" "}
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "30px",
                      }}
                    >
                      {" "}
                      HTML{" "}
                    </Typography>{" "}
                  </Box>{" "}
                </Box>
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  margin: "2.5rem 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    color="secondary"
                    size={"15rem"}
                    value={70}
                    sx={{
                      rotate: "200deg",
                    }}
                  />{" "}
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "30px",
                      }}
                    >
                      {" "}
                      CSS{" "}
                    </Typography>{" "}
                  </Box>{" "}
                </Box>
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  margin: "2.5rem 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    size={"15rem"}
                    color="success"
                    value={70}
                    sx={{
                      rotate: "200deg",
                    }}
                  />{" "}
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "30px",
                      }}
                    >
                      {" "}
                      Javascript{" "}
                    </Typography>{" "}
                  </Box>{" "}
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                padding: "1rem 0",
                background: "",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {" "}
              {Technologies.split("|").map((item, index) => (
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "3rem",
                    cursor: "pointer",
                    fontWeight: "400",
                    margin: "0 6px",
                  }}
                  key={item}
                >
                  {" "}
                  {item}{" "}
                  <Typography
                    component="span"
                    variant="span"
                    sx={{
                      margin: "0 6px",
                    }}
                  >
                    {" "}
                    {index === 9 ? "" : "|"}{" "}
                  </Typography>{" "}
                </Typography>
              ))}{" "}
            </Box>
            <Paper elevation={0}
              sx={{
                width: "300px",
                height: "250px",
                backgroundColor: "transparent",
                backgroundImage: 'url("/vercel.svg")',
                backgroundSize: "contain",
                filter:'invert(1)',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "0.5rem 2.5rem",
              }}
            />{" "}
            <Box
              sx={{
                padding: "0 2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="p"
                component="p"
                sx={{
                  textAlign: "justify",
                  fontSize: "16px",
                  lineHeight: "2rem",
                  width: {
                    xs: "100%",
                    lg: "50%",
                  },
                }}
              >
                {" "}
                {
                  "Hello, I'm Dercio, a passionate and dedicated developer with a strong background in web development and a focus on creating elegant and efficient solutions. With 3+ years of experience in the industry, I have worked on a wide range of projects, from building responsive and user-friendly websites to developing robust web applications.My expertise lies in front-end development, where I specialize in HTML, CSS, and JavaScript frameworks such as React and MUI.I strive for clean and maintainable code, following industry best practices and staying updated with the latest trends and technologies. In addition to my technical skills, I possess excellent communication and time management abilities, allowing me to effectively manage projects and meet deadlines. I am always eager to expand my knowledge and tackle new challenges.Feel free to explore my portfolio to see some of the projects I've worked on."
                }{" "}
              </Typography>{" "}
            </Box>
          </Box>
          <Achievements />
          <Box
            sx={{
              minHeight: "100vh",
              background: "",
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                textAlign: "center",
                fontWeight: "400",
                margin: "2.5rem 0",
              }}
            >
              {" "}
              Bio{" "}
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  minHeight: "80vh",
                  background: "",
                  padding: "0.5rem 2.5rem",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    margin: "1.5rem 0",
                  }}
                >
                  {" "}
                  Software Engineering at <a href=""> ALX </a>
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    textAlign: "justify",
                    fontSize: "16px",
                    lineHeight: "2rem",
                  }}
                >
                  {" "}
                  {
                    "Hello, I'm Dercio, a passionate and dedicated developer with a strong background in web development and a focus on creating elegant and efficient solutions. With 3+ years of experience in the industry, I have worked on a wide range of projects, from building responsive and user-friendly websites to developing robust web applications.My expertise lies in front-end development, where I specialize in HTML, CSS, and JavaScript frameworks such as React and MUI. I am also proficient in back-end technologies like Node.js and Express, enabling me to create seamless end-to-end solutions. I am a detail-oriented problem solver who enjoys collaborating with teams and clients to deliver high-quality results. I strive for clean and maintainable code, following industry best practices and staying updated with the latest trends and technologies. In addition to my technical skills, I possess excellent communication and time management abilities, allowing me to effectively manage projects and meet deadlines. I am always eager to expand my knowledge and tackle new challenges.Feel free to explore my portfolio to see some of the projects I've worked on."
                  }{" "}
                </Typography>{" "}
                <br />
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    textAlign: "justify",
                    fontSize: "16px",
                    lineHeight: "2rem",
                  }}
                >
                  {" "}
                  {
                    "If you have any questions or would like to discuss a potential collaboration, I'd love to hear from you. "
                  }{" "}
                </Typography>{" "}
                <br />
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    textAlign: "justify",
                    fontSize: "16px",
                    lineHeight: "2rem",
                  }}
                >
                  {" "}
                  {
                    "Let's create something amazing together!\n Feel free to customize and adapt this bio to reflect your own experiences, skills, and personality."
                  }{" "}
                </Typography>{" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    margin: "2.5rem 0 0 0",
                  }}
                >
                  <Button
                    sx={{
                      "&:hover": {
                        background: "transparent",
                      },
                      marginRight: 0,
                    }}
                    className="button button-3"
                  >
                    {" "}
                    COntact{" "}
                  </Button>{" "}
                </Box>
              </Grid>{" "}
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.5rem 2.5rem",
                  margin:'0 0 5rem 0'
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    margin: "0",
                    color: "transparent",
                  }}
                >
                  {" "}
                  Get in touch with me right now.{" "}
                </Typography>

                <Paper
                  sx={{
                    borderRadius: "32px",
                    width: "100%",
                    minHeight: "95vh",
                    margin: {
                      xs: "2.5rem 0",
                    },
                    backgroundImage: 'url("/avatar.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "0.5rem 2.5rem",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  margin: "0 auto",
                  color: "#eee",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.5rem 2.5rem",
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    margin: "1.5rem 0",
                  }}
                >
                  {" "}
                  Get in touch with me right now.{" "}
                </Typography>

                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "32px",
                    background: "rgba(1,1,1,.1)",
                    width: "100%",
                    minHeight: "100vh",
                    padding: "2.5rem",
                    background: "rgba(5,5,5,.5)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "120px",
                      width: "75%",
                      display: "flex",
                      alignItems: "center",
                      margin: "0 0 2.5rem 0",
                    }}
                  >
                    <Box
                      sx={{
                        height: "150px",
                        width: "150px",
                backgroundColor: "transparent",
                backgroundImage: 'url("https://ouch-cdn2.icons8.com/6LGJNxpqqSb52RP2xZCl8gJYbO_X66hSBxoZSClu59o/rs:fit:256:269/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjE3/LzU0MDcyZGQ5LTZk/NjYtNDZhZS05NzNj/LWViZWY2NTdjNmQ1/ZS5zdmc.png")',
                backgroundSize: "contain",
                backgroundRepeat:'no-repeat'
                
                      }}
                    />{" "}
                    <Stack
                      sx={{
                        padding: "0 12px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "32px",
                          textAlign: "left",
                          fontWeight: "400",
                          color: "#eee",
                        }}
                      >
                        {" "}
                        Contact Me{" "}
                      </Typography>{" "}
                      <Typography
                        sx={{
                          fontSize: "18px",
                          textAlign: "left",
                          color: "#eee",
                          fontWeight: "400",
                          width: "100%",
                        }}
                      >
                        {" "}
                        Fill in form below and I will get back to you.{" "}
                      </Typography>
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      width: "75%",
                      margin: "0 auto",
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Name"
                      sx={{
                        ...whiteStyles,
                        padding: "1.5rem 0",
                      }}
                    />{" "}
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Surname"
                      sx={{
                        ...whiteStyles,
                        padding: "1.5rem 0",
                      }}
                    />{" "}
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Email"
                      sx={{
                        ...whiteStyles,
                        padding: "1.5rem 0",
                      }}
                    />{" "}
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Tel"
                      sx={{
                        ...whiteStyles,
                        padding: "1.5rem 0",
                      }}
                    />{" "}
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Tel"
                      sx={{
                        ...whiteStyles,
                        padding: "1.5rem 0",
                      }}
                    />{" "}
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Query"
                      multiline
                      rows="5"
                      sx={{
                        ...whiteStyles,
                        padding: "1.5rem 0",
                        margin: "0 0 2rem 0",
                      }}
                    />
                    <Button
                      sx={{
                        "&:hover": {
                          background: "transparent",
                        },
                      }}
                      className="button button-3"
                    >
                      {" "}
                      COntact{" "}
                    </Button>
                  </Box>
                </Paper>
              </Grid>{" "}
            </Grid>{" "}
          </Box>
    </Box>
  );
}

const whiteStyles = {
  background: "",
  padding: "2rem",
  "& .MuiInputBase-root": {
    borderBottom: "2px solid white",
  },
  "& .MuiInputBase-root.Mui-focused": {
    "& > fieldset": {
      borderBottom: "3px solid white",
      color: "#40e0d0",
    },
  },
  "& .MuiInputBase-root.Mui-focused": {
    "& > fieldset": {
      borderBottom: "3px solid white",
      color: "#40e0d0",
    },
  },
};

const Achievements = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            margin: "2.5rem",
          }}
        >
          {" "}
          qualifications{" "}
        </Typography>{" "}
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            margin: "2.5rem",
          }}
        >
          {" "}
          legend{" "}
        </Typography>
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
                margin: "0",
              }}
            >
              {" "}
              Training Education{" "}
            </Typography>{" "}
            <Box
              sx={{
                height: "5px",
                width: "75%",
                background: "#AFE1AF",
              }}
            />{" "}
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
                margin: "0",
              }}
            >
              {" "}
              Work Experience{" "}
            </Typography>{" "}
            <Box
              sx={{
                height: "5px",
                width: "75%",
                background: "#D27D2D",
              }}
            />{" "}
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
                margin: "0",
              }}
            >
              {" "}
              Virtual internship{" "}
            </Typography>{" "}
            <Box
              sx={{
                height: "5px",
                width: "75%",
                background: "#AA98A9",
              }}
            />{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Forest High School Johannesburg{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Matric Certificate{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2015 - 2019{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed my matric and passed
                with marks liable for Diploma studies at any tertiary institute.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #D27D2D",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Active Media Industries{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Intern Information Technology Department{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2020 - 2020{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                I worked with already built databases on setting up accounts for
                clients so that they could easily change prices, products and
                specials{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Linkedin Learning{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Programming Foundations: Fundamentals{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2020{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed Programming Foundations:
                Fundamentals with Linkedin Learning during my year at the
                internship.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Linkedin Learning{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Programming Foundations: Databases{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2020{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed Programming Foundations:
                Databases with Linkedin Learning during my year at the
                internship.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Linkedin Learning{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Succeeding in Web Development: Full Stack and Front End{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2020{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed Succeeding in Web
                Development: Full Stack and Front End with Linkedin Learning
                during my year at the internship.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Linkedin Learning{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                HTML Essential Training{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2020{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed HTML Essential Training
                with Linkedin Learning during my year at the internship.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Linkedin Learning{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                CSS Essential Training{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2020{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed CSS Essential Training
                with Linkedin Learning during my year at the internship.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Linkedin Learning{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Javascript Essential Training{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2020{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed Javascript Essential
                Training with Linkedin Learning during my year at the
                internship.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Simplilearn{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                ReactJs for Beginners{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2022{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show proof I completed ReactJs for Beginners
                with SimpliLearn during my first year as a developer.{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #D27D2D",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Active Media Industries{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Web Developer{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Jan 2021 - March 2022{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                Throughout my experience here I worked hand in hand with clients
                to maintain websites and deliver exceptional services to their
                clients as well.{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #D27D2D",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Active Media Industries{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Senior Web Developer{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                March 2022 - Dec 2022{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                I became a Senior Web Developer in April of 2022 and at this
                role I was able to run a team of 9 developers and issued out
                training to them in various ways.{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                freeCodeCamp{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Certificate, Responsive Web Design{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2021 - 2021{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                Here I learnt how to use html, css & bootstrap to build various
                front - end interfaces that are responsive{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                freeCodeCamp{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Certificate, JavaScript Data Structures{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2021 - 2021{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                Javascript Basics to Advanced{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                Array handling and Algorithms.{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                IT Academy - School{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Computer Software and Media Applications{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                May 2021 - 2022{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A course in software development which teaches Programming
                Principles, AWS, Microsoft and other various technologies such
                as c #, java and web development{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AA98A9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Moreton Bay Regional Council{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Entrepreneurship & Innovation: Web Development Virtual
                Experience Program{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2023{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate for ux / ui design from bp from a virtual
                internship program from the website TheForage.com{" "}
              </Typography>
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AA98A9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Accenture{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Accenture Nordics Developer{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2023{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate for ux / ui design from bp from a virtual
                internship program from the website TheForage.com{" "}
              </Typography>
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AA98A9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Cognizant{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Agile Methodology Virtual Experience Program{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2023{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate for ux / ui design from bp from a virtual
                internship program from the website TheForage.com{" "}
              </Typography>
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AA98A9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                BP{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Digital Design & UX Virtual Experience Programme{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2023{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate for ux / ui design from bp from a virtual
                internship program from the website TheForage.com{" "}
              </Typography>{" "}
            </Paper>{" "}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                ALX{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                Student, Computer Software Engineerin{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                Jan 2023 - Present{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                I am currenty enrolled at ALX to their Software Engineering
                Program.This is a online course covering technologies ranging
                from C, Bash and Javascript{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #D27D2D",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Atomus Dev{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Full Stack Developer{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                March 2022 - Dec 2022{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    lg: "16px",
                  },
                }}
              >
                {" "}
                Here I worked as a Fullstack developer leading the healm and
                delivering exceptional services to clients ranging from:
                -Project Management and Team Leader - Graphic Design - SEO -
                Email Marketing. - Web Design and Development - Banner and Ads
                Design - Digital Marketing{" "}
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      </Box>{" "}
      <Box
        sx={{
          minHeight: "100vh",
          marginTop: "7rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            margin: "2.5rem",
          }}
        >
          {" "}
          achievements{" "}
        </Typography>{" "}
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                spell it - white{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Nedbank{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2012{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                This is a certificate to show that I part - took in chess
                lessons and a tournament in Grade 5 amongst my school
                learners.This was sponsors by Nedbank.{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Top 10 Achiever - LO{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Forest High School{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2016{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show prroof that I served as a Deputy Headboy
                and responsible for all the other prefects and school
                disciplinary team.{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Chess{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Nedbank{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2013{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show prroof that I served as a Deputy Headboy
                and responsible for all the other prefects and school
                disciplinary team.{" "}
              </Typography>{" "}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: { xs:"0 auto" , lg:'0' },
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Sports Award - Chess{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Turffontein Primary School{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2014{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                This is a certificate to show that I part - took in chess
                lessons and a tournament in Grade 7 amongst my school
                learners.This was sponsors by Nedbank.{" "}
              </Typography>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              margin: {xs:"0 auto" , lg:'0'},
              height: "320px",
              padding: "2rem",
            }}
          >
            <Paper
              sx={{
                padding: "2rem",
                height: "100%",
                background: "rgba(12,12,12,.5)",
                color: "#eee",
                borderBottom: "5px solid #AFE1AF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                Prefect - Deputy Headboy{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "400",
                  position: "relative",
                }}
              >
                {" "}
                Turffontein Primary School{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    lg: "24px",
                  },
                }}
              >
                {" "}
                2014{" "}
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    lg: "18px",
                  },
                }}
              >
                {" "}
                A certificate to show prroof that I served as a Deputy Headboy
                and responsible for all the other prefects and school
                disciplinary team.{" "}
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
