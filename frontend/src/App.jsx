import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ApplyNow } from "./pages/ApplyNow";
import Career from "./pages/Career";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Career />} />
        <Route path="/career/apply" element={<ApplyNow />} />
      </Routes>
      <Toaster
        position="bottom-center"
        gutter={12}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
