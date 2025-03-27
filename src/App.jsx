"use client"
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from "react-router-dom"
import ProjectsPage from "./components/ProjectsPage"
import ProjectDetails from "./components/ProjectDetails"
import { projectsData } from "./components/projectData"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Header and other components would be imported here
import Header from "./components/Header";
import ContactBar from "./components/ContactBar";
import BackToTop from "./components/BackToTop";
import Banner from "./components/Banner"
import WhoAmI from "./components/WhoAmI"
import Services from "./components/Services"
import Tech from "./components/Tech"
import About from "./components/About"
import ContactForm from "./components/ContactForm"

// Wrapper component to handle project detail routing with parameters
const ProjectDetailWrapper = () => {
  const { projectId } = useParams()
  const project = projectsData.find((p) => p.id === projectId)

  // If project not found, redirect to projects page
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return <ProjectDetails project={project} />
}

const App = () => {
  const personalDetails = {
    name: "CREATIVE DEVELOPER",
    location: "Loughborough, UK",
    email: "michael-yeates@outlook.com",
    availability: "Open for work",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  }

  return (
    <Router>
      {/* Header would go here */}
      {/* <Header /> */}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
             <Header />
              <Banner name={personalDetails.name} /> 
              <div id="who-am-i">
                <WhoAmI />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="tech">
                <Tech />
              </div>
              <div id="contact-form">
                <ContactForm />
              </div> 
              <div id="contact-bar">
                 <ContactBar />
                <BackToTop /> 
              </div>
            </>
          }
        />

        {/* Projects Portfolio Page */}
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />

        {/* Individual Project Detail Page */}
        <Route path="/projects/:projectId" element={<ProjectDetailWrapper />} />
      </Routes>
      <Analytics/>
      <SpeedInsights/>
    </Router>
  )
}

export default App

