import AboutUs from './pages/AboutUs'
// GLOBAL STYLE
import GlobalStyle from './components/GlobalStyle';
import Nav from './/components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
