import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import styled from 'styled-components';
import { findByLabelText } from '@testing-library/react';
import man from './man.png';
import TopicComponent from './TopicComponent';


function App() {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  margin: 0 10%auto;
`



  return (
    <Container>
      <Hero />
      {/* <img src={man} alt="" height={500}/> */}

      <TopicComponent topic="Skills" alignLight="right" />
      <TopicComponent topic="My work" alignLight="left" />
      <TopicComponent topic="My work" alignLight="left" />
      <TopicComponent topic="My work" alignLight="left" />
    </Container>
  );
}

export default App;
