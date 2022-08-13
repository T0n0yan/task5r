import "./App.css";
import "./assets/Style/background.scss";
import "./assets/Style/Global.scss";
import "./assets/Style/flex.scss";
import "../src/assets/Icons/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Pages/Header";
import HeaderContact from "./Pages/Header/HeaderContact";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import Contact from "./Pages/Contact/index";
import Shop from "./Pages/Shop/index";
import CorrectItem from "./Pages/Shop/ShopCorrentItem";
import { Provider } from "react-redux/es/exports";
import store from './Store';


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <HeaderContact />
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/correctItem" element={<CorrectItem/>} />
      </Routes>
      <Footer />
    </Provider>

    </div>
  );
}

export default App;
