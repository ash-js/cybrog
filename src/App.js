import './App.css';
import { Container } from './component/index';
import { Header, Hero, MostPopular, Footer } from './sections/index';
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
      {/* k<Footer /> */}
    </>
  );
};
export default App;
