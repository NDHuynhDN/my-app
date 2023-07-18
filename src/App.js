import "./App.css";
import FirstHome from "./page/FirstHome/FirstHome";
import { GlobalStyle } from "./GlobalStyles";
import Gallery from "./page/Gallery";
import Service from "./page/Service";
import About from "./page/About";
import Team from "./page/Team";
import Header from "./components/Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Contact from "./page/Contact";
import Home from "./page/Home/Home";
import Header2 from "./components/Header/Header2";
import Blogg from "./page/Blog/Blogg";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Header2></Header2>
              <FirstHome />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <Header />
              <Service />
              <Footer />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Header />
              <Gallery />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Header />
              <Blogg />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Header />
              <Team />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
