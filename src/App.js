import About from "./components/About";
import Developers from "./components/Developers";
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
    </div>
  );
}

export default App;
