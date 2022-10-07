import './App.css';
import { Footer, Container, Hero } from './component/index';
import { Header } from './sections/index';
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
      </Container>
      {/* k<Footer /> */}
    </>
  );
};
export default App;
