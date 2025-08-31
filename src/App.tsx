import AboutProduct from "./components/AboutProduct"
import BankSection from "./components/BankSection";
import Processados from "./components/Processados";
import Header from "./components/Header"
import Diferenciais from "./components/Diferenciais";
import Contact from "./components/FormContato";
import MobileAdSection from "./components/MobileAdSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <AboutProduct />
      <BankSection />
      <Processados />
      <Diferenciais />
      <Contact />
      <MobileAdSection />
      <Footer />
    </>
  );
}

export default App
