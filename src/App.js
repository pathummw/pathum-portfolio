import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import styled from 'styled-components';
import { findByLabelText } from '@testing-library/react';
import TopicComponent from './TopicComponent';
import Skills from './Skills';
import Mywork from './Mywork';
import Contact from './Contact';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Footer';
import ParticlesBg from 'particles-bg';
import { useState, useEffect } from 'react';
import axios from 'axios';
const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";




function App() {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;

  span{
    
  }
  


  @media screen and (max-width: 480px){

  }
`

  /*   const [temp, setTemp] = useState('');
  
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setTemp(data.main))
    }, [temp]) */


  const [data, setData] = useState({ data: null });

  useEffect(async () => {
    const result = await axios(url);
    setData(result)
  }, []);


  return (
    <Container>

      <span><h3>{!data.data ? '' : data.data.main.temp}&#8451;</h3></span>
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
