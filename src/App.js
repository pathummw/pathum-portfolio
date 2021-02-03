import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import styled from 'styled-components';
import { findByLabelText } from '@testing-library/react';
import man from './man.png';
import TopicComponent from './TopicComponent';
import Skills from './Skills';
import Mywork from './Mywork';
import Contact from './Contact';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Footer';
import ParticlesBg from 'particles-bg';




function App() {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  margin: 0 10%;
`



  return (
    <Container>

      <ParticlesBg type="cobweb" bg={true} color="#D1AD54" />  {/*Gold: color="#D1AD54" */}
      <Nav />


      <Hero />

      <Skills />

      <Mywork />

      <Contact />

      {/* <Footer /> */}



      {/* 
      <TopicComponent topic="Skills" alignLight="right" />
      <TopicComponent topic="My work" alignLight="left" />
      <TopicComponent topic="My work" alignLight="left" />
      <TopicComponent topic="My work" alignLight="left" /> */}
    </Container>
  );
}

export default App;
