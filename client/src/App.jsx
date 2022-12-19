
import Web3ModalProvider from "./contexts/Web3ModalProvider";
import { Navbar, Welcome, Footer, Services } from "./components";

const App = () => (
  <div className="min-h-screen">
    <Web3ModalProvider>
    <div className="bg-gradient-to-b from-blue-700 to-black">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
    </Web3ModalProvider>
  </div>
);

export default App;
