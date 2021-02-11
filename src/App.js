import GlobalStyle from './GlobalStyles';
import Hero from './Hero';
import styled from 'styled-components';
import Skills from './Skills';
import Mywork from './Mywork';
import Contact from './Contact';
import Nav from './Nav';
import ParticlesBg from 'particles-bg';
import Footer from './Footer';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
`



function App() {

  return (
    <Container>
      <GlobalStyle />
      <ParticlesBg type="cobweb" bg={true} color="#D1AD54" />
      <Nav />

      <Hero />
      <Skills />
      <Mywork />
      <Contact />

      <Footer />
    </Container>
  );
}

export default App;
