import About from "./components/About";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
