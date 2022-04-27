import About from "./components/About";
import Developers from "./components/Developers";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Developers />
    </div>
  );
}

export default App;
