import * as React from "react";
import "./App.css";
import { Tabs, Tab, Box, } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab"; 
import { Button } from '@mui/material';
import { RiLinksLine } from 'react-icons/ri';
import DownloadIcon from '@mui/icons-material/Download';
import { CgInstagram } from 'react-icons/cg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import 'animate.css';
import { Container, Typography, Grid, Card } from "@mui/material";
const App = () => {
  const [value, setValue] = React.useState("0");
  const handleChange = (_event: React.SyntheticEvent, newValue:string) => {
    setValue(newValue); // Ensure `newValue` is a number
  };
  
  const skills = [
    { name: "C/C++" },
  { name: "PYTHON" },
  { name: "TYPESCRIPT" },
  { name: "JAVASCRIPT" },
  { name: "REACT" },
  { name: "NODE" },
  { name: "SQL" },
  { name: "WORDPRESS" },
  { name: "HTML" },
  { name: "CSS"},
  { name: "FIREBASE" },
  { name: "VITE" },
  { name: "MATERIAL-UI"},
  { name: "BOOTSTRAP" },
  { name: "GIT" },
  { name: "VSCODE" },
  { name: "GITHUB" },
  { name: "POSTMAN" }
  ];
  const educationData = [
    {
      title: " Shri Shankaracharya Institute of Professional Management and Technology Raipur",
      institution: "B.Tech in Computer Science And Engineering",
      years: "2021 - 2025",
      rating: 7.8,
      },
    {
      title: " St. Xavier’s High School Bharni Bilapur",
      institution: "Intermediate in Science (PCM)",
      years: "2020 - 2021",
      rating: 7.9,
    },
    {
      title: " St. Xavier’s High School Bharni Bilapur",
      institution: "Class 10th",
      years: "2018 - 2019",
      rating: 7.5,
    },
  ];
  const Publication = [
    {
      title: " AI to the Rescue: Revolutionizing Post-Disaster Recovery Systems",
      years: "2025",
      src:"",
      },
  ];
  return(
  <div className="home-container" id="1">
<section className="me" >
<div className='me-1'>
<h1 className="animate__animated animate__fadeInDownBig" >Vivek Agrawal </h1>
<p className="animate__animated animate__fadeInBottomLeft animate__delay-1s"> 
A <span className="highlight">Full Stack Developer </span> with a passion for building robust, scalable,
and user-centric applications. With expertise in both frontend and backend development, 
I leverage modern technologies to create seamless digital experiences that enhance user
engagement and drive business success.
<div  style={{margin:"20px"}}>
<a href='https://www.instagram.com/vivekagrawal85?igsh=MXM3a28yZGw4cGFlNg=='><CgInstagram/></a>
<a href='https://www.linkedin.com/in/vivek-agrawal-7689b52b3/'> <BsLinkedin/> </a>
<a href='https://github.com/vivekagrawal07'> <BsGithub/> </a>
<a href='https://drive.google.com/file/d/1FycltO0WhhPHYEc7ahHId5T6GaSGjqNL/view?usp=drive_link' className='resume'><Button
variant="outlined"
size="small"
color="primary"
startIcon={<DownloadIcon fontSize="inherit" />}
>
Resume
</Button></a>
</div>
</p>
</div>
<img  className='img-1 animate__animated animate__backInRight' src="src/assets/me.jpeg" alt="Vivek Agrawal" />
</section>
<Box className="tabs-container">
       <TabContext  value={value} >
    <Tabs style={{boxShadow:'0px 4px 10px rgba(240, 239, 239, 0.5)'}} value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Education" value="0"/>
        <Tab label="Skills" value="1" />
        <Tab label="Publications" value="2" />
      </Tabs>
    <TabPanel value="0"  >
    <div className='panel'>
    <div className="portfolio-container animate__animated animate__fadeInUpBig animate__delay-1s">
      {educationData.map((item, index) => (
        <div key={index} className="portfolio-item">
          <div className="timeline-line"></div>
          <div className="portfolio-content">
            <h3>{item.title}</h3>
            <p className="institution">
              {item.institution} ({item.years})
            </p>
            <span className="rating">CGPA:{item.rating}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  </TabPanel>
  <TabPanel value="1" >
    <div className="panel">
    <Container className="skill-container">
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <Card elevation={3} className="skill-card animate__animated animate__zoomInUp">
            <Typography  className="skill-name ">
               <h3> {skill.name}</h3>
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>

  </TabPanel>
  <TabPanel value="2" >
    <div className="panel">
    <div className="portfolio-container animate__animated animate__fadeInLeftBig">
      {Publication.map((item, index) => (
        <div key={index} className="portfolio-item">
          <div className="timeline-line"></div>
          <div className="portfolio-content">
            <h3>{item.title}</h3>
            <p className="institution">
            ({item.years})
            </p>
            <span className="ra"><a href={item.src}>paper link <RiLinksLine/></a></span>
          </div>
        </div>
      ))}
    </div>
    </div>
    </TabPanel>
      </TabContext>
      </Box>
      {/* projects */}
      <h1 className="me-1 animate__animated animate__fadeInLeftBig" id="2" >Projects </h1>
      <section className="hero-section">
        
      <div className="hero-container">
        
        

        {/* Left Content */}
        <div className="hero-text">
          <span className="badge">Web</span>
          <h1> Agresita </h1>
          <p>
          Agresita is our college’s flagship annual event, bringing together students,
           faculty, and industry experts for a vibrant celebration of talent, 
           innovation, and culture.
          </p>
          <a href="https://agresita-vivek-agrawal-projects.vercel.app/" target="_blank" className="hero-button">
            visit →
          </a>
        </div>
  {/* Right Side Images */}
  <div className="hero-images">
           <img src="/assets/Agresita-1.png" alt="Tablet preview" className="tablet-image" />
        </div>
      
      </div>
    </section>
    </div>
  );
};

export default App;
